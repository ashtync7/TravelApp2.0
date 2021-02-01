import React, { useState } from 'react';
import customs from '../customs.json';
import Cart from '../components/Cart';

function CustomVacation(props) {

    const [cart, setCart] = useState([])
    // const cart = []

    const addCity = (eachcustom) => {
        // setting the cart as a copy of the previous items along with the new item added
        setCart([...cart, eachcustom])
    }

    // 
    const showCart = (eachcustom) => {
        // cart.shift()
        console.log(cart)
        // return (
        //     <li>
        //         {eachcustom.name}
        //     </li>
        // )
        cart.map((eachcustom) => {
            return (
                <ul>
                    <li>
                        Name: <h3>{eachcustom.name}</h3>
                    </li>

                    <li>

                        <img src={eachcustom.image} />
                    </li>
                </ul>
            )
        })

    }

    // new function customList = how we list out all customs from customs.json file. 
    function customList() {
        // map through all customs
        // adding unique IDs to each element that will be mapped through
        return customs.map((eachcustom, idx) => {
            // return specific info (image, name)
            return (
                <div className="theBox" key={idx}>
                    <section>
                        <img src={eachcustom.image} className="customImage" />
                    </section>
                    <section>
                        <p>{eachcustom.name}</p>
                    </section>
                    <section>
                        {/* passing in the item info as well as the unique ID */}
                        <button onClick={(e) => addCity(eachcustom, idx)} className="customAddBtn">+</button>
                    </section>
                </div >
            )
        })
    }
    return (
        <div>
            <button onClick={(e) => console.log({ cart })}>Cart</button>
            {/* <button onClick={(e) => showCart()}>Cart</button> */}
            {showCart()}
            {customList()}
            {/* <Cart cart={cart} {...props} /> */}
        </div>

    );
}


export default CustomVacation;