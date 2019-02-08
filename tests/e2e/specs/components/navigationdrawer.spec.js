// https://docs.cypress.io/api/introduction/api.html

describe('navigationDrawer', () => {
  it('Visits the app root url', () => {
    cy.visit('/');
    cy.contains('h1', 'Forside');
    cy.get('nav').contains('a', 'Bydel Gamle Oslo');
    cy.get('#checkbox-1').check({ force: true });
    cy.get('#checkbox-1').should('be.checked');
    cy.get('#checkbox-1').uncheck({ force: true });
    cy.contains('a', 'Bydel Gamle Oslo');
    cy.visit('#/bydel/gamleoslo');
    cy.get('#checkbox-1').should('be.disabled');
    cy.get('#checkbox-1').uncheck({ force: true });
  });
});
