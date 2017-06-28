import React, { Component } from 'react';
import './SignIn.css';

const SignIn = ({authHandler}) => {
    const authenticate = () => {
        authHandler({
            uid: 'test',
        })
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