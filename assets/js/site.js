document.addEventListener('DOMContentLoaded', async () => {
  const baseurl = '/jekyll_website_test_publish'; // <-- add this line

  const need = new Set([...document.querySelectorAll('[data-behavior]')]
    .map(el => el.dataset.behavior));

  const mods = {};
  const load = async (name, file) => (mods[name] ??= await import(file));

  await import(`/jekyll_website_test_publish/assets/js/behaviors/yearPanel.js`).then(m => m.init());
  await import(`/jekyll_website_test_publish/assets/js/behaviors/comparePanel.js`).then(m => m.init());
  await import(`/jekyll_website_test_publish/assets/js/behaviors/conflictFilter.js`).then(m => m.init());

  if (need.has('enlarge')) await load('enlarge', `/jekyll_website_test_publish/assets/js/behaviors/enlarge.js`).then(m => m.init());
  if (need.has('zoom'))    await load('zoom',    `/jekyll_website_test_publish/assets/js/behaviors/zoom.js`).then(m => m.init());
  if (need.has('link'))    await load('link',    `/jekyll_website_test_publish/assets/js/behaviors/link.js`).then(m => m.init());
  if (need.has('bind'))    await load('bind',    `/jekyll_website_test_publish/assets/js/behaviors/bind.js`).then(m => m.init());
});