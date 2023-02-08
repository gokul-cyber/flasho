import SendEmail from '../../../src/components/modals/SendEmail';

describe('SendEmail Component', () => {
  it('should mount and work properly', () => {
    cy.mount(<SendEmail open={true} />);
    cy.contains('Are you sure you want to continue?').should('be.visible');
    cy.contains(
      'This e-mail will be sent to everyone in the selected audience.'
    ).should('be.visible');
    cy.contains('button', 'Confirm').should('be.visible');
  });
});
