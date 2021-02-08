import React, { useState } from 'react';
import customs from '../customs.json';
import Cart from '../components/Cart';
// import 'bulma/css/bulma.css';

function CustomVacation(props) {

    const [cart, setCart] = useState([])
    // const cart = []

    const addCity = (eachcustom) => {
        // setting the cart as a copy of the previous items along with the new item added
        setCart([...cart, eachcustom])
    }


    const showCart = () => {
        // Creates an empty array named HTML in which we will be able to push HTML into
        let html = [];
        // Creates a opy of the cart data
        let cartCopy = { ...cart }
        // Creates a for loop which will allow us to push data to the empty array
        for (let eachcustom in cartCopy) {
            html.push(
                <div className="cartDiv">
                    <ul className="cartItems">
                        <li>
                            {/* Pushing the name and image of each added data piece/custom */}
                            {/* Take the cartCopy, pass the prop “eachcustom” to it, which is whichever city we add-- And then return the name of the city (.name) */}
                            <h3>{cartCopy[eachcustom].name}</h3>
                        </li>
                        <li>
                            {/* same as before but we are adding the image of the "eachcustom" instead of name */}
                            <img src={cartCopy[eachcustom].image} className="cartImage"></img>
                        </li>
                    </ul>
                </div>
            );
        }
        // cart.shift()
        return (
            <div className="cartReturn">
                {/* return a div which holds our array 'HTML' in which we pushed our cart to. now HTML is the rendered version of cart */}
                <h2 className="cartTitle1" >YOUR CUSTOM VACATION</h2>
                {html}
            </div>
        )

        // console.log(cart)


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
            {/* dont need cart button because new method "showCart" auto renders upon adding the customization! */}
            {/* <button onClick={(e) => console.log({ cart })}>Cart</button> */}
            {/* <button onClick={(e) => showCart()}>Cart</button> */}
            {showCart()}
            {customList()}
            {/* <Cart cart={cart} {...props} /> */}
        </div>

    );
}


export default CustomVacation;