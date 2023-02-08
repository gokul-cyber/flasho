import Message from '../../../src/components/trigger-menu/trigger-steps/Message';

describe('Message Component', () => {
  before(() => {
    window.localStorage.setItem('ADMIN_SECRET_KEY', 'hello@123');
    cy.viewport('macbook-16');
  });
  it('should mount and works properly', () => {
    cy.mount(<Message />);
  });
});
