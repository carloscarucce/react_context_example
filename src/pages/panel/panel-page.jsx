import React from 'react';
import {UserContext} from "../../contexts/user-context";

/**
 *
 */
class PanelPage extends React.Component {
    static contextType = UserContext;

    componentDidMount() {
        if (!this.context.username) {
            this.props.history.replace('/login');
        }
    }

    render() {
        return (
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
    }
}

export default PanelPage;