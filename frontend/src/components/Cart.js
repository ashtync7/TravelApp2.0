import React, { useState } from 'react';
import customs from '../customs.json';
import ReactDOM from 'react-dom';

function Cart(props) {

    const [cart, setCart] = useState([])

    const showCart = () => {
        let html = [];
        cart.map((city) => {
            return (
                <ul>
                    <li>
                        Name: <h3>{city.name}</h3>
                    </li>

                    <li>
                        <img src={city.image} />
                    </li>
                </ul>
            )
        })

    }




    return (
        <div>
            <h1>this is the cart</h1>
            {showCart()}
        </div>
    );
}


export default Cart;