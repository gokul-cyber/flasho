import LogsTriggerLists from '../../src/components/logs-trigger-lists';

describe('LogsTriggerLists Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<LogsTriggerLists type="sms" />);
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
  });
});
