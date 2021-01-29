import React, { useState } from 'react';
import customs from '../customs.json';

function CustomVacation(props) {

    const [city, setCity] = useState()
    const [copy, setCopy] = useState()
    const [cart, setCart] = useState([])

    const addCity = (eachcustom) => {
        setCity(eachcustom)

        // console.log(copyCity)

        // setCopy(copyCity)
        console.log(city)
        let copyCity = { ...city }
        cart.push(copyCity)
        // console.log(cart)

    }

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
            {showCart()}
            {customList()}
        </div>

    );
}


export default CustomVacation;