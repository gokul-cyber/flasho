/// <reference types="cypress" />

describe('New SMS Notificatins', () => {
  beforeEach(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });

  it('configure trigger', () => {
    cy.visit('/sms');
    cy.contains('button', 'View existing SMS').click();
    cy.url().should('contain', '/sms/all');
    cy.contains('div', 'View and edit your triggers');
    cy.go('back');

    cy.contains('button', 'Create new SMS').click();

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
    cy.contains('Which SMS service do you intend to use ?');
    cy.contains('Select Service').click({ force: true });
    cy.get('[aria-disabled="false"]').click({ force: true });
    cy.contains("Phone Number's column is present in").should('be.visible');
    cy.contains('Select table').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('User Table').click();
    cy.contains('button', 'Add Foreign Key').click();
    cy.contains('p', 'Add Foreign Key').should('be.visible');
    cy.get('[data-cy="closeFK"]').click();
    cy.contains('User Table').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('Trigger Table').click();
    cy.contains('Country code and Phone number').should('be.visible').click();
    cy.contains('Phone number (has country code)').should('be.visible').click();
    cy.contains('Column for Phone number').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('id').click();
    cy.contains('button', 'Next').click();

    //Step5 => Message
    cy.contains('Create a new SMS').should('be.visible');
    cy.get('[data-cy="inputTitle"]').type('abcdefgh');
    cy.contains('English').click({ force: true });
    cy.get('[aria-disabled="false"]').contains('English').click();
    cy.contains('button', 'Next').click();

    cy.contains('Draft and Send').should('be.visible');
    cy.get('[data-cy="typeMessage"]').type('Hello Everyone...');
    cy.contains('section > button', 'Submit').click();
    cy.contains('Are you sure you want to continue?').should('be.visible');
    cy.contains(
      'This SMS will be sent to everyone in the selected audience.'
    ).should('be.visible');
    cy.contains('[data-cy="sendSMS"]', 'Confirm').should('be.visible');
    cy.get('[data-cy="closeSMS"]').click();
    cy.contains('button', 'Add Variables').click();
    cy.contains('Insert Variables').should('be.visible');
    cy.contains('button', 'Create New Variables').should('be.visible');
    cy.get('[data-cy="closeIV"]').click();
    cy.contains('button', 'Test').click();
    cy.contains('Send a sample SMS to a test number').should('be.visible');
    cy.contains('Test Phone Address').should('be.visible');
    cy.get('[data-cy="PNumber"]').type('1234567890');
    cy.contains('button', 'Send').should('be.visible');
    cy.get('[data-cy="closeTS"]').click();
    cy.contains('button', 'Preview').click();
    cy.contains('[data-cy="previewSMS"] > button', 'Test').should('be.visible');
    cy.contains('[data-cy="previewSMS"] > button', 'Submit').should(
      'be.visible'
    );
  });
});

export {};
