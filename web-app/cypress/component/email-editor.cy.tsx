import EmailEditorMain from '../../src/components/email-editor';

describe('EmailEditorMain Component', () => {
  before(() => {
    window.localStorage.setItem(
      'ADMIN_SECRET_KEY',
      Cypress.env('admin-secret-key')
    );
    window.localStorage.setItem('d12345', JSON.stringify({ body_design: {} }));
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(
      <EmailEditorMain
        setBodyHtml={() => {}}
        setBodyDesign={() => {}}
        trigger_id={'d12345'}
      />
    );
  });
});
