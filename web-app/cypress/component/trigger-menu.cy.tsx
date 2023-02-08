import TriggerMenu from '../../src/components/trigger-menu';

describe('EmailTemplates Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<TriggerMenu mode={'email'} />);
    cy.contains('button', 'Create new email').should('be.visible');
    cy.contains('button', 'View existing email').should('be.visible');
  });
});
