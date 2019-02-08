// https://docs.cypress.io/api/introduction/api.html

describe('navigationDrawer', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Visits the app root url', () => {
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

  it('Press one checkbox then sammenlign-button is active', () => {
    cy.get('#checkbox-1').check({ force: true });
    cy.get('[data-test="sammenlign"]').should('have.class', 'navigation-link--active');
  });

  it('Go from frontpage to sammenlign and url changes to /bydel/alle, when checkboxes.length is 0', () => {
    cy.get('[type="checkbox"]').each(checkbox => {
      cy.wrap(checkbox).should('not.be.checked');
    });
    cy.get('[data-test="sammenlign-href"]').click();
    cy.url().should('include', '/bydel/alle');
  });

  it('bydel sagene is chosen, press sammenling-button then url changes to /bydel/alle, no checkboxes', () => {
    cy.get('#a-3').click();
    cy.url().should('include', '/bydel/sagene');
    cy.get('#checkbox-3').should('be.checked');
    cy.get('[data-test="sammenlign-href"]').click();
    cy.url().should('include', '/bydel/alle');
    cy.get('#checkbox-3').should('not.be.checked');
  });

  it('sammenlign is true and all checkboxes are checked, url should be /bydel/alle', () => {
    cy.get('[type="checkbox"]').each(checkbox => {
      cy.wrap(checkbox).check({ force: true }).should('be.checked');
    });
    cy.url().should('include', '/bydel/alle');
  });

  it('bydel sagene and tema is alder, press bydel sagene again and page is changed to bydel frontpage', () => {
    cy.get('#a-3').click();
    cy.url().should('include', '/bydel/sagene');
    cy.get('#alder').click();
    cy.url().should('include', '/bydel/sagene/alder');
    cy.get('#a-3').click();
    cy.url().should('include', '/bydel/sagene');
  });
});
