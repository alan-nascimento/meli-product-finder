import faker from 'faker';

import * as Http from '../utils/http-mocks';
import * as Helper from '../utils/helpers';

const path = /items/;

const mockSuccess = (responnse: any = 'fx:search'): void =>
  Http.mockOk(path, 'GET', responnse);

describe('ProductList', () => {
  it('should present message on product not found error', () => {
    const invalidSearch = faker.random.uuid();
    mockSuccess({});

    cy.visit(`/`);

    cy.get('input[name="search"]').focus().type(invalidSearch);
    cy.getByTestId('product-list').should('have.length', 1);

    cy.getByTestId('not-found-error').should(
      'contain.text',
      'No hay anuncios que coincidan con su búsqueda.'
    );
    cy.getByTestId('not-found-error').should(
      'contain.text',
      'Revisa la ortografía de la palabra.'
    );
    cy.getByTestId('not-found-error').should(
      'contain.text',
      'Utilice palabras más genéricas o menos palabras.'
    );
  });

  it('should present product items with correct values', () => {
    mockSuccess();

    const testProductListText = (text: string): void => {
      Helper.testContainText('product-list-item', text);
    };

    cy.visit(`/`);

    cy.get('input[name="search"]').focus().type('iPhone 11 Pro');
    cy.getByTestId('product-list').should('have.length', 1);

    cy.get('ol').should('contain.text', 'Celulares y Teléfonos');
    cy.get('ol').should('contain.text', 'Celulares y Smartphones');

    testProductListText('iPhone 11 Pro 64 Gb Gris Espacial');
    testProductListText('$ 1.26500');
    testProductListText('Capital Federal');
    cy.get('img').should('have.length.at.least', 4);
  });
});
