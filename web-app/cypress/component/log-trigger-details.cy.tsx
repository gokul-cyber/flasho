import LogsTriggerDetails from '../../src/components/log-trigger-details';

describe('LogsTriggerLists Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<LogsTriggerDetails type={'email'} />);
    cy.contains('id').should('be.visible');
    cy.contains('status').should('be.visible');
    cy.contains('created at').should('be.visible');
    cy.contains('updated at').should('be.visible');
    cy.contains('button', 'Prev').should('be.visible');
    cy.contains('button', 'Next').should('be.visible');
  });
});
