const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  navigation.classList.toggle('open', !isOpen);
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
  }
});

const searchInput = document.querySelector('#topic-search');
const searchItems = [...document.querySelectorAll('.searchable')];
const status = document.querySelector('#search-status');
const noResults = document.querySelector('#no-results');

function normalize(value) {
  return value.toLocaleLowerCase('zh-CN').replace(/\s+/g, ' ').trim();
}

function filterTopics() {
  const query = normalize(searchInput.value);
  let count = 0;

  searchItems.forEach((item) => {
    const searchableText = normalize(`${item.dataset.search || ''} ${item.textContent}`);
    const match = !query || searchableText.includes(query);
    item.hidden = !match;
    if (match) count += 1;
  });

  status.textContent = query ? `找到 ${count} 个相关主题` : '';
  noResults.hidden = count !== 0;
}

searchInput?.addEventListener('input', filterTopics);

document.querySelectorAll('details').forEach((details) => {
  details.addEventListener('toggle', () => {
    if (details.open && details.classList.contains('condition')) {
      details.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    }
  });
});
