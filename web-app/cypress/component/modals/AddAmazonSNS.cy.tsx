import AddAmazonSNS from '../../../src/components/modals/AddAmazonSNS';

describe('AddAmazonSNS Component', () => {
  it('should mount and works properly', () => {
    cy.viewport('macbook-16');
    cy.mount(
      <AddAmazonSNS
        open={true}
        closeModal={() => {}}
        isReconfigure={false}
        isOnboarding={true}
        setIsReconfigure={() => {}}
        setIsSkip={() => {}}
      />
    );
    cy.contains('Connect your Amazon SNS');
    cy.get('[name="aws_access_key_id"]').type('abcd');
    cy.get('[name="aws_secret_access_key"]').type('abcd');
    cy.contains('Select Region').click({ force: true });
    cy.contains('us-east-1').click({ force: true });
    cy.get('[data-cy="connectSNS"]').should('be.visible');
  });
});
