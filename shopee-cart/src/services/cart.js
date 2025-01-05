import { use } from "bcrypt/promises";

// add item no carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// deletar um produto do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name)

    if (index !== -1){
        userCart.splice(index, 1)
    }
}

// diminuir 1 item do carrinho
async function removeItem(userCart, name){
    const deleteIndex = index - 1

    if(index >= 0 && index < userCart.length){
        userCart.splice(deleteIndex, 1);
    }
}

async function decreaseItem(userCart, item){
    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1)
        return;
    }else if(userCart[indexFound].quantity > 1){
        userCart[indexFound].quantity--
        return;
    }
}

// calcular o total do carrinho
async function calculateTotal(userCart){
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0)
    console.log(`\nO total do seu carrinho é: ${result}`)
}

async function cartDisplay(userCart){
    console.log("Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$${item.price} | Quantidade: ${item.quantity} | Subtotal: ${item.subtotal()}`)
    })
}

export {
    calculateTotal,
    removeItem,
    deleteItem,
    addItem,
    cartDisplay,
    decreaseItem
}