/**
 * Run this file (for instance from index.js) to generate and console.log the content for sitemap.xml
 */

import { topicNames as topics } from './topics';
import allDistricts from './allDistricts';

const base = 'https://bydelsfakta.oslo.kommune.no';

let routes = [];

routes.push(base);
allDistricts.forEach(district => {
  routes.push(`${base}/bydel/${district.uri}`);
  topics.forEach(topic => {
    routes.push(`${base}/bydel/${district.uri}/${topic}`);
  });
});

let xml = '';

xml += `<?xml version="1.0" encoding="UTF-8"?>\n
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n
`;

routes.forEach(route => {
  xml += `<url>
    <loc>${route}</loc>
  </url>\n`;
});

xml += `</urlset>`;

const xmlString = xml;

console.log(xmlString);
