import { ServiceNotConnected } from '../../src/components/trigger-menu/trigger-home';

describe('CreateSMS Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<ServiceNotConnected mode={'sms'} />);
    cy.get('[data-cy="warningIcon"]').should('be.visible');
    cy.contains('p', 'No sms Service Connected').should('be.visible');
    cy.contains('p', 'Please connect sms service to setup sms Triggers').should(
      'be.visible'
    );
    cy.contains('button', 'Connect').should('be.visible');
  });
});
