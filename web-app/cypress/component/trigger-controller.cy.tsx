import TriggerController from '../../src/components/trigger-menu/trigger-controller';

describe('Message Component', () => {
  it('should mount and works properly', () => {
    cy.viewport('macbook-16');
    cy.mount(<TriggerController active={0} />);
    cy.contains('Triggers').should('be.visible');
    cy.contains('Variables').should('be.visible');
    cy.contains('Conditions').should('be.visible');
    cy.contains('Channel').should('be.visible');
    cy.contains('Message').should('be.visible');
  });
});
