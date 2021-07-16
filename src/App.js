import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";
import TopMenu from "./components/TopMenu";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Album1999 from "./pages/albums/Album1999"
import AlbumBad from "./pages/albums/AlbumBad"
import AlbumDangerous from "./pages/albums/AlbumDangerous"
import AlbumMusicology from "./pages/albums/AlbumMusicology"
import AlbumPurpleRain from "./pages/albums/AlbumPurpleRain"
import AlbumThriller from "./pages/albums/AlbumThriller"
import ArtistBowie from "./pages/artists/ArtistBowie";
import ArtistElvis from "./pages/artists/ArtistElvis";
import ArtistJackson from "./pages/artists/ArtistJackson";
import ArtistPrince from "./pages/artists/ArtistPrince";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import Signup from "./pages/Signup";
import TrackGiveInToMe from "./pages/tracks/TrackGiveInToMe";
import TrackSmoothCriminal from "./pages/tracks/TrackSmoothCriminal";
import './App.css';

function PrivateRoute({children, isAuth, ...rest}) {

    return (
        <Route {...rest}>
            {isAuth ? children : <Redirect to="/profile"/>}
        </Route>
    )
}

export default function App() {
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    })

    return (
        <div>
            <Router>
                <TopMenu isAuth={authState} toggleAuth={setAuthState}/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Login toggleAuth={setAuthState}/>
                    </Route>
                    <Route path="/signup">
                        <Signup/>
                    </Route>
                    <PrivateRoute path="/search" isAuth={authState}>
                        <Search/>
                    </PrivateRoute>
                    <Route path="/album1999">
                        <Album1999/>
                    </Route>
                    <Route path="/albumBad">
                        <AlbumBad/>
                    </Route>
                    <Route path="/albumDangerous">
                        <AlbumDangerous/>
                    </Route>
                    <Route path="/albumMusicology">
                        <AlbumMusicology/>
                    </Route>
                    <Route path="/albumPurpleRain">
                        <AlbumPurpleRain/>
                    </Route>
                    <Route path="/albumThriller">
                        <AlbumThriller/>
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
                    <Route path="/trackGiveInToMe">
                        <TrackGiveInToMe/>
                    </Route>
                    <Route path="/trackSmoothCriminal">
                        <TrackSmoothCriminal/>
                    </Route>
                    <PrivateRoute exact path="/profile" isAuth={authState}>
                        <Profile/>
                    </PrivateRoute>
                    <PrivateRoute exact path="/searchResult" isAuth={authState}>
                        <SearchResult/>
                    </PrivateRoute>
                    <Route path="/about">
                        <About/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};