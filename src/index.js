import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App'
import Page1 from './Pages/Page1'
import  Page2 from './Pages/Page2'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/profile" element={<App />} />
            <Route path="/users" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
