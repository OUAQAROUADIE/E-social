import './App.css';
import NavbarCard from "./componenets/NavbarCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from "./componenets/SideBar";
import Main from "./componenets/Main";
import React from 'react';



function App() {
    const [darkMode, setDarkMode] = React.useState(true)

    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
  return (
    <div className="App" >
      <header className="App-header">
        <NavbarCard darkMode={!darkMode}/>
      </header>
        <div className="d-flex">
        </div>
    </div>

  );
}

export default App;
