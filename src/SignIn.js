import React, { Component } from 'react';
import './SignIn.css';

import {auth, githubProvider} from './base'
//Needs curly braces bc it's a named export

const SignIn = ({authHandler}) => {
    const authenticate = () => {
        auth
            .signInWithPopup(githubProvider)
            .then((data) => {
                authHandler(data.user);
            })

        //then works on the 'promise' that the first function returns
        //Alternative to callback functions
    }

    return(
        <button 
            className="SignIn"
            onClick = {authenticate}
        >
            Sign In With Github
        </button>
    )
}

export default SignIn