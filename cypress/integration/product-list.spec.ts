import faker from 'faker';

import * as Http from '../utils/http-mocks';

const path = /items/;

const mockSuccess = (responnse: any = 'fx:search'): void =>
  Http.mockOk(path, 'GET', responnse);

describe('ProductList', () => {
  it('should present on product not found error', () => {
    const invalidSearch = faker.random.uuid();
    mockSuccess({});

    cy.visit(`/items?search=${invalidSearch}`);
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
});
