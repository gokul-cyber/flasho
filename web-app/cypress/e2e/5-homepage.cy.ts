/// <reference types="cypress" />

describe('Home page', () => {
  beforeEach(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
  });

  it('should have page for selecting table', () => {
    cy.visit('/');
    cy.get('[data-cy="icon"]').should('be.visible');
    cy.contains('Help');
    cy.get('[data-cy="heartIcon"]').should('be.visible');

    cy.get('[data-cy="settingIcon"]').click();
    cy.url().should('contain', '/setup/integration');
    cy.go('back');

    cy.contains('Email Notifications').click();
    cy.contains('Create new Email').should('be.visible');
    cy.contains('View existing Email').should('be.visible');

    cy.contains('SMS Notifications').click();
    cy.url().should('contain', '/sms');
    cy.contains('Create new SMS').should('be.visible');
    cy.contains('View existing SMS').should('be.visible');

    cy.contains('Triggers').click();
    cy.url().should('contain', '/triggers/d');

    cy.contains('Logs').click();
    cy.url().should('contain', '/log/sms');
    cy.contains('SMS Triggers');
    cy.contains('Email Triggers').click();
    cy.url().should('contain', '/log/sms');
  });
});

export {};
