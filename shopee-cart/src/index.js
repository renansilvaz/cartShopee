import createItem from "./services/item.js"
import * as cartService from "./services/cart.js"

const myCart = [];

const item1 = await createItem("Hot Wheels", 20.99, 10)
const item2 = await createItem("Barbie", 27.29, 3)


await cartService.addItem(myCart, item2)
await cartService.addItem(myCart, item1)
await cartService.cartDisplay(myCart);


cartService.calculateTotal(myCart);