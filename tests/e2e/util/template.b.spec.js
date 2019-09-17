const base = 'localhost:5000';

export default function(title, path, apiendpoint, geography, topic, method = 'value') {
  describe(`Test data flow for "${title}"`, () => {
    let responseData = [];

    it('Finds the page', () => {
      cy.visit(`${base}/${path}`);
      cy.contains('h1', topic);
      cy.contains('button.selectedTopic', geography);
    });

    it('Loads the data', () => {
      cy.request(`${base}/api/dataset/${apiendpoint}`)
        .then(res => {
          responseData = res.body;
          return res;
        })
        .its('body')
        .then(d => {
          cy.wrap(d[0])
            .its('district')
            .should('eq', geography);
        });
    });
  });
}
