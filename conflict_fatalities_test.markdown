<!-- ---
layout: page
title: Test
permalink: /conflict-fatalities-test/
bar: vert
nav_order: 1
category: yearly breakdown 1989-2023
order: 5
# Panel 1 (centered slider + map)
panel1:
  - type: text
    html: |
      <div class="year-slider-container">
        <input type="range" class="range range--panel" data-role="year-slider"
               min="1989" max="2023" value="1989" step="1" list="year-ticks">
        <datalist id="year-ticks">
          {% for y in (1989..2023) %}<option value="{{ y }}"></option>{% endfor %}
        </datalist>
        <p data-role="year-label">Year: 1989</p>
      </div>
  - type: text
    html: |
      <div class="year-images">
        <div class="map-wrapper">
          <img data-role="map-image"
               data-behavior="zoom"
               data-zoom-reset-on-load="true"
               alt="Map">
        </div>
      </div>

# Panel 2 (text left, bar image right)
panel2:
  - type: text
    html: |
      <div class="year-text">
        <h2>Summary</h2>
        <p data-role="description"></p>
      </div>
  - type: img
    src: /assets/images/countries_by_year/bar/deaths_total/1989.png
    alt: "Bar plot"
    attrs: 'data-role="bar-image" data-behavior="enlarge"'

# Panel 2 (text left, bar image right)
panel3:
  - type: text
    html: |
      <div class="context-text">
        <h2>Context</h2>
        <p data-role="context"></p>
      </div>
---

<script src="https://unpkg.com/@panzoom/panzoom/dist/panzoom.min.js"></script>
<script defer src="{{ '/assets/js/site.js' | relative_url }}"></script>

test test

<!-- {% include panel.html layout="col-side-by-side" cells=page.cells %}


<!-- Hidden dictionaries (unchanged) -->
<div id="descriptions" hidden>
  <div data-year="1989">dkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</div>
  <div data-year="1990">…</div>
</div>

<div id="contexts" hidden>
  <div data-year="1989">
  "kdkhgkjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"</div>
  <div data-year="1990">…</div>
</div>

<!-- YEAR PANEL WRAPPER: scope for the controller -->
<section class="main-content"
         data-year-panel
         data-desc-src="#descriptions"
         data-ctx-src="#contexts" 
         data-map-template="/assets/images/countries_by_year/map/deaths_total/{year}.png"
         data-bar-template="/assets/images/countries_by_year/bar/deaths_total/{year}.png">

  <!-- Panel 1: centered slider + map -->
  {% include panel.html layout="col-center" cells=page.panel1 %}

  <!-- Panel 2: text left, image right -->
  {% include panel.html layout="row-txt-by-img" cells=page.panel2 %}

  <!-- Panel 3: text  -->
  {% include panel.html layout="col-txt-center" cells=page.panel3 %}
</section>















<!-- <div id="descriptions" style="display:none">
  <div data-year="1989">blalalb</div>
  <div data-year="1990">more bllajkldjkfffffffffffffffffffff</div>
</div>

<div id="contexts" style="display:none">
  <div data-year="1989">bkdddddddddddddddddddddd</div>
  <div data-year="1990">…</div>
</div>


<div class="main-content" 
     data-year-panel
     data-desc-src="#descriptions"           
     data-ctx-src="#contexts"                
     data-map-template="/assets/images/countries_by_year/map/deaths_total/{year}.png"
     data-bar-template="/assets/images/countries_by_year/bar/deaths_total/{year}.png">

  <div class="year-slider-container">
    <input type="range" data-role="year-slider" min="1989" max="2023" value="1989" step="1" list="year-ticks">
    <datalist id="year-ticks">
      {%- for year in (1989..2023) -%}
        <option value="{{ year }}"></option>
      {%- endfor -%}
    </datalist>
    <p data-role="year-label">Year: 1989</p>
  </div>

  <div class="year-images">
    <div class="map-wrapper">
      <img data-role="map-image"
           data-behavior="zoom"              
           data-zoom-reset-on-load="true"
           alt="Map">
    </div>
  </div>

  <div class="bar-text-row">
    <div class="year-text">
      <h2>Summary</h2>
      <p data-role="description"></p>
    </div>
    <div class="bar-images">
      <img data-role="bar-image" data-behavior="enlarge" alt="Bar plot">
    </div>
  </div>

  <div class="context-text">
    <h2>Context</h2>
    <p data-role="context"></p>
  </div>
</div>  -->

 -->
