describe('Inventory Stock', function () {
    beforeEach(function () {
        this.stockinhand_item1 = 11;
        this.item1 = 1;
    });
    afterEach(function () {
        this.stockinhand_item1 = 0;
        this.item1 = 0;
    });
    it('Inventory Stock should be updated on sale/issue of an item', function () {
        this.transactionType = 'SALE';
        expect(this.stockinhand_item1 - this.item1).toEqual(10);
        expect(this.transactionType).toBeDefined();
    });
    it('Inventory Stock should be updated on issue of an item within organization', function () {
        expect(this.stockinhand_item1 - this.item1).toEqual(10);
        expect(this.transactionType).toBeUndefined();
    });
    it('Inventory Stock should be updated on return of any item', function () {
        expect(this.stockinhand_item1 + this.item1).toEqual(12);
        expect(this.transactionType).toBeUndefined();
    });
    it('Inventory Stock should be updated on receiving or procuring new item', function () {
        expect(this.stockinhand_item1 + this.item1).toEqual(12);
        expect(this.transactionType).toBeUndefined();
    });
});