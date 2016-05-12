describe("Factorial", function () {
    it("should get factorial of given number", function () {
        expect(factorial(3)).toEqual(6);
    });
    it("Should return null value for passing negative number of less/more than one argument", function () {
        expect(factorial(-3)).toEqual(null);
    });
});