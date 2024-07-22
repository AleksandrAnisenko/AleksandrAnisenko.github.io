import { AccountService } from './AccountService';

describe('AccountService', () => {
  describe('Premium user', () => {
    it(`return 21 for category Car`, () => {
      const account = new AccountService('Premium', 'Car');
      expect(account.discount).toBe(21);
    });
    it('return 25 for category Toy', () => {
      const account = new AccountService('Premium', 'Toy');
      expect(account.discount).toBe(25);
    });
    it('return 30 for category Food', () => {
      const account = new AccountService('Premium', 'Food');
      expect(account.discount).toBe(30);
    });
  });

  describe('Gold user', () => {
    it('return 10 for category Car', () => {
      const account = new AccountService('Gold', 'Car');
      expect(account.discount).toBe(10);
    });
    it('return 13 for category Toy', () => {
      const account = new AccountService('Gold', 'Toy');
      expect(account.discount).toBe(13);
    });
    it('return 15 for category Food', () => {
      const account = new AccountService('Gold', 'Food');
      expect(account.discount).toBe(15);
    });
  });

  describe('Standard user', () => {
    it('return 5 for category Car', () => {
      const account = new AccountService('Standard', 'Car');
      expect(account.discount).toBe(5);
    });
    it('return 5 for category Toy', () => {
      const account = new AccountService('Standard', 'Toy');
      expect(account.discount).toBe(5);
    });
    it('return 8 for category Food', () => {
      const account = new AccountService('Standard', 'Food');
      expect(account.discount).toBe(8);
    });
  });

  describe('Free user', () => {
    it('return 0 for category Car', () => {
      const account = new AccountService('Free', 'Car');
      expect(account.discount).toBe(0);
    });
    it('return 0 for category Toy', () => {
      const account = new AccountService('Free', 'Toy');
      expect(account.discount).toBe(0);
    });
    it('return 0 for category Food', () => {
      const account = new AccountService('Free', 'Food');
      expect(account.discount).toBe(0);
    });
  });
});