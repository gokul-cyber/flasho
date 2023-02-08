/// <reference types="cypress" />

describe('Connect usertable', () => {
  beforeEach(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
  });

  it('should have page for selecting table', () => {
    cy.visit('/connect/usertable');

    cy.contains('Please select the user table');
    cy.contains('Table Name');
    cy.contains('button', 'Skip').should('be.visible');

    cy.contains('Select table Name').click({ force: true });
    cy.get('[aria-disabled="false"]').first().click({ force: true });

    cy.contains('Primary Key');
    cy.contains('Select Column Name').click({ force: true });
    cy.get('[aria-disabled="false"]').first().click({ force: true });

    cy.contains('button', 'Next').click();

    cy.contains('Users table added');

    cy.url().should('contain', '/connect/services');
  });
});

export {};
