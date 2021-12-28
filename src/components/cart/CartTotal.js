import React from 'react'
import { useSelector } from 'react-redux';

function CartTotal() {
    const total = useSelector(state => {
        let sum = 0;
        state.cart.cartList.map((item) => sum = Number.parseFloat(sum) + (Number.parseFloat(item.cartItem.quantity)*Number.parseFloat(item.price)));
        return sum;
    });

    return (
        <>
            {total.toFixed(2)}
        </>
    )
}

export default CartTotal
