export function init() {
  const run = () => {
    const root = document.querySelector('[data-filter-panel]');
    if (!root) {
      console.warn('No [data-filter-panel] element found — will retry...');
      setTimeout(run, 100); // retry every 100ms until DOM ready
      return;
    }

    const base = root.dataset.base;
    const select = root.querySelector('#conflict-select');
    const topImg = root.querySelector('img[alt="Top"]');
    const bottomImg = root.querySelector('img[alt="Bottom"]');

    function updateImages(file) {
      if (!file) return;
      const topPath = `${base}/fatalities_by_conflict/${file}`;
      const bottomPath = `${base}/headlines_by_conflict/${file}`;
      topImg.src = topPath;
      bottomImg.src = bottomPath;
      console.log('✅ Updated images:', topPath, bottomPath);
    }

    select.addEventListener('change', (e) => updateImages(e.target.value));

    const first = select.options[0]?.value;
    if (first) {
      select.value = first;
      updateImages(first);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
}




// export function init() {
//   const root = document.querySelector('[data-filter-panel]');
//   if (!root) return;

//   const base = root.dataset.base;
//   const select = root.querySelector('#conflict-select');
//   const topImg = root.querySelector('img[alt="Top"]');
//   const bottomImg = root.querySelector('img[alt="Bottom"]');

//   function updateImages(file) {
//     if (!file) return;
//     const topPath = `${base}/fatalities_by_conflict/${file}`;
//     const bottomPath = `${base}/headlines_by_conflict/${file}`;
//     topImg.src = topPath;
//     bottomImg.src = bottomPath;
//   }

//   // When selection changes
//   select.addEventListener('change', (e) => updateImages(e.target.value));

//   // --- Load first conflict automatically ---
//   const first = select.options[0]?.value;
//   if (first) {
//     select.value = first;
//     updateImages(first);
//   }
// }

// export function init() {
//   // Wait until DOM is ready
//   if (document.readyState === 'loading') {
//     document.addEventListener('DOMContentLoaded', init);
//     return;
//   }

//   const root = document.querySelector('[data-filter-panel]');
//   if (!root) {
//     console.warn('No [data-filter-panel] element found');
//     return;
//   }

//   const base = root.dataset.base;
//   const select = root.querySelector('#conflict-select');
//   const topImg = root.querySelector('img[alt="Top"]');
//   const bottomImg = root.querySelector('img[alt="Bottom"]');

//   function updateImages(file) {
//     if (!file) return;
//     const topPath = `${base}/fatalities_by_conflict/${file}`;
//     const bottomPath = `${base}/headlines_by_conflict/${file}`;
//     topImg.src = topPath;
//     bottomImg.src = bottomPath;
//     console.log('Updated images:', topPath, bottomPath);
//   }

//   // Handle dropdown changes
//   select.addEventListener('change', (e) => updateImages(e.target.value));

//   // Load first option automatically
//   const first = select.options[0]?.value;
//   if (first) {
//     select.value = first;
//     updateImages(first);
//   }
// }
