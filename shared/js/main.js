// BelSO Shared JavaScript

// Google Analytics (gtag.js)
(function() {
  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-9YX9728SFP';
  document.head.appendChild(script);
  
  // Initialize dataLayer and gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', 'G-9YX9728SFP');
})();

// Translations
const translations = {
  ru: {
    hero: {
      title: 'BelSO Belarus Science Olympiad Infrastructure',
      description: 'Независимая платформа для подготовки, проведения и архивирования школьных олимпиад по физике, астрономии, математике и информатике',
      learnMore: 'Узнать больше'
    },
    metrics: {
      archivedPackages: 'Архивных пакетов',
      indexedProblems: 'Задач проиндексировано',
      publishedSolutions: 'Решений опубликовано',
      activeContributors: 'Активных участников',
      contestsHosted: 'Олимпиад проведено',
      totalUsers: 'Пользователей'
    },
    departments: {
      title: 'Отделения',
      subtitle: 'Четыре специализированных платформы в единой сети BelSO',
      belpho: {
        subject: 'Физика',
        description: 'Платформа для подготовки к олимпиадам по физике. Тренировочные треки, архив задач и решений.',
        link: 'Перейти на BelPhO.org'
      },
      belmath: {
        subject: 'Математика',
        description: 'Комплексная платформа для математических олимпиад. Треки подготовки от основ до национального уровня.',
        link: 'Перейти на BelMath.org'
      },
      belastro: {
        subject: 'Астрономия',
        description: 'Ресурсы для изучения астрономии и подготовки к олимпиадам. Задачи, решения, тренировочные материалы.',
        link: 'Перейти на BelAstro.org'
      },
      beloi: {
        subject: 'Информатика',
        description: 'Платформа для олимпиадного программирования. Задачи, тестирование, архив соревнований.',
        link: 'Перейти на BelOI.org'
      }
    },
    audience: {
      title: 'Для кого BelSO',
      subtitle: 'Инфраструктура для всех участников олимпиадного движения',
      students: {
        title: 'Для учащихся',
        description: 'Структурированные треки подготовки, банк задач с решениями, возможность тренироваться самостоятельно даже в небольших городах без доступа к тренерам.',
        item1: 'Тренировочные треки по уровням',
        item2: 'Банк задач с решениями',
        item3: 'Архив олимпиадных заданий',
        item4: 'Возможность отслеживать прогресс'
      },
      teachers: {
        title: 'Для преподавателей',
        description: 'Готовые материалы для занятий, структурированные программы подготовки, доступ к архивам и методическим материалам.',
        item1: 'Готовые программы подготовки',
        item2: 'Банк задач по темам',
        item3: 'Методические материалы',
        item4: 'Возможность создавать свои треки'
      },
      organizers: {
        title: 'Для организаторов',
        description: 'Полный набор инструментов для проведения олимпиад: регистрация, доставка заданий, сбор решений, проверка, публикация результатов.',
        item1: 'Olympiad Suite полный цикл',
        item2: 'Регистрация участников',
        item3: 'Система проверки и апелляций',
        item4: 'Автоматическая публикация результатов',
        learnMore: 'Узнать больше'
      }
    },
    latestActivity: {
      title: 'Последние события',
      season: 'Сезон 2023 2024',
      description: 'Активно проводятся региональные и национальные этапы олимпиад. Результаты публикуются в реальном времени на платформах отделений.',
      updated: 'Обновлено',
      viewDashboard: 'Посмотреть Dashboard',
      learnAboutImpact: 'Узнать о Impact'
    }
  },
  en: {
    hero: {
      title: 'BelSO Belarus Science Olympiad Infrastructure',
      description: 'Independent platform for preparation, hosting, and archiving of school olympiads in physics, astronomy, mathematics, and informatics',
      learnMore: 'Learn more'
    },
    metrics: {
      archivedPackages: 'Archived packages',
      indexedProblems: 'Problems indexed',
      publishedSolutions: 'Solutions published',
      activeContributors: 'Active contributors',
      contestsHosted: 'Contests hosted',
      totalUsers: 'Users'
    },
    departments: {
      title: 'Departments',
      subtitle: 'Four specialized platforms in the BelSO network',
      belpho: {
        subject: 'Physics',
        description: 'Platform for physics olympiad preparation. Training tracks, problem archive and solutions.',
        link: 'Go to BelPhO.org'
      },
      belmath: {
        subject: 'Mathematics',
        description: 'Comprehensive platform for mathematics olympiads. Training tracks from basics to national level.',
        link: 'Go to BelMath.org'
      },
      belastro: {
        subject: 'Astronomy',
        description: 'Resources for studying astronomy and olympiad preparation. Problems, solutions, training materials.',
        link: 'Go to BelAstro.org'
      },
      beloi: {
        subject: 'Informatics',
        description: 'Platform for competitive programming. Problems, testing, competition archive.',
        link: 'Go to BelOI.org'
      }
    },
    audience: {
      title: 'Who BelSO is for',
      subtitle: 'Infrastructure for all participants of the olympiad movement',
      students: {
        title: 'For students',
        description: 'Structured training tracks, problem bank with solutions, ability to practice independently even in small towns without access to coaches.',
        item1: 'Training tracks by level',
        item2: 'Problem bank with solutions',
        item3: 'Olympiad problem archive',
        item4: 'Ability to track progress'
      },
      teachers: {
        title: 'For teachers',
        description: 'Ready-made materials for classes, structured preparation programs, access to archives and teaching materials.',
        item1: 'Ready-made preparation programs',
        item2: 'Problem bank by topic',
        item3: 'Teaching materials',
        item4: 'Ability to create your own tracks'
      },
      organizers: {
        title: 'For organizers',
        description: 'Complete set of tools for hosting olympiads: registration, task delivery, solution collection, grading, results publication.',
        item1: 'Olympiad Suite full cycle',
        item2: 'Participant registration',
        item3: 'Grading and appeals system',
        item4: 'Automatic results publication',
        learnMore: 'Learn more'
      }
    },
    latestActivity: {
      title: 'Latest activity',
      season: '2023 2024 Season',
      description: 'Regional and national olympiad stages are actively being held. Results are published in real-time on department platforms.',
      updated: 'Updated',
      viewDashboard: 'View Dashboard',
      learnAboutImpact: 'Learn about Impact'
    }
  }
};

