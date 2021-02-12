import React, { Component, Fragment, useState, useEffect } from "react";
import { Switch, Route, NavLink, useHistory, Link } from "react-router-dom";
import TheContext from './TheContext';
import Home from './components/Home';
import Destinations from './components/Destinations';
import CustomVacations from './components/CustomVacation';
import TravelResources from './components/TravelResources';
import AboutUs from './components/About';
import Cart from './components/Cart';
import Customs from './customs.json';
import NotFound from "./components/404/NotFound.js";
import actions from "./api/index";
import { NotificationContainer, NotificationManager } from 'react-notifications';

const PAGE_PRODUCTS = 'customs';
const PAGE_CART = 'cart';

const App = () => {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity, 0
    );
  };

  return (
    <div>
      <nav className="navBar">
        <ul>
          <Link to='/'><img id="logo" src="./WTAlogoVan1.png"></img></Link>
          <Link to='/'><li>Home</li></Link>
          <Link to={`/Destinations`}><li>Destinations</li></Link>
          <Link to={`/CustomVacations`}><li>Custom Vacations</li></Link>
          <Link to={`/TravelResources`}><li>Travel Resources</li></Link>
          <Link to={`/AboutUs`}><li>About Us</li></Link>
        </ul>
      </nav>
      <div id="midVanDiv">
        {/* <Link to={`/`}> */}
        <img src="./WTAlogoVan1.png" alt="Our Van Logo" id="middleLogo" />
        {/* </Link> */}
      </div>
      <nav className="menu-wrap">
        <input type="checkbox" class="toggler" />
        <div class="hamburger">
          <div></div>
        </div>
        <div class="menu">
          <div>
            <div>
              <ul>
                <Link to={`/`} id="menu2li"><li>Home</li></Link>
                <Link to={`/Destinations`} id="menu2li"><li>Destinations</li></Link>
                <Link to={`/CustomVacations`} id="menu2li"><li>Custom Vacations</li></Link>
                <Link to={`/TravelResources`} id="menu2li"><li>Travel Resources</li></Link>
                <Link to={`/AboutUs`} id="menu2li" ><li>About Us</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>


      {/* <div>
        <ul>
          <li><a href="#" title="home">home</a></li>
          <li><a href="#" title="destinations">Destinations</a></li>
          <li><a href="#" title="link1">Custom Vacations</a></li>
          <li><a href="#" title="link1">Travel Resources</a></li>
          <li><a href="#" title=/About Us"/About Us</a></li>
        </ul>
      </div> */}

      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/Destinations' render={() => <Destinations />} />
        <Route exact path='/CustomVacations' render={() => <CustomVacations />} />
        <Route exact path='/TravelResources' render={() => <TravelResources />} />
        <Route exact path='/AboutUs' render={() => <AboutUs />} />
      </Switch>


      {/* <footer>
      <h1>© 2020 Wanderlust Travel Agency | Designed by Jada Woody and Ashtyn Czapansky</h1>
      <h2>123 Fake Address Rd. | Some Small Town, State51 11111 USA | <a href="tel:+0000000000" id="phoneCall">(000)000-0000</a></h2>
    </footer> */}

      <button onClick={() => navigateTo(PAGE_CART)}>
        Go to Cart ({getCartTotal()})
</button>

    </div>
  )

}
export default App;
