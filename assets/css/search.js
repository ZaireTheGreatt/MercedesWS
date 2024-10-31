(async () => {
  await import('https://cdn.jsdelivr.net/npm/minisearch@4.0.3/dist/umd/index.min.js');
  const searchIndex = await fetch('/search-index.json').then(response => response.text());
  const index = MiniSearch.loadJSON(searchIndex, { fields: ['title', 'content'] });
  const input = document.querySelector('.top-search input[type="text"]');
  const closeSearch = document.querySelector('.top-search .close-search');
  const searchResultsContainer = document.querySelector('.top-search .search-results');

  const search = query => {
    const results = index.search(query, { prefix: true, fuzzy: 0.3 });
    displaySearchResults(results);
  };

  input.addEventListener('input', event => {
    search(event.target.value);
  });

  closeSearch.addEventListener('click', () => {
    input.value = '';
    searchResultsContainer.innerHTML = '';
    searchResultsContainer.classList.remove('show');
  });

  document.addEventListener('click', event => {
    if (!event.target.closest('.top-search')) {
      searchResultsContainer.classList.remove('show');
    }
  });

  function displaySearchResults(results) {
    const searchResultsHTML = results.map(result => {
      return `
        <div class="search-result">
          <h2><a href="${result.pathname}">${result.title}</a></h2>
          <p>${result.description}</p>
        </div>
      `;
    }).join('');
    searchResultsContainer.innerHTML = searchResultsHTML;
    searchResultsContainer.classList.add('show');
  }
})();