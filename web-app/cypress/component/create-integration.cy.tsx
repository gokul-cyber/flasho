import CreateIntegration from '../../src/components/create-integrations';

describe('CreateIntegration Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<CreateIntegration />);
    cy.contains('p', 'Integrations').should('be.visible');
    cy.request({
      method: 'GET',
      url: 'http://localhost:8000/api/v1/settings/get_integrations',
      headers: { 'x-admin-secret-key': Cypress.env('admin-secret-key') }
    }).then(res => {
      const integrations = res.body;
      //   cy.log(res.body);
      if (res.body.db.postgres.is_connected) {
        cy.contains('h2', 'Postgres').should('be.visible');
        cy.get('[data-cy="deleteDB"]').should('be.visible');
        cy.get('[data-cy="reconfigDB"]').should('be.visible');
      } else {
        cy.contains('No database connected').should('be.visible');
      }
      if (res.body.email.ses.is_connected) {
        cy.contains('h2', 'Amazon SES').should('be.visible');
        cy.get('[data-cy="toggleEmail"]').should('be.visible');
        cy.get('[data-cy="deleteEmail"]').should('be.visible');
        cy.get('[data-cy="reconfigEmail"]').should('be.visible');
      } else {
        cy.contains('No Email services connected').should('be.visible');
      }
      if (res.body.sms.sns.is_connected) {
        cy.contains('h2', 'Amazon SNS').should('be.visible');
        cy.get('[data-cy="toggleSMS"]').should('be.visible');
        cy.get('[data-cy="deleteSMS"]').should('be.visible');
        cy.get('[data-cy="reconfigSMS"]').should('be.visible');
      } else {
        cy.contains('No SMS services connected').should('be.visible');
      }
    });
    cy.contains('button', 'New Connection').should('be.visible').click();
    cy.contains('p', 'What do you want to connect ?').should('be.visible');
    cy.contains('button', 'PostgreSQL').should('be.visible').click();
    cy.contains('Connect your PostgreSQL database').should('be.visible');
    cy.get('[data-cy="closeDB"]').click();
    cy.contains('BUTTON', 'Amazon SNS').should('be.visible').click();
    cy.contains('Connect your Amazon SNS').should('be.visible');
    cy.get('[data-cy="closeSNS"]').click();
    cy.contains('button', 'Amazon SES').should('be.visible').click();
    cy.contains('Connect your Amazon SES').should('be.visible');
    cy.get('[data-cy="closeSES"]').click();
    cy.get('[data-cy="backBtn"]').click();
  });
});
