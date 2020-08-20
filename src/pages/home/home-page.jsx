import React from 'react';
import {UserContext} from "../../contexts/user-context";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const HomePage = () => (
    <React.Fragment>
        <h2>Home</h2>
        <UserContext.Consumer>
            {user => (
                <p>user: {user.username} <br/>token: {user.token}</p>
            )}
        </UserContext.Consumer>
    </React.Fragment>
);

export default HomePage;