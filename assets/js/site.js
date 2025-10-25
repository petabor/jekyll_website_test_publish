document.addEventListener('DOMContentLoaded', async () => {
  const baseurl = '{{ site.baseurl }}'; // <-- add this line

  const need = new Set([...document.querySelectorAll('[data-behavior]')]
    .map(el => el.dataset.behavior));

  const mods = {};
  const load = async (name, file) => (mods[name] ??= await import(file));

  await import(`${baseurl}/assets/js/behaviors/yearPanel.js`).then(m => m.init());
  await import(`${baseurl}/assets/js/behaviors/comparePanel.js`).then(m => m.init());
  await import(`${baseurl}/assets/js/behaviors/conflictFilter.js`).then(m => m.init());

  if (need.has('enlarge')) await load('enlarge', `${baseurl}/assets/js/behaviors/enlarge.js`).then(m => m.init());
  if (need.has('zoom'))    await load('zoom',    `${baseurl}/assets/js/behaviors/zoom.js`).then(m => m.init());
  if (need.has('link'))    await load('link',    `${baseurl}/assets/js/behaviors/link.js`).then(m => m.init());
  if (need.has('bind'))    await load('bind',    `${baseurl}/assets/js/behaviors/bind.js`).then(m => m.init());
});