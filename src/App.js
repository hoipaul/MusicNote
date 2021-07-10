import React from "react";
import TopMenu from "./components/TopMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <TopMenu/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
                <Route path="/search">
                    <Search/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
        </Switch>
</Router>
);
}

export default App;
