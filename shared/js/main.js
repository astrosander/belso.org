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

// Load and display metrics
async function loadMetrics() {
  try {
    // Convert absolute paths to relative paths for local file access
    let metricsPath = '/shared/data/metrics.json';
    if (metricsPath.startsWith('/')) {
      const depth = window.location.pathname.split('/').filter(p => p && !p.endsWith('.html')).length - 1;
      metricsPath = '../'.repeat(depth) + metricsPath.substring(1);
    }
    const response = await fetch(metricsPath);
    const data = await response.json();
    
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
    console.error('Error loading metrics:', error);
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

