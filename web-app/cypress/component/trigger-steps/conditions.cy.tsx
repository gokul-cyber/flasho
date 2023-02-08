import Conditions from '../../../src/components/trigger-menu/trigger-steps/Conditions';

describe('Triggers Component', () => {
  it('should mount and works properly', () => {
    cy.mount(<Conditions />);
    cy.contains('What are the conditions to send your message ?').should(
      'be.visible'
    );
    cy.contains('p', 'IF').should('be.visible');
    cy.contains('button', 'Define new condition').should('be.visible');
    cy.contains('button', 'Next').should('be.visible');
  });
});
