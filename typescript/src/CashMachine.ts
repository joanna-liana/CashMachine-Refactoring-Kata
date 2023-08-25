import { PersonalAccountFinder } from './PersonalAccountFinder';

export class CashMachine {
  private readonly accountFinder = new PersonalAccountFinder();

  withdraw({ cashAmount, customerName, town }: {
    town: string;
    customerName: string;
    cashAmount: number;
  }): boolean {
    return this.accountFinder
      .findAccountFor({ customerName, town })
      .withdraw(cashAmount);
  }
}
