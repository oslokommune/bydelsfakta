// https://docs.cypress.io/api/introduction/api.html

import templateA from '../util/template.a.spec';
import templateC from '../util/template.c.spec';

const base = 'localhost:5000';

describe('Check data input matches data outputs', () => {
  it('Visits the app root url', () => {
    cy.visit(base);
    cy.contains('h1', 'Bydelsfakta');
  });
});

// templateA(
//   'Husholdning etter eie-/leieforhold  i Bydel Frogner (2018)',
//   '/bydel/frogner/eierform',
//   'eieform-status?geography=05',
//   'Bydel Frogner',
//   'Eierform',
//   'ratio'
// );

templateC(
  'Husholdning etter eie-/leieforhold i Bydel Nordre Aker',
  '/bydel/nordreaker/eierform',
  'eieform-historisk?geography=08',
  'Bydel Nordre Aker',
  'Eierform',
  'ratio',
  '#tabButton-Eierform-2'
);
