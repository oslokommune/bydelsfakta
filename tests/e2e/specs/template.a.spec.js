import * as d3 from 'd3';

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

    it('SVG exists', () => {
      cy.wait(500);
      cy.contains('svg.graph__svg text.heading tspan', `${title}`);
    });

    it('Contains the right subdistricts', () => {
      cy.get('svg.graph__svg text.geography').should(el => {
        expect(el).to.have.length(responseData[0].data.length);
      });

      cy.get('svg.graph__svg text.geography title').each(el => {
        cy.wrap(el)
          .invoke('text')
          .should('be.oneOf', responseData[0].data.map(d => d.geography));
      });
    });

    if (method === 'value') {
      it('Displays the right value on mobile', () => {
        cy.get('svg.graph__svg text.valueText').each(el => {
          const textValue = method === 'value' ? +el.text().replace(' ', '') : +el.text().replace('%', '') / 100;
          cy.expect(textValue).to.be.oneOf(responseData[0].data.map(d => d.values[0][method]));
        });
      });
    }

    it('Displays the correct value in tooltip (first bar)', () => {
      cy.get('svg.graph__svg rect.bar')
        .first()
        .trigger('mouseover');

      cy.get('.tooltip')
        .invoke('text')
        .then(d => (method === 'value' ? +d.replace(' ', '') : +d.replace('%', '')))
        .should(
          'eq',
          Math.round(d3.max(responseData[0].data.filter(d => !d.avgRow && !d.totalRow).map(d => d.values[0].value)))
        );

      cy.get('svg.graph__svg rect.bar')
        .first()
        .trigger('mouseleave');
    });

    it('Displays the correct value in tooltip (last bar)', () => {
      cy.get('svg.graph__svg .row')
        .last()
        .find('rect.bar')
        .first()
        .trigger('mouseover');

      cy.get('.tooltip')
        .invoke('text')
        .then(d => (method === 'value' ? +d.replace(' ', '') : +d.replace('%', '')))
        .should('eq', Math.round(responseData[0].data.filter(d => d.totalRow)[0].values[0].value));

      cy.get('svg.graph__svg rect.bar')
        .last()
        .trigger('mouseleave');
    });

    it('Navigates to table', () => {
      cy.get('.card__toggle-button[aria-label="Tabell"]').click();
    });

    it('Displays content in each cell in data table', () => {
      cy.get('.graph__tablecontainer th, .graph__tablecontainer td').each(el => {
        cy.expect(el).not.to.be.empty;
      });
    });

    it('Displays the correct values in first row', () => {
      cy.get('.graph__tablecontainer tbody tr')
        .first()
        .find('th')
        .invoke('text')
        .should('eq', responseData[0].data[0].geography);

      cy.get('.graph__tablecontainer tbody tr')
        .first()
        .find('td')
        .first()
        .invoke('text')
        .then(d => d.replace(',', '.'))
        .then(d => (method === 'value' ? +d.replace(' ', '') : +d.replace('%', '')))
        .should('eq', Math.round(responseData[0].data[0].values[0].value));
    });

    it('Displays the correct values in last row', () => {
      cy.get('.graph__tablecontainer tbody tr')
        .last()
        .find('th')
        .invoke('text')
        .should('eq', responseData[0].data.filter(d => d.totalRow)[0].geography);

      cy.get('.graph__tablecontainer tbody tr')
        .last()
        .find('td')
        .first()
        .invoke('text')
        .then(d => d.replace(',', '.'))
        .then(d => (method === 'value' ? +d.replace(' ', '') : +d.replace('%', '')))
        .should('eq', Math.round(responseData[0].data.filter(d => d.totalRow)[0].values[0].value));
    });

    it('Navigates to map', () => {
      cy.get('.card__toggle-button[aria-label="Kart"]').click();
    });

    it('Elements in map legend have "left" style assigned', () => {
      cy.get('.legend__dot').each(el => {
        cy.get(el).should('have.css', 'left');
      });
    });

    it('Values in tooltips are correct', () => {
      cy.get('.legend__dot').each(el => {
        cy.get(el).click({ force: true });
        cy.get('.leaflet-popup-content p')
          .first()
          .invoke('text')
          .then(d => (method === 'value' ? +d.replace(' ', '') : +d.replace('%', '')))
          .should('be.oneOf', responseData[0].data.map(d => Math.round(d.values[0].value)));
      });
    });

    it('Navigates to "Om statistikken"', () => {
      cy.get('.context-menu').click();
      cy.get('#context-menu-button-about').click();
      cy.get('.about-container h3').should('be.visible');
    });
  });
}
