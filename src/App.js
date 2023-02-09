import React, { useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Header from "./components/Header";
import Home from './components/Home'
import About from "./components/About";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import StudyMaterial from "./components/StudyMaterial";
import Login from "./components/Login";
import Payment from "./components/Payment";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import Checkout from "./components/Checkout";


function App () {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
 
  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Switch>
        {/* <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route> */}
        <Route path="/payment">
            <Header />
            <Payment />
            <Footer />
          </Route>
        <Route path="/login">
            {/* <Header /> */}
            <Login />
            {/* <Footer /> */}
          </Route>
        <Route path="/reviews">
            <Header />
            <Reviews />
            <Footer />
          </Route>
          <Route path="/gallery">
            <Header />
            <Gallery />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/studymaterial">
            <Header/>
            <StudyMaterial />
            <Footer />
          </Route>
          <Route path="/">
            <Header route="main_header"/>
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
