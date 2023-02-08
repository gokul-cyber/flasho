import Triggers from '../../../src/components/trigger-menu/trigger-steps/Triggers';

describe('Triggers Component', () => {
  it('should mount and works properly', () => {
    cy.viewport('macbook-16');
    cy.mount(<Triggers />);
    cy.contains('When should the message be triggered ?').should('be.visible');
    cy.contains('When').should('be.visible');
    cy.contains('button', 'A row is inserted in the DB').should('be.visible');
    cy.contains('button', 'A row is updated in the DB').should('be.visible');
    cy.contains('button', 'A row is deleted in the DB').should('be.visible');
    cy.contains('button', 'Next').should('be.visible');
  });
});
