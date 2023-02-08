import DraftEmail from '../../src/components/create-email/DraftEmail';

describe('DraftEmail Component', () => {
  it('should mount and works properly', () => {
    cy.mount(<DraftEmail />);
    cy.contains('Create a new Email').should('be.visible');
    cy.contains('button', 'Create from Scratch').should('be.visible');
    cy.contains('button', 'Browse for templates').should('be.visible');
    cy.get('[data-cy="backBtn"]').should('be.visible');
  });
});
