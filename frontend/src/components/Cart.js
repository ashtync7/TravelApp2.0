import React, { useState } from 'react';
import customs from '../customs.json';
import ReactDOM from 'react-dom';

function Cart(props) {

    const [cart, setCart] = useState([])

    const showCart = () => {
        // let html = [];



        return (
            <h1>Cart</h1>
        )

    }

    const setQuantity = (product, amount) => {
        const newCart = [...cart];
        newCart.find(
            (item) => item.name === product.name
        ).quantity = amount;
        setCart(newCart);
    };


    return (
        <div>
            <h1>this is the cart</h1>
            {showCart()}
            <div className="products">
                {cart.map((product, idx) => (
                    <div className="product" key={idx}>
                        <h3>{product.name}</h3>
                        <h4>${product.cost}</h4>
                        <input
                            value={product.quantity}
                            onChange={(e) =>
                                setQuantity(
                                    product,
                                    parseInt(e.target.value)
                                )
                            }
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Cart;