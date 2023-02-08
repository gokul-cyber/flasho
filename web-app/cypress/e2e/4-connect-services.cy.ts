/// <reference types="cypress" />

describe('Connect services', () => {
  beforeEach(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
  });

  it('should have page for connecting services', () => {
    cy.visit('/connect/services');

    cy.contains('Please connect your services');
    cy.contains('SMS / Email Provider');
    cy.contains('button', 'Skip').should('be.visible');

    cy.contains('button', 'Amazon SNS').click();
    cy.contains('Connect your Amazon SNS');
    cy.get('[id="sns_access_key_id"]').type(
      Cypress.env('sns').aws_access_key_id
    );
    cy.get('[id="sns_secret_access_key"]').type(
      Cypress.env('sns').aws_secret_access_key
    );
    cy.get('[id="sns_aws_region"]').click();
    cy.get('[aria-disabled="false"]')
      .contains(Cypress.env('sns').aws_region)
      .click({ force: true });
    cy.contains('[data-cy="connectSNS"] > button', 'Connect').click();
    cy.contains('Amazon SNS Connected', { timeout: 6000 });
    cy.contains('Amazon SNS is connected successfully');

    cy.contains('button', 'Amazon SES').click();
    cy.contains('Connect your Amazon SES');
    cy.get('[id="ses_access_key_id"]').type(
      Cypress.env('ses').aws_access_key_id
    );
    cy.get('[id="ses_secret_access_key"]').type(
      Cypress.env('ses').aws_secret_access_key
    );
    cy.get('[id="email_address"]').type(
      Cypress.env('ses').source_email_address
    );
    cy.get('[id="ses_aws_region"]').click();
    cy.get('[aria-disabled="false"]')
      .contains(Cypress.env('ses').aws_region)
      .trigger('click', { force: true });
    cy.contains('[data-cy="connectSES"] > button', 'Connect').click();
    cy.contains('Amazon SES Connected', { timeout: 6000 });
    cy.contains('Amazon SES is connected successfully');

    cy.contains('button', 'Next').click();
  });
});

export {};
