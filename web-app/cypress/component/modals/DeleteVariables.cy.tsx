import DeleteVariables from '../../../src/components/modals/DeleteVariables';

describe('DeleteVariables Component', () => {
  it('should mount and works properly', () => {
    cy.mount(
      <DeleteVariables
        open={true}
        closeModal={() => {}}
        confirmAction={() => {}}
        dependentVariables={[]}
        currentDeleteVariable=""
      />
    );

    cy.contains('Are you sure want to delete ?').should('be.visible');
    cy.contains("You won't be able to use again.").should('be.visible');
    cy.contains('button', 'Delete').should('be.visible');
  });
});
