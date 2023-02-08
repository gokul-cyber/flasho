import Channel from '../../../src/components/trigger-menu/trigger-steps/Channel';

describe('Message Component', () => {
  before(() => {
    window.localStorage.setItem('ADMIN_SECRET_KEY', 'hello@123');
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(
      <Channel
        setActive={() => {}}
        mode={1}
        messageMode=""
        setMessageMode={() => {}}
        messageService=""
        setMessageService={() => {}}
        messageServiceLabel=""
        setMessageServiceLabel={() => {}}
        phoneNumberColumns={{}}
        setPhoneNumberColumns={() => {}}
        emailColumn=""
        setEmailColumn={() => {}}
        integrationList=""
        columnList={[]}
        columnListLoading={false}
        updateLocalStorage={() => {}}
        tableName=""
        foreignKeyColumn=""
        setForeignKeyColumn={() => {}}
      />
    );
    cy.contains('h2', 'Which service do you intend to use ?').should(
      'be.visible'
    );
    cy.contains('p', "Phone Number's column is present in").should(
      'be.visible'
    );
    cy.contains('button', 'Next').should('be.visible');
  });
});
