describe('Bank Deposit', function () {
    it('Should be considered as FD on locking amount for a fixed period', function () {
        var MyDeposit = new Deposit("FIX");
        var DepositType = MyDeposit.BankDeposit();
        expect(DepositType).toBe("FD");
        expect(DepositType).not.toBe("RD");
        expect(DepositType).not.toBe("Any value Other than 'FD' ");
    });
    it('Should be considered as RD on depositing amount on regular frequency', function () {
        var MyDeposit = new Deposit("RECURRING");
        var DepositType = MyDeposit.BankDeposit();
        expect(DepositType).toBe("RD");
        expect(DepositType).not.toBe("FD");
        expect(DepositType).not.toBe("Any value Other than 'RD' ");
    });
});