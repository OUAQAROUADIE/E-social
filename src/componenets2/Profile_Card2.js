import React from 'react';

import back from "../images/PR1497_FamilyRoadTrip_Banner.jpg"
import profile from "../images/Jim_Spiegel.jpg"
import './Profile_Card2.css'

function Profile_Card2() {
    return (
        <div className="first_card ">
            <div className="profile_back">
                <img src={back}  alt="background profile"/>
            </div>
            <div className="profile_down">
                    <img src={profile}   alt="profile"/>
                <div className=" d-flex  justify-content-between Titles">
                    <h6><a href="#" >About</a></h6>
                    <h6><a href="#">Friends</a></h6>
                    <div className="Name">
                    <h6>OUAQAR OUADIE</h6>
                    <span>Rabat,Morocco</span>
                    </div>
                    <div className=" btns d-flex justify-content-center">
                         <button className="btn">S'abonner</button>
                         <button className="btn">Message</button>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Profile_Card2;
