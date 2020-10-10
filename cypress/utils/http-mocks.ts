export const mockOk = (url: RegExp, method: string, response: any): void => {
  cy.server();
  cy.route({
    method,
    url,
    status: 200,
    response,
  }).as('request');
};
