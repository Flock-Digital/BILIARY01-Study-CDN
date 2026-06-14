(function() {
  function init() {
    const languageSelectMini = document.querySelector('.cp-language-select-mini');
    const languageSelectMiniList = document.querySelector('.language-select-mini-list');
    const languageTitle = document.getElementById('languageTitle');
    const languageListItems = document.querySelectorAll('.language-list-mini-item');

    const pathParts = window.location.pathname.split('/').filter(p => p !== '');
    const country = pathParts[0] || '';
    const isMultiLang = MULTI_LANGUAGE_COUNTRIES.includes(country);

    let language, currentPage, basePath;

    if (isMultiLang) {
      language = pathParts[1] || '';
      currentPage = pathParts[2] || 'overview';
      basePath = '/' + country + '/' + language;
    } else {
      language = COUNTRY_DEFAULTS[country] || 'english';
      currentPage = pathParts[1] || 'overview';
      basePath = '/' + country;
    }

    const storedLanguage = sessionStorage.getItem('selectedLanguage');


    function updateNavLinks() {
      document.querySelectorAll('[data-nav]').forEach(link => {
        const page = link.getAttribute('data-nav');
        link.href = page === 'overview' ? basePath : basePath + '/' + page;

        if (page === currentPage) {
          link.classList.add('cc-active');
        } else {
          link.classList.remove('cc-active');
        }
      });
    }

    let visibleLanguageCount = 0;
    languageListItems.forEach(item => {
      const availableCountries = item.getAttribute('data-language-country');
      if (country && availableCountries && availableCountries.split(' ').includes(country)) {
        item.style.display = '';
        visibleLanguageCount++;
      } else {
        item.style.display = 'none';
      }
    });

    const calculatedHeight = (visibleLanguageCount - 1) * 2;
    if (languageSelectMiniList) {
      languageSelectMiniList.style.setProperty('--list-height', `${calculatedHeight}rem`);
    }

    if (visibleLanguageCount > 1 && languageSelectMini) {
      languageSelectMini.classList.remove('cc-hidden');
    }

    const languageToUse = language || storedLanguage;

    if (languageToUse) {
      if (isMultiLang && language && language.toLowerCase() !== (storedLanguage || '').toLowerCase()) {
        sessionStorage.setItem('selectedLanguage', language.toLowerCase());
      }

      const matchingItem = Array.from(languageListItems).find(item => {
        const itemLanguage = item.getAttribute('data-language-select');
        return itemLanguage && itemLanguage.toLowerCase() === languageToUse.toLowerCase();
      });
      if (matchingItem) {
        const languageText = matchingItem.querySelector('.language-text');
        if (languageText && languageTitle) {
          languageTitle.querySelector('div').textContent = languageText.textContent;
        }
        matchingItem.classList.add('cc-selected');
        languageListItems.forEach(item => {
          if (item !== matchingItem) {
            item.classList.remove('cc-selected');
          }
        });
      }
    }

    if (languageSelectMini) {
      languageSelectMini.addEventListener('click', function(e) {
        if (!e.target.closest('.language-list-mini-item')) {
          languageSelectMiniList.classList.toggle('cc-active');
        }
      });
    }

    languageListItems.forEach(item => {
      item.addEventListener('click', function(e) {
        e.stopPropagation();
        const selectedLanguage = this.getAttribute('data-language-select');
        if (selectedLanguage) {
          sessionStorage.setItem('selectedLanguage', selectedLanguage.toLowerCase());
          if (languageSelectMiniList) {
            languageSelectMiniList.classList.remove('cc-active');
          }
          if (country) {
            let newUrl = '/' + country + '/' + selectedLanguage.toLowerCase();
            if (currentPage !== 'overview') {
              newUrl += '/' + currentPage;
            }
            window.location.href = newUrl;
          }
        }
      });
    });

    updateNavLinks();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
