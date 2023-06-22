import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from "react-router-dom";

//
import Login from './pages/login';
import Home from './pages/home';


function App() {

  let component;

  switch (window.location.pathname) {
    case "/":
      component = <Login />;
      break;
    case "/home":
      component = <Home />;
      break;
    // case "/Services":
    //   component = <Services />;
    //   break;
    // case "/Products":
    //   component = <Products />;
    //   break;
    // case "/Promotions":
    //   component = <Promotions />;
    //   break;
    // case "/contact-us":
    //   component = <ContactUs />;
    //   break;
  }

  return <>{component}</>;

}

export default App
