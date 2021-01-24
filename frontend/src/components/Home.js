import React from 'react';

function Home(props) {

    return (
        <div className="homeTotal">

            <div className="homeHeader">
                <h2>WANDERLUST TRAVEL AGENCY</h2>
                <img id="glowSlogan" src="images/glowSlogan3.png" alt="Not All Who Wander Are Lost" />

                <h4 id="homeSummary">Travel - the only thing you buy that makes you richer.</h4>

            </div>
            <div id="formStuff">
                {/* <div><p id="formIntro">Let's start planning your trip! Tell us about what kind of vacation you want to take!</p></div> */}
                <div>
                    <form enctype="text/plain" action="mailto:jadawoody@gmail.com" method="POST" id="chickenwings">
                        <div className="formDiv1">
                            <input type="text" id="cheeseburgers" className="input1" placeholder="First & Last Name" name="Name"></input></div>
                        <div className="formDiv2">
                            <input type="text" id="cheeseburgers" className="input2" placeholder="E-mail Address" name="Email Address"></input></div>
                        <div className="messageLabel">
                            <input type="text" id="formMessage" rows="3" placeholder="Where do you want to go?" name="Message"></input></div>
                        <input type="submit" value="Send" class="sendButton" id="formButton">
                        </input>
                    </form>
                </div>
            </div>
        </div>

    );
}

export default Home;