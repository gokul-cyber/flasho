/// <reference types="cypress" />

describe('Log Triggers', () => {
  beforeEach(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });

  it('configure trigger', () => {
    cy.visit('/');
    cy.contains('div', 'Logs').should('be.visible').click();
    cy.url().should('contain', '/log/sms');
    cy.request({
      method: 'GET',
      url: 'http://localhost:8000/api/v1/triggers/events/sms',
      headers: { 'x-admin-secret-key': Cypress.env('admin-secret-key') }
    }).then(res => {
      const triggers = res?.body?.triggers;
      if (triggers?.length === 0)
        cy.contains('No triggers found').should('be.visible');
      else {
        cy.contains('p', 'Name').should('be.visible');
        cy.contains('p', 'Preview').should('be.visible');
        cy.contains('p', 'Language').should('be.visible');
        cy.contains(triggers[0].title.slice(0, 20)).should('be.visible');
        cy.contains(triggers[0].preview.slice(0, 20)).should('be.visible');
      }
    });
    cy.contains('button', 'Email Triggers').should('be.visible').click();
    cy.request({
      method: 'GET',
      url: 'http://localhost:8000/api/v1/triggers/events/email',
      headers: { 'x-admin-secret-key': Cypress.env('admin-secret-key') }
    }).then(res => {
      const triggers = res?.body?.triggers;
      if (triggers?.length === 0)
        cy.contains('No triggers found').should('be.visible');
      else {
        cy.contains('p', 'Name').should('be.visible');
        cy.contains('p', 'Preview').should('be.visible');
        cy.contains('p', 'Language').should('be.visible');
        cy.contains(triggers[0].title.slice(0, 20)).should('be.visible');
        cy.contains(triggers[0].preview.slice(0, 20)).should('be.visible');
      }
    });
  });
});

export {};
