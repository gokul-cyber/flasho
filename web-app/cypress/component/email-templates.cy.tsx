import EmailTemplates from '../../src/components/email-templates';
import defaultTemplate from './default_template.json';
import userCreatedTemplate from './user_created_template.json';
import 'cypress-real-events/support';

describe('EmailTemplates Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<EmailTemplates triggerId={'d32534535'} />);
    cy.contains('button', 'Popular Templates').should('be.visible').click();
    cy.get('[class*="Style_grid_element"]').should('be.visible').realHover();
    cy.contains('button', 'Preview').should('be.visible');
    cy.contains('[class*="Style_grid"]', 'Use Template').should('be.visible');
    cy.contains('button', 'Your Templates').should('be.visible').click();
    cy.get('[class*="Style_grid_element"]').should('be.visible').realHover();
    cy.contains('button', 'Preview').should('be.visible');
    cy.contains('[class*="Style_grid"]', 'Use Template').should('be.visible');
  });
});
