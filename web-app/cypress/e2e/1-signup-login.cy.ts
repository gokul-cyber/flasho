/// <reference types="cypress" />

describe('Signup & login page', () => {
  it('should have signup page', () => {
    cy.visit('/signup');

    //flasho logo should be visible
    cy.get('[data-cy="logo"]').should('be.visible');

    //Both input fields should be visible
    cy.get('[data-cy="input1"]').type(Cypress.env('admin-secret-key'), {
      log: false
    });
    cy.get('[data-cy="input2"]').type(Cypress.env('admin-secret-key'), {
      log: false
    });

    //Signup button should be visible
    cy.get('[data-cy="signupBtn"]')
      .should('be.visible')
      .and('contain.text', 'Sign up')
      .click();

    cy.url().should('contain', '/connect/db');
  });

  it('should have login page', () => {
    cy.visit('/login');

    //flasho logo should be visible
    cy.get('[data-cy="logo"]').should('be.visible');

    //input field should be visible
    cy.get('[data-cy="input"]').type(Cypress.env('admin-secret-key'), {
      log: false
    });

    //Login button should be visible
    cy.get('[data-cy="loginBtn"]')
      .should('be.visible')
      .and('contain.text', 'Enter')
      .click();
  });
});

export {};
