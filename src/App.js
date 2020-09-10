import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from './Components/REQs/StateProvider'
import { auth } from "./Components/REQs/Firebase"; 
import "./App.css";
import Header from "./Components/JS/Header";
import Home from "./Components/JS/Home";
import Footer from "./Components/JS/Footer";
import Checkout from "./Components/JS/Checkout"
import Login from "./Components/JS/Login"
import Register from "./Components/JS/Register"


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    // eslint-disable-next-line
  }, [user]);

  return (
    <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
