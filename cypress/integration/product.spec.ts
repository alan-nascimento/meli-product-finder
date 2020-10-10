import * as Http from '../utils/http-mocks';
import * as Helper from '../utils/helpers';

const path = /items/;

const mockSuccess = (responnse: any = 'fx:product'): void =>
  Http.mockOk(path, 'GET', responnse);

describe('ProductList', () => {
  it('should present product not found message', () => {
    mockSuccess({});

    cy.visit(`/items/invalid_id`);

    cy.getByTestId('not-found-error').should(
      'contain.text',
      'Producto no encontrado.'
    );
  });

  it('should present product with correct values', () => {
    mockSuccess();

    cy.visit(`/items/1`);

    const testProductListText = (text: string): void => {
      Helper.testContainText('product', text);
    };

    testProductListText('iPhone 11 Pro 64 Gb Gris Espacial');
    testProductListText('$ 1.26500');
    testProductListText('Nuevo - 100 vendidos');
    cy.get('img').should('have.length.at.least', 1);
  });

  it('should present the product navigating from home', () => {
    cy.visit(`/`);

    cy.get('input[name="search"]').focus().type('iPhone 11 Pro');
    Http.mockOk(path, 'GET', 'fx:search');

    cy.getByTestId('product-list-item-1').click();
    Http.mockOk(path, 'GET', 'fx:product');

    cy.get('ol').should('contain.text', 'Celulares y Teléfonos');
    cy.get('ol').should('contain.text', 'Celulares y Smartphones');

    Helper.testUrl('/items/1');
  });
});
