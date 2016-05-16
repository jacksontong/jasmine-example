describe("Employees of <XYZ> Company:", function () {
    describe('Tax deducted for Indian Employees, ', function () {
        beforeEach(function () {
            this.myTaxableIncome = new TaxIndiaEmp();
        });
        afterEach(function () {
            this.myTaxableIncome = undefined;
        });
        it('Currency should be used INR', function () {
            var myCurrency = new Currency('INDIA');
            expect(myCurrency.currency).toBe('INR');
        });
        it('Should be duducted 10% if Gross Income is between RS 250,000/- AND RS 500,000/-', function () {
            //Let's assume the taxable income is RS 300,000/-
            this.myTaxableIncome.setIncome(300000);
            expect(this.myTaxableIncome.calculateTDS()).toEqual(5000);
        });
        it('Should be deducted 20% if Gross Income is between RS 500,000/- and RS 1,000,000/-', function () {
            //Let's assume the taxable income is RS 700,000/-
            this.myTaxableIncome.setIncome(700000);
            expect(this.myTaxableIncome.calculateTDS()).toEqual(40000);
        });
        it('Should be deducted 30% if Gross Income is >RS 10,000,00/-', function () {
            this.myTaxableIncome.setIncome(1300000);
            expect(this.myTaxableIncome.calculateTDS()).toEqual(90000);
        });
    });
    describe('Tax deducted for United Kingdom Employees', function () {
        it('Currency should be used GBP (Pound, UK£)', function () {
            var myCurrency = new Currency('UK');
            expect(myCurrency.currency).toBe('UK£');
        });
    });
    describe('Tax deducted for United States Employees', function () {
        it('Currency should be used USD (US$)', function () {
            var myCurrency = new Currency('US');
            expect(myCurrency.currency).toBe('US$');
        });
    });
});