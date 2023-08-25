export class BankAccount {
  constructor(
    public readonly accountHolder: string,
    private _accountBalance: number
  ) {}

  get accountBalance() {
    return this._accountBalance;
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this._accountBalance) {
      this._accountBalance -= amount;

      return true;
    }

    return false;
  }
}
