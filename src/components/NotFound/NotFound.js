import React from 'react';
import { Redirect } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <center style={{color: "red" }}>
            <h1>sorry page not found...</h1>
            <h3>404 Error!!!</h3>
            </center>
        </div>
    );
};

export default NotFound;