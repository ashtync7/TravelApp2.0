import React, { useState } from 'react';
import customs from '../customs.json';
import Cart from '../components/Cart';

function CustomVacation(props) {

    const [city, setCity] = useState()
    const [copy, setCopy] = useState()
    // const [cart, setCart] = useState([])
    let cart = []
    // const cart = []

    const addCity = (eachcustom) => {
        setCity(eachcustom)

        // console.log(copyCity)

        // setCopy(copyCity)
        console.log(city)
        let copyCity = { ...city }

        // setCart(copyCity)

        // console.log(cart)

    }

    // 
    const showCart = () => {
        cart.push({ ...city })
        // cart.shift()
        console.log(cart)
        //  cart.map((place) => {
        //     return (
        //         <ul>
        //             <li>
        //                 Name: <h3>{place.name}</h3>
        //             </li>

        //             <li>

        //                 <img src={place.image} />
        //             </li>
        //         </ul>
        //     )
        // })

    }

    // new function customList = how we list out all customs from customs.json file. 
    function customList() {
        // map through all customs
        return customs.map((eachcustom) => {
            // return specific info (image, name)
            return (
                <div className="theBox">
                    <section>
                        <img src={eachcustom.image} className="customImage" />
                    </section>
                    <section>
                        <p>{eachcustom.name}</p>
                    </section>
                    <section>
                        <button onClick={(e) => addCity(eachcustom)} className="customAddBtn">+</button>
                    </section>
                </div >
            )
        })
    }
    return (
        <div>
            <button onClick={(e) => console.log({ cart })}>Cart</button>
            {/* <button onClick={(e) => showCart()}>Cart</button> */}
            {/* {showCart()} */}
            {customList()}
            {/* <Cart cart={cart} {...props} /> */}
        </div>

    );
}


export default CustomVacation;