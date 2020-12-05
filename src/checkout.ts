import { Item } from "./item";
import { pricingRules } from "./mockData/pricingRules";
import { items } from "./mockData/items";

export class Checkout {
    cart:Item[] = [];

    add(item: Item) {
        this.cart.push(item);
    }

    total(customer: string) {
        // Read customer from token/login credentials
        let totalAmount = this.calculateDefaultTotal();
        const rulesApplicable = pricingRules.filter(rule => rule.customers.indexOf(customer) >= 0);
        if(rulesApplicable.length)
            totalAmount = this.calculateOfferPrice(rulesApplicable, totalAmount);
        return totalAmount;
    }

    private calculateDefaultTotal() {
        let total = 0;
        this.cart.forEach(item => {
            let currentItem = items.find(i => i.id === item.getCategory());
            if(currentItem)
                total += (currentItem.price * item.getQuantity());
        });
        return total;
    }

    private calculateOfferPrice(rulesApplicable: any[], totalAmount: number) {
        rulesApplicable.forEach(rule => {
            switch(rule.ruleCategory) {
                case 'Rule1':
                    {
                        let item:any;
                        item = this.cart.find(c => c.getCategory() === rule.c);
                        if(item.getQuantity() >= rule.n) {
                            // check if quantity is a factor eg. if we get 5 for 4.. then 10 for 8 should be applicable
                            const factor = Math.floor(item.getQuantity() / parseInt(rule.n));
                            const itemForPrice = items.find(i => i.id === item.getCategory());
                            if (itemForPrice) {
                                totalAmount -= (factor * itemForPrice.price);
                            }
                        }
                        break;
                    }
                case 'Rule2':
                    {
                        let item = this.cart.find(c => c.getCategory() === rule.c);
                        if(item)
                            totalAmount -= (item.getQuantity() * (parseFloat(rule.n) - parseFloat(rule.m)));
                        break;
                    }
            }
        });
        return totalAmount;
    }
}