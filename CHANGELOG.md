# Unreleased (v.1.1)

### About this version

This planned expansion takes place in November 2019 and adds features ommited from the main product launch.

### 🚀 New features

- Sort rows when expanding a series in multi-series bar charts (Template A)
- Add map to district-view
- Add cramped housing topic ('Rom per person')
- Add graph for births and deaths ('Fødselsoverskudd')
- Add three new datasets for immigration data ('Personer med innvandrerbakgrunn')
- Add a 'norskfødt med én innvandrerforelder'-card
- Add 'dødsrater-historisk' graph
- Add 'bygningstyper-alle' graphs, both historic and status
- Add card for migration over time ('Inn- og utvandring')

### 💅 Improvements

- Partially or fully refactor d3.js scripts for templates A, D, F, J, K, M, N
- More descriptive headings and labels for graphs
- Add legend to box plot
- Improve colors on some charts making them more distinguishable
- Convert most of the legacy enter/update/exit pattern to d3v5's `join()` pattern
- Convert custom color legends to [`d3-svg-legend`](https://d3-legend.susielu.com/)
- Add markers for 100% on Template K
- Use 5-years groups in Template M
- More consistent use of color in visualisations

### 🔧 Other changes

- Remove card for expected population growth ('Forventet utvikling') because of inaccurate data
- Remove map view from 'Husholdninger med barn' card
- Add links to external data sources on 'About' view for cards
- Update .prettierrc
- Remove 'brush' functionality from the shaded area on the age distribution graph (Template D)

### 🐛 Bugfixes

- Fix issue where close button was included when downloading graph as SVGs and PNGs
- Fix floating point rounding error in axis ticks when formatted as permille
- Fix scroll position when going out of fullscreen-mode
- Fix bug where opacity of lines on line charts was too faint when saving as PNG
- Fix issue on Template K where some row dividers has wrong opacity
- Fix issue where brush selection is reset when changing tabs or geographies on template D

&nbsp;

---

# Release 1.0

**https://bydelsfakta.oslo.kommune.no/**

This is the first official release of Bydelsfakta created by [Oslo Origo](http://labs.oslo.kommune.no/) in
[City of Oslo](http://oslo.kommune.no/).

Official date of release 27 August 2019.

### Main features

#### Visualising data

- 13 templates for visualising data
  - Bar charts (single or multiple series)
  - Line chart (single series)
  - Line chart (multiple series)
  - Brushable bar chart for age distributions
  - Population pyramid
  - Dot and box plot for age distributions
  - Data grid with sparklines
  - Detailed line chart for population changes
  - Ternary plot
  - Stacked bar chart
  - Compact multi-series bar charts for comparisons
  - Combo line chart and histogram for migration data
  - Combo bar chart and line charts for migration data
- Visualising geospatial data

#### Exporting data

- Export dataset as Excel (.xlsx)
- Export dataset as CSV (.csv)
- Export graph as image (.png)
- Export graph as SVG

#### Exploring statistics

- Compare districts in Oslo
- Compare subdistricts within a district
- View dataset as data grid

#### Other

- Fully responsive experience
- 4 x 100/100 on Google Lighthouse audit

### Main credits

- [Aulon Mujaj](https://github.com/aulonm) (dev)
- [Jesper Kiledal](https://github.com/kiledal) (design, dev)
- Kaia Helene Holmgren (team lead, QA)
- Origo's [data platform team](https://labs.oslo.kommune.no/artikler/oslodata-til-folket) (data transformations)
- Planning and Strategy Department in City of Oslo (data provider, QA)
