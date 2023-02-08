import CreateSMS from '../../src/components/create-sms/CreateSMS';

describe('CreateSMS Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<CreateSMS setMessageTabState={() => {}} isEdit={false} />);
    cy.contains('Create a new SMS').should('be.visible');
    cy.get('[data-cy="inputTitle"]').type('Hello');
    cy.contains('English').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('English').click();
    cy.contains('button', 'Next').should('be.visible');
  });
});
