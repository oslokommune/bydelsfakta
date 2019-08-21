// https://docs.cypress.io/api/introduction/api.html

import templateA from '../util/template.a.spec';

const base = 'localhost:5000';

describe('Check data input matches data outputs', () => {
  it('Visits the app root url', () => {
    cy.visit(base);
    cy.contains('h1', 'Bydelsfakta');
  });
});

templateA(
  ' Gjennomsnittlig kvadratmeterpris for blokkleiligheter  i Bydel Gamle Oslo',
  '/bydel/gamleoslo/boligpriser',
  'boligpriser-blokkleiligheter-status?geography=01',
  'Bydel Gamle Oslo',
  'Boligpriser'
);

templateA(
  ' Gjennomsnittlig kvadratmeterpris for blokkleiligheter  i Bydel Frogner',
  '/bydel/frogner/boligpriser',
  'boligpriser-blokkleiligheter-status?geography=05',
  'Bydel Frogner',
  'Boligpriser'
);
