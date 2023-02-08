import DefineDerivedVariables from '../../../src/components/modals/DefineDerivedVariables';

const columnList = [
  {
    value: 0,
    label: 'user_id',
    data_type: 'integer'
  },
  {
    value: 1,
    label: 'event_id',
    data_type: 'integer'
  },
  {
    value: 2,
    label: 'role',
    data_type: 'text'
  },
  {
    value: 3,
    label: 'accepted_invite',
    data_type: 'text'
  }
];

const derVarForms = [
  {
    variable_name: '',
    variable1: '',
    variable2: '',
    operation: ''
  }
];

describe('DefineDerivedVariables Component', () => {
  it('should mount and works properly', () => {
    cy.viewport('macbook-16');
    cy.mount(<DefineDerivedVariables closeModal={() => {}} open={true} />);
    cy.contains('Define Derived Variables').should('be.visible');
    cy.contains('label', 'New Variable Name').should('be.visible');
    cy.get('[id="variable_name"]').type('abcdefg');
    cy.contains('p', 'Relation').should('be.visible');
    cy.contains('Operation').click({ force: true });
    cy.get('[aria-disabled="false"]').first().click();
    cy.get('[data-cy="deleteBtn2"]').should('be.visible');
    cy.get('[data-cy="addBtn2"]').should('be.visible');
    cy.get('[data-cy="closeDDV"]').should('be.visible');
    cy.contains('button', 'Confirm').should('be.visible');
  });
});
