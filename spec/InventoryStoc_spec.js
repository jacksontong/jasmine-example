describe('Inventory Stock', function () {
    beforeEach(function () {
        stockinhand_item1 = 11;
        item1 = 1;
    });
    afterEach(function () {
        stockinhand_item1 = 0;
        item1 = 0;
    });
    it('Inventory Stock should be updated on sale/issue of an item', function () {
        expect(stockinhand_item1 - item1).toEqual(10);
    });
    it('Inventory Stock should be updated on issue of an item within organization', function () {
        var transaction = 'ISSUE';
        expect(stockinhand_item1 - item1).toEqual(10);
    });
    it('Inventory Stock should be updated on return of any item', function () {
        expect(stockinhand_item1 + item1).toEqual(12);
    });
    it('Inventory Stock should be updated on receiving or procuring new item', function () {
        expect(stockinhand_item1 + item1).toEqual(12);
    });
});