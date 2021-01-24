import React from 'react';

function TravelResources(props) {
    return (
        <div>
            <div className="content">
                <h1 className="section-header">Helpful Resources for Traveling</h1>
                <div className="section-header-underline"></div>
                <div className="video-gallery">
                    <div className="gallery-item">
                        <img src="images/ta-internationalTravel.jpg" alt="IT" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href=" https://travel.state.gov/content/travel/en/international-travel.html" target="_blank">
                                    <h2>International Travel</h2>
                                </a>
                                <p>Know the guidelines for travel to your destination, before you go!</p>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-item ">
                        <img src="images/ta-gear.jpg" alt="Rei" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://www.rei.com/" target="_blank">
                                    <h2>REI Co-Op</h2>
                                </a>
                                <p>Get all the gear you'll need!</p>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <img src="images/ta-budget.jpg" alt="travelBudget" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href=" https://expertvagabond.com/travel/" target="_blank">
                                    <h2>Budget Travel Resources Guide</h2>
                                </a>
                                <p> Get travel gear & packing tips to stay on budget!</p>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-item">
                        <img src="images/ta-food.jpg" alt="foodSafety" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://www.eatright.org/health/lifestyle/travel/8-food-safety-tips-when-traveling-abroad" target="_blank">
                                    <h2>Food Safety While Traveling</h2>
                                </a>
                                <p> 8 Food Safety Tips When Traveling Abroad</p>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-item ">
                        <img src="images/ta-safeTravel.jpg" alt="safeTravel" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://www.back-packer.org/30-tips-and-ways-to-stay-safe-while-traveling-the-world-and-south-america/" target="_blank">
                                    <h2>Travel Safety</h2>
                                </a>
                                <p>30 tips to staying safe while you travel!</p>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-item ">
                        <img src="images/ta-enjoyTravel.jpg" alt="enjoyTravel" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://glassofbubbly.com/5-great-ways-to-enjoy-your-travel/" target="_blank">
                                    <h2>Enjoy Your Travels</h2>
                                </a>
                                <p>Tips to help you have the best trip ever!</p>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-item ">
                        <img src="images/ta-camera.jpg" alt="cameras" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://expertvagabond.com/best-travel-camera/" target="_blank">
                                    <h2>Best Cameras for Travel</h2>
                                </a>
                                <p> Find the best travel camera for you!</p>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-item ">
                        <img src="images/ta-bucketList.jpg" alt="bucketList" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://all.accor.com/gb/middle-east/magazine/one-hour-one-day-one-week/20-ultimate-travel-bucket-list-ideas-to-do-before-40-17ae1.shtml" target="_blank">
                                    <h2>For Your Inspiration</h2>
                                </a>
                                <p>Read these 20 ultimate travel bucket list items and get inspired for your trip!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default TravelResources;