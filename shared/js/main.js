// BelSO Shared JavaScript

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const nav = document.querySelector('.nav');
  
  if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', function() {
      nav.classList.toggle('active');
    });
  }
  
  // Close mobile menu when clicking outside
  document.addEventListener('click', function(event) {
    if (nav && nav.classList.contains('active')) {
      if (!nav.contains(event.target) && !mobileToggle.contains(event.target)) {
        nav.classList.remove('active');
      }
    }
  });
  
  // Load metrics from JSON
  loadMetrics();
});

// Helper to get relative path from current location to target
function getRelativePathTo(target) {
  if (!target.startsWith('/') || target.startsWith('http')) return target;
  
  const current = window.location.pathname;
  const currentDir = current.substring(0, current.lastIndexOf('/') + 1);
  const targetPath = target.substring(1); // Remove leading /
  
  const currentParts = currentDir.split('/').filter(p => p);
  const targetParts = targetPath.split('/').filter(p => p);
  
  // Find common path
  let common = 0;
  while (common < currentParts.length - 1 && 
         common < targetParts.length && 
         currentParts[common] === targetParts[common]) {
    common++;
  }
  
  // Go up from current
  const up = currentParts.length - 1 - common;
  const upPath = '../'.repeat(up);
  
  // Go down to target
  const downPath = targetParts.slice(common).join('/');
  
  return upPath + (downPath || 'index.html');
}

// Load and display metrics
async function loadMetrics() {
  try {
    // Convert absolute paths to relative paths
    const metricsPath = getRelativePathTo('/shared/data/metrics.json');
    const response = await fetch(metricsPath);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const text = await response.text();
    if (!text || text.trim() === '') {
      throw new Error('Empty response from metrics.json');
    }
    
    const data = JSON.parse(text);
    
    // Update metric tiles
    document.querySelectorAll('[data-metric]').forEach(element => {
      const metricKey = element.getAttribute('data-metric');
      let value = data;
      
      // Handle nested keys (e.g., "departments.belpho.packages")
      const keys = metricKey.split('.');
      for (const key of keys) {
        if (value && value[key] !== undefined) {
          value = value[key];
        } else {
          value = undefined;
          break;
        }
      }
      
      if (value !== undefined) {
        element.textContent = formatNumber(value);
      }
    });
    
    // Update last updated timestamp
    const lastUpdated = document.querySelector('[data-last-updated]');
    if (lastUpdated && data.lastUpdated) {
      lastUpdated.textContent = new Date(data.lastUpdated).toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
  } catch (error) {
    // Silently fail - metrics are optional
    // console.error('Error loading metrics:', error);
    // Metrics will show default values from HTML
  }
}

// Format large numbers
function formatNumber(num) {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toLocaleString('ru-RU');
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

