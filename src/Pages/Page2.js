import '../App.css';
import NavbarCard from "../componenets2/NavbarCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "../componenets2/SideBar";
import React from 'react';
import Messages from '../ComponenetsMessages/Messages';
import MessagesDetails from '../ComponenetsMessages/MessagesDetails';

function Page2() {
    return(
        <div className=" App" >
        <header className="App-header">
            <NavbarCard/>
        </header>

        <div className="d-flex">
            <SideBar className="Sidebare" />
            <div className="w-100">
                <Messages/>
                </div>
            </div>
        </div>
    
            
            );
    
}

export default Page2;
