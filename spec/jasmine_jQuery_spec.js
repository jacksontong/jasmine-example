describe("jQuery", function () {
    describe("Ajax Calls:", function () {
        describe("with $.ajax", function () {
            var configurationData = {
                url: "myData.json",
                remainingTime: 5000
            };
            //Scenario 1
            it("Correct URL should be passed to $.ajax object", function () {
                spyOn($, 'ajax');
                sendRequestWithJQuery(undefined, undefined, configurationData);
                expect($.ajax).toHaveBeenCalledWith(jasmine.objectContaining({url: configurationData.url}));
            });
            //Scenario 2
            it("Method 'myCallback' should be called on successful response", function () {
                spyOn($, 'ajax').and.callFake(function (e) {
                    e.success({});
                });
                var myCallback = jasmine.createSpy();
                var showErrorMessage = jasmine.createSpy();
                sendRequestWithJQuery(myCallback, showErrorMessage, configurationData);
                expect(myCallback).toHaveBeenCalled();
                expect(showErrorMessage).not.toHaveBeenCalled();
            });
            //Scenario 3
            it("Error method showErrorMessage should be called for any malfunctioning", function () {
                spyOn($, 'ajax').and.callFake(function (e) {
                    e.error({});
                });
                var showErrorMessage = jasmine.createSpy();
                sendRequestWithJQuery(myCallback, showErrorMessage, configurationData);
                expect(showErrorMessage).toHaveBeenCalled();
            });
            //Scenario 4
            describe("DOM Manipulation", function () {
                it("Test HTML fixture", function () {
                    jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
                    loadFixtures('myfixture.html');
                    jasmine.getJSONFixtures().fixturesPath = 'base/spec/fixtures';
                    var FixtureUrl = 'myJSONData.json';
                    var fixtures = loadJSONFixtures(FixtureUrl);
                    var myResult = fixtures[FixtureUrl];
                    spyOn($, 'ajax').and.callFake(function (e) {
                        e.success(myResult);
                    });
                    var showErrorMessage = jasmine.createSpy();
                    sendRequestWithJQuery(myCallback2,showErrorMessage, configurationData);
                    expect(showErrorMessage).not.toHaveBeenCalled();
                    expect($('#my-fixture')).toContainText(/Jasmine Cookbook Munish Sethi/i);
                });
            });
        });
    });
});