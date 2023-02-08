/// <reference types="cypress" />

describe('Setup Integration', () => {
  beforeEach(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.visit('/setup/integration');
  });

  it('should have page for managing connections', () => {
    cy.get('[data-cy="logo"]').should('be.visible');
    cy.contains('Help').should('be.visible');
    cy.get('[data-cy="settingIcon"]').should('be.visible');
    cy.get('[data-cy="heartIcon"]').should('be.visible');
    cy.contains('p', 'Integrations').should('be.visible');

    cy.contains('h2', 'Postgres').should('be.visible');
    cy.get('[data-cy="deleteDB"]').should('be.visible');
    cy.get('[data-cy="reconfigDB"]').should('be.visible').click();
    cy.contains('p', 'Reconfigure your PostgreSQL database').should(
      'be.visible'
    );
    cy.contains('[data-cy="addPostgres"] > button', 'Reconfigure').should(
      'be.visible'
    );
    cy.get('[data-cy="closeDB"]').click();

    cy.contains('h2', 'Email Services').should('be.visible');
    cy.contains('h2', 'Amazon SES').should('be.visible');
    cy.get('[data-cy="toggleEmail"]')
      .contains('Deactivate')
      .click()
      .contains('Activate')
      .click();
    cy.get('[data-cy="deleteEmail"]').should('be.visible');
    cy.get('[data-cy="reconfigEmail"]').click();
    cy.contains('p', 'Reconfigure your Amazon SES').should('be.visible');
    cy.contains('[data-cy="connectSES"] > button', 'Reconfigure').should(
      'be.visible'
    );
    cy.get('[data-cy="closeSES"]').click();

    cy.contains('h2', 'SMS Services').should('be.visible');
    cy.contains('h2', 'Amazon SNS').should('be.visible');
    cy.get('[data-cy="toggleSMS"]')
      .contains('Deactivate')
      .click()
      .contains('Activate')
      .click();
    cy.get('[data-cy="deleteSMS"]').should('be.visible');
    cy.get('[data-cy="reconfigSMS"]').click();
    cy.contains('p', 'Reconfigure your Amazon SNS').should('be.visible');
    cy.contains('[data-cy="connectSNS"]', 'Reconfigure').should('be.visible');
    cy.get('[data-cy="closeSNS"]').click();

    cy.get('[data-cy="logout"]').click();
    cy.url().should('contain', '/setup/logout');
    cy.contains('p', 'Logout').should('be.visible');
    cy.contains('button', 'Logout').should('be.visible');

    cy.get('[data-cy="about"]').click();
    cy.url().should('contain', '/setup/about');
  });

  it('should have an option to create a new connection', () => {
    cy.contains('New Connection').should('be.visible').click();
    cy.contains('What do you want to connect ?').should('be.visible');
    cy.contains('button', 'PostgreSQL').should('be.visible').click();

    cy.contains('Connect your PostgreSQL database').should('be.visible');
    cy.get('[data-cy="hostInput"]').type('abcd');
    cy.get('[data-cy="databaseInput"]').type('abcd');
    cy.get('[data-cy="portInput"]').type('5432');
    cy.get('[data-cy="userInput"]').type('abcd');
    cy.get('[data-cy="passwordInput"]').type('abcd');
    cy.contains('[data-cy="addPostgres"]', 'Connect').should('be.visible');
    cy.get('[data-cy="closeDB"]').click();

    cy.contains('SMS / Email Provider').should('be.visible');
    cy.contains('button', 'Amazon SNS').should('be.visible').click();
    cy.contains('Connect your Amazon SNS');
    cy.get('[id="sns_access_key_id"]').type('abcd');
    cy.get('[id="sns_secret_access_key"]').type('abcd');
    cy.contains('Select Region').click({ force: true });
    cy.get('[aria-disabled="false"]').first().click({ force: true });
    cy.contains('[data-cy="connectSNS"]', 'Connect').should('be.visible');
    cy.get('[data-cy="closeSNS"]').click();

    cy.contains('button', 'Amazon SES').should('be.visible').click();
    cy.contains('Connect your Amazon SES');
    cy.get('[id="ses_access_key_id"]').type('abcd');
    cy.get('[id="ses_secret_access_key"]').type('abcd');
    cy.get('[id="email_address"]').type('abcd');
    cy.contains('Select Region').click({ force: true });
    cy.get('[aria-disabled="false"]').first().click({ force: true });
    cy.contains('[data-cy="connectSES"]', 'Connect').should('be.visible');
    cy.get('[data-cy="closeSES"]').click();

    cy.get('[data-cy="backBtn"]').click();
  });
});

export {};
