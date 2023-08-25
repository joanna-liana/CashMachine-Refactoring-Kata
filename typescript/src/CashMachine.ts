import { BranchFinder } from './BranchFinder';

export class CashMachine {
  private readonly branchFinder = new BranchFinder();

  // a change in PersonalAccountsManager
  // enforced a change to the interface of CashMachine
  withdraw({ cashAmount, customerName, bankManager, town }: {
    town: string;
    customerName: string;
    bankManager: string;
    cashAmount: number;
  }): boolean {
    return this.branchFinder
      .findBranchForTown(town)
      .personalAccounts
      .getAccountForCustomer(customerName, bankManager)
      .withdraw(cashAmount);
  }
}
