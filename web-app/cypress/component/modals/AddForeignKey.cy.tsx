import AddForeignKey from '../../../src/components/modals/AddForeignKey';

describe('Add Foreign Component', () => {
  it('should mount and works properly', () => {
    cy.mount(<AddForeignKey open={true} closeModal={() => {}} />);
    cy.contains('Add Foreign Key').should('be.visible');
    cy.contains('button', 'Done').should('be.visible');
  });
});
