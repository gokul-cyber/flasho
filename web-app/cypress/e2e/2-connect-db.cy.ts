/// <reference types="cypress" />

describe('Connect Database', () => {
  beforeEach(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });

  it('should have page for database connection', () => {
    cy.visit('/connect/db');
    cy.contains('Please connect your database');

    //Icon should be visible
    cy.get('[data-cy="logo"]').should('be.visible');

    //Button for connecting database should be visible
    cy.get('[data-cy="addPostgreBtn"]').should('be.visible').click();

    //AddPostgreSQL modal should be visible
    cy.contains('Connect your PostgreSQL database');

    cy.get('[data-cy="hostInput"]').type(Cypress.env('DB').host, {
      log: false
    });

    //All the input fields should work properly
    cy.get('[data-cy="databaseInput"]').type(Cypress.env('DB').database, {
      log: false
    });
    cy.get('[data-cy="portInput"]').type(Cypress.env('DB').port, {
      log: false
    });
    cy.get('[data-cy="userInput"]').type(Cypress.env('DB').user, {
      log: false
    });
    cy.get('[data-cy="passwordInput"]').type(Cypress.env('DB').password, {
      log: false
    });
    cy.contains('button', 'Connect').click();

    //Confirmation should be visible
    cy.contains('PostgreSQL Connected');
    cy.contains('Your PostgreSQL database is connected successfully');

    cy.url().should('contain', '/connect/usertable');
  });
});

export {};
