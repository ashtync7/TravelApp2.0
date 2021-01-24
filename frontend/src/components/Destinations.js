import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import Home from './Home';
import CustomVacations from './CustomVacation';
import TravelResources from './TravelResources';
import ContactUs from './About';
import '../Destinations.css';


function Destinations(props) {


    return (
        <div className="destiDiv">
            {/* <nav className="navBar">
        <ul>
          <Link to='/'><img id="logo" src="images/WTAlogoVan1.png"></img></Link>
          <Link to='/'><li>Home</li></Link>
          <Link to={`/Destinations`}><li>Destinations</li></Link>
          <Link to={`/CustomVacations`}><li>Custom Vacations</li></Link>
          <Link to={`/TravelResources`}><li>Travel Resources</li></Link>
          <Link to={`/ContactUs`}><li>Contact Us</li></Link>
        </ul>
      </nav>

      <Link to={`/`}><img src="images/WTAlogoVan1.png" alt="Our Van Logo" id="middleLogo" /></Link>

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
                <Link to={`/ContactUs`} id="menu2li"><li>Contact Us</li></Link>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/Destinations' render={() => <Destinations />} />
        <Route exact path='/CustomVacations' render={() => <CustomVacations />} />
        <Route exact path='/TravelResources' render={() => <TravelResources />} />
        <Route exact path='/ContactUs' render={() => <ContactUs />} />
      </Switch> */}

            <div class="content">
                <h1 class="section-header">Visit a major U.S. City</h1>
                <div class="section-header-underline"></div>
                <div class="video-gallery">
                    <div class="gallery-item">
                        <img src="https://www.infocusclinical.com/wp-content/uploads/2019/12/MG_1_1_New_York_City-1.jpg" alt="NYC" />
                        <div class="gallery-item-caption">
                            <div>
                                <h2>New York, New York</h2>
                                <p>blah blah city that never sleeps</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item ">
                        <img src="https://media.timeout.com/images/105718842/image.jpg" alt="Mt. Rainier" />
                        <div class="gallery-item-caption">
                            <div>
                                <h2>Los Angeles, California</h2>
                                <p>Hit me up if you see Harry Styles</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item">
                        <img src="https://www.fortunebuilders.com/wp-content/uploads/2014/12/miami-real-estate-investing.jpg" alt="Olympic National Park" />
                        <div class="gallery-item-caption">
                            <div>
                                <h2>Miami, Florida</h2>
                                <p>I know literally nothing about Miami</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item">
                        <img src="https://drivito2.imgix.drizly.com/5f93122b7685d985/86050bb2137e/wa-seattle.jpg?auto=format%2Ccompress&fm=jpeg&q=40&w=1800" alt="Mount St. Helens" />
                        <div class="gallery-item-caption">
                            <div>
                                <h2>Seattle, Washington</h2>
                                <p>Visit the Pacific Northwest</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item ">
                        <img src="https://republicanatheists.com/wp-content/uploads/2018/02/Chicago_illinois.jpg" alt="Mt. Rainier" />
                        <div class="gallery-item-caption">
                            <div>
                                <h2>Chicago, Illinois</h2>
                                <p>Explore America's windy city</p>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-item ">
                        <img src="https://a.netzero-usa.com/site/media/Honolulu-Hawaii.png" alt="Mt. Rainier" />
                        <div class="gallery-item-caption">
                            <div>
                                <h2>Honolulu, Hawaii</h2>
                                <p>Please take me with you</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
}

export default Destinations;