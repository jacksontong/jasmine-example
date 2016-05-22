describe('Jasmine Specs for Asynchronous Operations: ', function () {
    describe('With Done() function: ', function () {
        var myCallback, showErrorMessage;
        beforeEach(function (done) {
            myCallback = jasmine.createSpy();
            $.ajax({
                url: 'base/spec/fixtures/myJSONData.json',
                dataType: 'json',
                success: function (responseResult) {
                    myCallback(responseResult);
                    done();
                },
                error: showErrorMessage,
                timeout: 5000
            })
        });
        it('should support Javascript asynchronous operations', function () {
            expect(myCallback).toHaveBeenCalled();
        });
    }); 
});