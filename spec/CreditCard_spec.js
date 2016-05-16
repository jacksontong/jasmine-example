describe('Credit Card Division of a Bank: ', function () {
    it('Should be equal to 16 digits', function () {
        expect(validateCreditCardnumber("9999-9999-9999-9999")).toBeTruthy();
    });
});