import { SMSorEmailServicesNotConnected } from '../../src/components/trigger-menu/trigger-home';

describe('CreateSMS Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<SMSorEmailServicesNotConnected />);
    cy.get('[data-cy="warningIcon"]').should('be.visible');
    cy.contains('p', 'No SMS / E-mail Service Connection found').should(
      'be.visible'
    );
    cy.contains(
      'p',
      'Please connect either an SMS or Email service to setup Triggers'
    ).should('be.visible');
    cy.contains('button', 'Connect').should('be.visible');
  });
});
