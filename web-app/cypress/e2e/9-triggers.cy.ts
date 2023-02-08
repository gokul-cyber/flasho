/// <reference types="cypress" />

describe('Triggers', () => {
  beforeEach(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });

  it('configure trigger', () => {
    cy.visit('/');
    cy.contains('div', 'Triggers').should('be.visible').click();

    //Step 1 => Triggers
    cy.contains('h1', 'Configure Triggers').should('be.visible');
    cy.contains('p', 'Triggers').should('be.visible');
    cy.contains('When should the message be triggered ?').should('be.visible');
    cy.contains('When').should('be.visible');
    cy.contains('button', 'Next').click();
    cy.contains('Incomplete Fields').should('be.visible');
    cy.contains('button', 'A row is inserted in the DB')
      .click()
      .should('have.class', 'bg-blue');
    cy.contains('button', 'A row is updated in the DB')
      .click()
      .should('have.class', 'bg-blue');
    cy.contains('button', 'A row is deleted in the DB')
      .click()
      .should('have.class', 'bg-blue');
    cy.contains('button', 'Next').click();

    //Step 2 => Variables
    cy.contains('p', 'Variables');
    cy.contains('Select the table where the new row will be deleted').should(
      'be.visible'
    );
    cy.contains('Table Name').should('be.visible');
    cy.contains('Select table Name').click({ force: true });
    cy.get('[aria-disabled="false"]').first().click({ force: true });

    cy.contains("Select the variables that you'd want to monitor");

    cy.contains('button', 'Add Variables').click();
    cy.contains('p', 'Define Variables').should('be.visible');
    cy.get('[data-cy="varName"]').type('abcd');
    cy.contains('Select Column Name').click({ force: true });
    cy.get('[aria-disabled="false"]').first().click({ force: true });
    cy.get('[data-cy="addBtn"]').should('be.visible');
    cy.get('[data-cy="deleteBtn"]').should('be.visible');
    cy.contains('[data-cy="addVariables"] > button', 'Submit').should(
      'be.visible'
    );
    cy.get('[data-cy="closeDV"]').click();

    cy.contains('button', 'Add Derived Variables').click();
    cy.contains('p', 'Define Derived Variables').should('be.visible');
    cy.get('[data-cy="varName2"]').type('abcd');
    cy.contains('Select Variable').click({ force: true });
    cy.contains('Operation').click({ force: true });
    cy.get('[aria-disabled="false"]').first().click({ force: true });
    cy.get('[data-cy="addBtn2"]').should('be.visible');
    cy.contains('[data-cy="addDerivedVariables"] > button', 'Confirm').should(
      'be.visible'
    );
    cy.get('[data-cy="deleteBtn2"]').should('be.visible');
    cy.get('[data-cy="closeDDV"]').click();
    cy.contains('button', 'Next').click();

    //Step 3 => Conditions
    cy.contains('p', 'Variables');
    cy.contains('What are the conditions to send your message ?');
    cy.contains('p', 'IF');
    cy.contains('div', 'AND').should('be.visible');
    cy.contains('div', 'OR').should('be.visible');
    cy.contains('button', 'Define new condition').click();
    cy.contains('p', 'OR').should('be.visible');
    cy.get('[data-cy="deleteIcon"]').should('be.visible').first().click();
    cy.get('[data-cy="deleteIcon"]').should('be.visible').click();
    cy.contains('button', 'Next').click();

    //Step 4 => Channel
    cy.contains('h2', 'Channel');
    cy.contains('How do you want to send this message ?').should('be.visible');
    cy.contains('button', 'SMS').should('be.visible').click();
    cy.contains('button', 'Email').should('be.visible').click();
    cy.contains('Which Email service do you intend to use ?').should(
      'be.visible'
    );
    cy.contains('Select Service').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('Amazon SES').click();
    cy.contains('Select the column for Email Address').should('be.visible');
    cy.contains("Email Address's column is present in").should('be.visible');
    cy.contains('Select table').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('User Table').click();
    cy.contains('button', 'Add Foreign Key').click();
    cy.contains('p', 'Add Foreign Key').should('be.visible');
    cy.get('[data-cy="closeFK"]').click();
    cy.contains('User Table').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('Trigger Table').click();
    cy.contains('Select Email Column').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('id').click();
    cy.contains('button', 'Next').click();

    //Step5 => Message
    cy.get('[data-cy="titleInput"]').type('abcdefgh');
    cy.get('[data-cy="subjectInput"]').type('abcdefgh');
    cy.contains('Create a new Email').should('be.visible');
    cy.contains('button', 'Next').click();
    cy.contains('button', 'Browse for templates').should('be.visible');
    cy.contains('button', 'Create from Scratch').should('be.visible').click();
    cy.url().should('contain', '/email-editor');
    cy.contains('button', 'Test').should('be.visible');
    cy.contains('button', 'Submit').should('be.visible');
    cy.go('back');
    cy.contains('button', 'Next').should('be.visible').click({ force: true });
    cy.contains('button', 'Browse for templates').click();
    cy.url().should('contain', '/email-editor/templates');
    cy.contains('button', 'Popular Templates').should('be.visible');
    cy.contains('button', 'Your Templates').should('be.visible');
  });
});

export {};
