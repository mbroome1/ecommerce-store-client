import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function CartCounter() {
    const count = useSelector(state => {
        let sum = 0;
        state.cart.cartList.map((item) => sum = Number.parseFloat(sum) + Number.parseFloat(item.cartItem.quantity));
        return sum;
    });

    return (
        <>
            {count}
        </>
    )
}

export default CartCounter;