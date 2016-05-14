describe("Jasmine Matchers", function () {
    it("'toMatch' Matcher should be applied successfully for regular expressions", function () {
        var strString1 = "Packt Cookbooks are an excellent source of learning";
        var strPhone = "001-789-56-67";
        expect(strString1).toMatch(/Cookbooks/);
        expect(strString1).toMatch(/cookbooks/i);
        expect(strString1).not.toMatch(/Java/);
        expect(strPhone).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
    });

    describe("toEqual matcher should be applied successfully", function () {
        it("if numbers are equal", function () {
            var intVar = 15;
            expect(intVar).toEqual(15);
        });
        it("if strings are equal", function () {
            var strVar = "Jasmine Cookbook";
            expect(strVar).toEqual("Jasmine Cookbook");
        });
        it("if objects are equal", function () {
            var MyObj1 = {a: 12, b: 13};
            var MyObj2 = {a: 12, b: 13};
            expect(MyObj1).toEqual(MyObj2);
            expect(MyObj1.a).toEqual(MyObj2.a);
            expect(MyObj1.a).not.toEqual(MyObj2.b);
        });
        it("if arrays are equal", function () {
            expect([8,9,10]).toEqual([8, 9, 10]);
            expect([8,9,10,11]).not.toEqual([8, 9, 10]);
        });
        it("toBe matcher should be applied successfully for literals, variables and objects", function () {
            var MyObj = {foo: "foo"};
            var MySameObj = {foo: "foo"};
            var strVar = "Jasmine Cookbook";
            var myArr = [8,9,10];
            expect(MyObj).toBe(MyObj);
            expect(MySameObj).not.toBe(MyObj);
            expect(MySameObj).toEqual(MyObj);
            expect(strVar).toBe("Jasmine Cookbook");
            expect(myArr).toEqual([8,9,10]);
            expect(myArr).not.toBe([8,9,10]);
        });
    });

    it("toBeDefined should be applied successfully to compares against defined.", function () {
        var MyObj = {
            foo: "foo"
        };
        var Myfunction = (function () {})();
        var strUndefined;
        expect('Jasmine Cookbooks').toBeDefined();
        expect(MyObj).toBeDefined();
        expect(MyObj.foo).toBeDefined();
        expect(Myfunction).not.toBeDefined();
        expect(strUndefined).not.toBeDefined();
    });

    it("toBeUndefined should be applied successfully to compares against undefined.", function () {
        var MyObj = {
            foo: "foo"
        };
        var Myfunction = (function() {}) ();
        var strUndefined;
        expect(MyObj).not.toBeUndefined();
        expect(MyObj.foo).not.toBeUndefined();
        expect(Myfunction).toBeUndefined();
        expect(strUndefined).toBeUndefined();
    });
});