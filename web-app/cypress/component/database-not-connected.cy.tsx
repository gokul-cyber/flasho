import { DatabaseNotConnected } from '../../src/components/trigger-menu/trigger-home';

describe('DatabaseNotConnected Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<DatabaseNotConnected mode={'sms'} />);
    cy.get('[data-cy="warningIcon"]').should('be.visible');
    cy.contains('p', 'No Database Connected').should('be.visible');
    cy.contains('p', 'Please connect a database to setup sms trigger').should(
      'be.visible'
    );
    cy.contains('button', 'Connect').should('be.visible');
  });
});
