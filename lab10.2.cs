using System;

public class Lab10InsufficientFundsException : Exception
{
    public Lab10InsufficientFundsException(string mesaj) : base(mesaj) { }
}

public class Lab10BankAccount
{
    public decimal Balance { get; private set; }

    public Lab10BankAccount(decimal balance)
    {
        Balance = balance;
    }

    public void Withdraw(decimal amount)
    {
        if (amount > Balance)
            throw new Lab10InsufficientFundsException("Fonduri insuficiente.");
        
        Balance -= amount;
    }
}