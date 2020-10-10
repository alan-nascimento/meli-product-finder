const { baseUrl }: { baseUrl: string } = Cypress.config();

export const testUrl = (path: string): void => {
  cy.url().should('eq', `${baseUrl}${path}`);
};

export const testContainText = (testId: string, text: string): void => {
  cy.getByTestId(testId).should('contain.text', text);
};
