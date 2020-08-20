import React from 'react';
import {UserContext} from "../../contexts/user-context";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
const PanelPage = () => (
    <React.Fragment>
        <h1>Dashboard</h1><br/>
        <UserContext.Consumer>
            {
                ({username}) =>
                (<p>{!username ? "You have to log in first" : `Welcome back ${username}`}</p>)
            }
        </UserContext.Consumer>
    </React.Fragment>
);

export default PanelPage;