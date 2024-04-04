import { v4 as uuidv4 } from 'uuid';

export class SalesOrderItem {
    constructor(orderId, productId, quantity, unitPrice) {
        this._orderId = orderId;
        this._productId = productId;
        this._quantity = quantity;
        this._unitPrice = unitPrice;
        this._itemId = uuidv4();
    }

    calculateItemPrice() {
        return this._unitPrice * this._quantity;
    }

}