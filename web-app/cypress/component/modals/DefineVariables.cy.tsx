import DefineVariables from '../../../src/components/modals/DefineVariables';

describe('DefineVariables Component', () => {
  it('should mount and works properly', () => {
    cy.viewport('macbook-16');
    cy.mount(<DefineVariables closeModal={() => {}} open={true} />);
    cy.contains('Define Variables').should('be.visible');
    cy.contains('New Variable Name').should('be.visible');
    cy.get('[data-cy="varName"]').type('abcd');
    cy.contains('Value').should('be.visible');
    cy.get('[data-cy="addBtn"]').should('be.visible');
    cy.get('[data-cy="deleteBtn"]').should('be.visible');
    cy.contains('button', 'Submit').should('be.visible');
  });
});
