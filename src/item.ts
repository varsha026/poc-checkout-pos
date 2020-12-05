export class Item {
    private quantity = 0;
    private category = '';

    constructor(quantity: number, category: string) {
        this.quantity = quantity;
        this.category = category;
    }
    
    getQuantity() {
        return this.quantity;
    }
    setQuantity(quantity: number) {
        this.quantity = quantity;
    }

    getCategory() {
        return this.category;
    }
    setCategory(category: string) {
        this.category = category;
    }
}