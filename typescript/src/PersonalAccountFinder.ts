import { BankAccount } from './BankAccount';
import { BranchFinder } from './BranchFinder';

export class PersonalAccountFinder {
  private readonly branchFinder = new BranchFinder();

  findAccountFor(
    { customerName, town }: {
      customerName: string;
      town: string;
    }
  ): BankAccount {
    return this.branchFinder
      .findBranchForTown(town)
      .personalAccounts
      // now CashMachine does not care about the change
      // in the indirect dependency
      .getAccountForCustomer(customerName, 'manager name');
  }
}
