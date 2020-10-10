import faker from 'faker';

import * as Helper from '../utils/helpers';

describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load with correct initial state', () => {
    cy.get('input[name="search"]').should('have.value', '');
    cy.get('input[name="search"]').should('have.attr', 'placeholder');
    cy.getByTestId('home').should('not.have.descendants');
  });

  it('should redirect to /items route when user type a valid search', () => {
    const search = faker.commerce.productName();

    cy.get('input[name="search"]').focus().type(search);
    cy.get('input[name="search"]').should('have.value', search);
    cy.getByTestId('home').should('have.length', 1);

    Helper.testUrl(`/items?search=${encodeURI(search)}`);
  });

  it('should redirect to /items when user manually submit the search form', () => {
    const search = faker.random.alphaNumeric(2);

    cy.get('input[name="search"]').focus().type(search);
    cy.getByTestId('search-form').submit();
    cy.getByTestId('home').should('have.length', 1);

    Helper.testUrl(`/items?search=${encodeURI(search)}`);
  });
});
