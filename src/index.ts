import { Checkout } from "./checkout";
import { Item } from "./item";

    case1();
    case2();
    case3();

    function case1() {
        const checkout = new Checkout();
        checkout.add(new Item(1, 'I1'));
        checkout.add(new Item(1, 'I2'));
        checkout.add(new Item(1, "I3"));
        const totalAmount = checkout.total('');
        console.log("Total checkout amount case 1:", totalAmount);
    }

    function case2() {
        const checkout = new Checkout();
        checkout.add(new Item(3, 'I1'));
        checkout.add(new Item(1, 'I3'));
        const totalAmount = checkout.total('C1');
        console.log("Total checkout amount case 2:", totalAmount);
    }

    function case3() {
        const checkout = new Checkout();
        checkout.add(new Item(3, 'I2'));
        checkout.add(new Item(1, 'I3'));
        const totalAmount = checkout.total('C2');
        console.log("Total checkout amount case 3:", totalAmount);
    }
