describe('navigationTopbar', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Go to bydel sagene - open dropdown - pick alder', () => {
    cy.get('#a-sagene').click();
    cy.url().should('include', '/bydel/sagene');
    cy.get('#alder').click();
    cy.url().should('include', '/bydel/sagene/alder');
    cy.get('#select').click();
    cy.get('#dropdown-href-folkemengde').click();
    cy.url().should('include', '/bydel/sagene/folkemengde');
  });

  it('back button says Velg bydel', () => {
    cy.get('h4').contains('Velg bydel');
  });

  it('Go to bydel sagene - back button says Bydel Sagene and sends you to the frontpage', () => {
    cy.get('#a-sagene').click();
    cy.url().should('include', '/bydel/sagene');
    cy.get('h4').contains('Bydel Sagene');
    cy.get('#backButton').click();
    cy.url().should('include', '/');
  });

  it('Go to bydel sagene - then to folkemengde - back button says Bydel sagene - sends you back to bydel page', () => {
    cy.get('#a-sagene').click();
    cy.url().should('include', '/bydel/sagene');
    cy.get('h4').contains('Bydel Sagene');
    cy.get('#alder').click();
    cy.get('h4').contains('Bydel Sagene');
    cy.url().should('include', '/bydel/sagene/alder');
    cy.get('#backButton').click();
    cy.url().should('include', '/bydel/sagene');
    cy.get('h4').contains('Bydel Sagene');
  });

  it('Go to bydel sagene with alder - press button two times - page is frontpage', () => {
    cy.get('#a-sagene').click();
    cy.url().should('include', '/bydel/sagene');
    cy.get('h4').contains('Bydel Sagene');
    cy.get('#alder').click();
    cy.url().should('include', '/bydel/sagene/alder');
    cy.get('h4').contains('Bydel Sagene');
    cy.get('#backButton').click();
    cy.get('#backButton').click();
    cy.url().should('include', '/');
    cy.get('h4').contains('Velg bydel');
  });

  it('check bydel sagene checkbox - back button says Sammenling bydeler', () => {
    cy.get('#checkbox-sagene').check({ force: true });
    cy.url().should('include', '/bydel/3');
    cy.get('#sammenlign').should('have.class', 'navigation-link--active');
    cy.get('h4').contains('Sammenligne bydeler');
  });

  it('check bydel sagene checkbox - go to alder - back button says sammenlign bydeler', () => {
    cy.get('#checkbox-sagene').check({ force: true });
    cy.url().should('include', '/bydel/3');
    cy.get('#alder').click();
    cy.url().should('include', '/bydel/3/alder');
    cy.get('h4').contains('Sammenligne bydeler');
  });

  it('check bydel sagene checkbox - go to alder - back button twice - back button says velg bydel', () => {
    cy.get('#checkbox-sagene').check({ force: true });
    cy.url().should('include', '/bydel/3');
    cy.get('#alder').click();
    cy.url().should('include', '/bydel/3/alder');
    cy.get('h4').contains('Sammenligne bydeler');
    cy.get('#backButton').click();
    cy.url().should('include', '/bydel/3');
    cy.get('#backButton').click();
    cy.url().should('include', '/');
    cy.get('h4').contains('Velg bydel');
  });
});
