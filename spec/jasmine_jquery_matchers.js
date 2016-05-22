describe("HTML Fixture", function () {
    beforeEach(function () {
        jasmine.getFixtures().fixturesPath = 'base/spec/fixtures';
        loadFixtures('myHTMLfixture.html', 'myHTML_Form_fixture.html');
    });
    //Scenario -1
    describe("toContainText Matcher: ", function () {
        it("should be applied successfully for finding any text (or text pattern) in element", function () {
            expect($('h1')).toContainText('Welcome');
            expect($('#my-Address')).toContainText(/Delhi/);
        });
    });
    //Scenario -2
    describe("toHaveText Matcher:", function () {
        it("should be applied successfully for finding any text (or text pattern) in element", function () {
            expect($('#my-Address')).toHaveText('I live in New Delhi');
            expect($('#my-Address')).toHaveText(/Delhi/);
        });
    });
    //Scenario -3
    describe('toHaveClass Matcher: ', function () {
        it('should be applied successfully to detect class of an element', function () {
            expect($('#my-fixture')).toHaveClass('intro');
        });
    });
    //Scenario -4
    describe('toContainHtml Matcher: ', function () {
        it('should be applied successfully for finding html element', function () {
            expect($('#myFixtureOuter')).toContainHtml('<ul id="Listfriends"></ul>')
        });
    });
    //Scenario -5
    describe('toHaveCss Matcher: ', function () {
        it('should be applied successfully to find out CSS properties', function () {
            expect($('#myStyleID').html()).toHaveCss({display: 'none', margin: '10px'});
        });
    });
    //Scenario -6
    describe('toHaveId Matcher:', function () {
        it('should be applied successfully for detecting value of Id in element', function () {
            expect($('.intro')).toHaveId('my-fixture');
        });
    });
    //Scenario -7
    describe('toHaveLength Matcher: ', function () {
        it('should be applied successfully for finding length of ordered/unordered HTML list', function () {
            expect($('ul.myClass > li')).toHaveLength(4);
        });
    });
    //Scenario -8
    describe("toBeMatchedBy Matcher: ", function(){
        it('should be applied successfully to match elements for the given selector', function () {
            expect($('#my-fixture')).toBeMatchedBy('.intro');
        });
    });
    //Scenario -9
    describe('toBeChecked Matcher: ', function () {
        it('should be applied successfully for checking the state of check box', function () {
            expect($('#myCheckBox')).toBeChecked();
        });
    });
    //Scenario -10
    describe('toBeFocused Matcher: ', function () {
        it('should be applied successfully to detect whether element is disabled or not', function () {
            expect($('#myFirstName').focus()).toBeFocused();
            expect($('input.myName').focus()).toBeFocused();
        });
    });
    //Scenario -11
    describe('toBeDisabled Matcher: ', function () {
        it('should be applied successfully to detect whether element is disabled or not', function () {
            expect($('#mySubmit')).toBeDisabled();
        });
    });
});