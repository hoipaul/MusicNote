import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import {useHistory} from 'react-router-dom';

export const AuthContext = createContext({});

export default function AuthContextProvider({children}) {
    const [authState, setAuthState] = useState({
        user: null,
        status: 'pending',
    })

    const history = useHistory();

    function isTokenValid(jwtToken) {
        const decodedToken = jwt_decode(jwtToken);
        const expirationUnix = decodedToken.exp;
        const now = new Date().getTime();
        const currentUnix = Math.round(now / 1000);
        const isTokenStillValid = expirationUnix - currentUnix > 0;

        return isTokenStillValid;
    }

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (!authState.user && token && isTokenValid(token)) {
            const decodedToken = jwt_decode(token);

            fetchUserData(token, decodedToken.sub);
        } else {
            setAuthState({
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(jwtToken) {
        console.log(jwtToken)
        localStorage.setItem('token', jwtToken);
        const decodedToken = jwt_decode(jwtToken);
        console.log(decodedToken);
        const userId = decodedToken.sub;

        fetchUserData(jwtToken, userId);
    }

    async function fetchUserData(token) {
        try {
            const result = await axios.get(`https://polar-lake-14365.herokuapp.com/api/test/admin/`
                , {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    }
                });
            console.log(result);

            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                    password: result.data.password,
                    role: ["user", "admin"]
                },
                status: 'done',
            });

            history.push('/profile');
        } catch (e) {
            console.error(e);
        }
    }

    function logout() {
        console.log('logout!');
    }

    const data = {
        ...authState,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'pending'
                ? children
                : children
            }
        </AuthContext.Provider>
    );
};

// eerste children vervangen in <p>Loading...</p>
