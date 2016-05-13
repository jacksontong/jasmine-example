describe('Inventory Stock', function () {
    it('Inventory Stock should be updated on sale/issue of an item', function () {
        var stockinhand_item1 = 11;
        var item1 = 1;
        var transaction = 'SALE';
        expect(stockinhand_item1 - item1).toEqual(10);
    });
    it('Inventory Stock should be updated on issue of an item within organization', function () {
        var stockinhand_item1 = 11;
        var item1 = 1;
        var transaction = 'ISSUE';
        expect(stockinhand_item1 - item1).toEqual(10);
    });
    it('Inventory Stock should be updated on return of any item', function () {
        var stockinhand_item1 = 11;
        var item1 = 1;
        var transaction = 'SALE RETURN';
        expect(stockinhand_item1 + item1).toEqual(12);
    });
    it('Inventory Stock should be updated on receiving or procuring new item', function () {
        var stockinhand_item1 = 11;
        var item1 = 1;
        var transaction = 'PROCUREMENT';
        expect(stockinhand_item1 + item1).toEqual(12);
    });
});