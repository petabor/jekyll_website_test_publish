document.addEventListener('DOMContentLoaded', async () => {
  const baseurl = '{{ site.baseurl }}';
  const need = new Set([...document.querySelectorAll('[data-behavior]')]
    .map(el => el.dataset.behavior));

  const mods = {};
  const load = async (name, file) => (mods[name] ??= await import(file));

  await import('/assets/js/behaviors/yearPanel.js').then(m => m.init());
  await import('/assets/js/behaviors/comparePanel.js').then(m => m.init());
  await import('/assets/js/behaviors/conflictFilter.js').then(m => m.init());

  if (need.has('enlarge')) await load('enlarge', '/assets/js/behaviors/enlarge.js').then(m => m.init());
  if (need.has('zoom'))    await load('zoom',    '/assets/js/behaviors/zoom.js').then(m => m.init());
  if (need.has('link'))    await load('link',    '/assets/js/behaviors/link.js').then(m => m.init());
  if (need.has('bind'))    await load('bind',    '/assets/js/behaviors/bind.js').then(m => m.init());
  
});