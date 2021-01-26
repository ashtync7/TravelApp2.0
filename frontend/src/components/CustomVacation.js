import React from 'react';
import customs from '../customs.json';

function CustomVacation(props) {

    const addToCart = (customs) => {
        let cart = { ...customs }
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
                        <button onClick={(e) => props.addToCart()} className="customAddBtn">+</button>
                    </section>
                </div>
            )
        })
    }
    return (
        <div>
            {customList()}
        </div>

    );
}

export default CustomVacation;