// Get current language from localStorage or default to 'ru'
function getCurrentLanguage() {
  return localStorage.getItem('belso-lang') || 'ru';
}

// Set language preference
function setLanguage(lang) {
  localStorage.setItem('belso-lang', lang);
  document.documentElement.setAttribute('data-language', lang);
  document.documentElement.setAttribute('lang', lang);
  applyTranslations(lang);
  updateLanguageSwitcher(lang);
  updateMetaTags(lang);
}

// Update meta tags based on language
function updateMetaTags(lang) {
  const metaDescription = document.querySelector('meta[name="description"]');
  const ogDescription = document.querySelector('meta[property="og:description"]');
  
    if (lang === 'en') {
      if (metaDescription) {
        metaDescription.setAttribute('content', 'BelSO independent infrastructure for Belarusian school olympiads in physics, astronomy, mathematics, and informatics.');
      }
      if (ogDescription) {
        ogDescription.setAttribute('content', 'Independent infrastructure for Belarusian school olympiads');
      }
    } else {
      if (metaDescription) {
        metaDescription.setAttribute('content', 'BelSO независимая инфраструктура для белорусских школьных олимпиад по физике, астрономии, математике и информатике.');
      }
      if (ogDescription) {
        ogDescription.setAttribute('content', 'Независимая инфраструктура для белорусских школьных олимпиад');
      }
    }
}

// Apply translations to the page
function applyTranslations(lang) {
  const langData = translations[lang];
  if (!langData) return;

  // Find all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getNestedValue(langData, key);
    if (value !== undefined) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.value = value;
      } else if (element.hasAttribute('placeholder')) {
        element.setAttribute('placeholder', value);
      } else {
        element.textContent = value;
      }
    }
  });
}

// Get nested value from object using dot notation
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current && current[key], obj);
}

// Update language switcher buttons
function updateLanguageSwitcher(currentLang) {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const btnLang = btn.getAttribute('data-lang');
    if (btnLang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// Initialize language switcher event listeners
function initLanguageSwitcher() {
  const buttons = document.querySelectorAll('.lang-btn');
  if (buttons.length === 0) {
    // Buttons not loaded yet, try again after a short delay
    setTimeout(initLanguageSwitcher, 200);
    return;
  }
  
  buttons.forEach(btn => {
    // Remove existing listeners to avoid duplicates
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
    
    newBtn.addEventListener('click', function() {
      const newLang = this.getAttribute('data-lang');
      setLanguage(newLang);
    });
  });
  
  // Update switcher state
  const currentLang = getCurrentLanguage();
  updateLanguageSwitcher(currentLang);
}

// Make initLanguageSwitcher available globally
window.initLanguageSwitcher = initLanguageSwitcher;

// Initialize language on page load
function initLanguage() {
  const currentLang = getCurrentLanguage();
  setLanguage(currentLang);
  
  // Initialize language switcher (will retry if buttons not loaded yet)
  initLanguageSwitcher();
  
  // Also try again after header loads (fallback)
  setTimeout(initLanguageSwitcher, 500);
}

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
  
  // Initialize language
  initLanguage();
  
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
      const currentLang = getCurrentLanguage();
      const locale = currentLang === 'en' ? 'en-US' : 'ru-RU';
      lastUpdated.textContent = new Date(data.lastUpdated).toLocaleDateString(locale, {
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
  const currentLang = getCurrentLanguage();
  const locale = currentLang === 'en' ? 'en-US' : 'ru-RU';
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toLocaleString(locale);
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

