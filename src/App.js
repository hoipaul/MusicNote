import React from "react";
import TopMenu from "./components/TopMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import ArtistBowie from "./pages/ArtistBowie";
import ArtistElvis from "./pages/ArtistElvis";
import ArtistJackson from "./pages/ArtistJackson";
import ArtistPrince from "./pages/ArtistPrince";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import Signup from "./pages/Signup";
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function App() {
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
                <Route path="/prince">
                    <ArtistPrince/>
                </Route>
                <Route path="/elvis">
                    <ArtistElvis/>
                </Route>
                <Route path="/bowie">
                    <ArtistBowie/>
                </Route>
                <Route path="/jackson">
                    <ArtistJackson/>
                </Route>
                <Route path="/profile">
                    <Profile/>
                </Route>
                <Route path="/searchResult">
                    <SearchResult/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </Router>
    );
};