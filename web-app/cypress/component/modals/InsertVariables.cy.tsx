import InsertVariables from '../../../src/components/modals/InsertVariables';

describe('InsertVariables Component', () => {
  it('should mount and works properly', () => {
    cy.mount(
      <InsertVariables
        open={true}
        closeModal={() => {}}
        addVariableToTextField={() => {}}
      />
    );
    cy.contains('Insert Variables').should('be.visible');
    cy.contains('button', 'Create New Variables').should('be.visible');
    cy.contains('button', 'Create New Variables').should('be.visible');
  });
});
