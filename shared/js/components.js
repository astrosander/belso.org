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

// Component loader for header and footer
async function loadComponent(elementId, filePath) {
  try {
    // Convert absolute paths to relative paths for local file access
    let relativePath = filePath;
    if (filePath.startsWith('/')) {
      relativePath = getRelativePathTo(filePath);
    }
    const response = await fetch(relativePath);
    let html = await response.text();
    const element = document.getElementById(elementId);
    if (element) {
      // Fix all absolute paths in the loaded HTML
      html = html.replace(/href="\/([^"]+)"/g, (match, path) => {
        if (path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) return match;
        return `href="${getRelativePathTo('/' + path)}"`;
      });
      
      html = html.replace(/src="\/([^"]+)"/g, (match, path) => {
        if (path.startsWith('http')) return match;
        return `src="${getRelativePathTo('/' + path)}"`;
      });
      
      element.innerHTML = html;
      
      // Update department name if on department site
      const departmentName = getDepartmentName();
      if (departmentName) {
        const deptSpan = document.querySelector('[data-department-name]');
        if (deptSpan) {
          deptSpan.textContent = `— ${departmentName}`;
        }
        
        // Update CTA button text
        const ctaButton = document.querySelector('[data-cta-text]');
        if (ctaButton) {
          ctaButton.textContent = 'Start training';
        }
      }
      
      // Set active nav link
      setActiveNavLink();
    }
  } catch (error) {
    console.error(`Error loading component ${elementId}:`, error);
  }
}

function getDepartmentName() {
  const hostname = window.location.hostname;
  if (hostname.includes('belpho')) return 'BelPhO';
  if (hostname.includes('belastro')) return 'BelAstro';
  if (hostname.includes('belmath')) return 'BelMath';
  if (hostname.includes('beloi')) return 'BelOI';
  return null;
}

function setActiveNavLink() {
  const currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.includes(href.replace('/', ''))) {
      link.classList.add('active');
    }
  });
}

// Load components when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  loadComponent('header-placeholder', '/shared/components/header.html');
  loadComponent('footer-placeholder', '/shared/components/footer.html');
  
  // Load analytics if placeholder exists
  const analyticsPlaceholder = document.getElementById('analytics-placeholder');
  if (analyticsPlaceholder) {
    loadComponent('analytics-placeholder', '/shared/components/analytics.html');
  }
});

