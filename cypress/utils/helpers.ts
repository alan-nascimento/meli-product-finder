const { baseUrl }: { baseUrl: string } = Cypress.config();

export const testUrl = (path: string): void => {
  cy.url().should('eq', `${baseUrl}${path}`);
};
