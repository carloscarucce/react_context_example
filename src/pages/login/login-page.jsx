import React from 'react';
import {UserContext} from "../../contexts/user-context";

/**
 *
 */
class LoginPage extends React.Component {
    submitForm = (e, setUser) => {
        e.preventDefault();

        let userdata = {
            username: e.target.querySelector("input[name='username']").value,
            token: e.target.querySelector("input[name='token']").value,
        };

        setUser(userdata.username, userdata.token);
        this.props.history.replace('/panel');
    }

    render() {
        return (
            <React.Fragment>
                <h2>Login</h2>
                <UserContext.Consumer>
                    {user => (
                        <form onSubmit={(e) => {this.submitForm(e, user.setUser)}}>

                            <label>login:</label>
                            <input type="text" name="username"/>
                            <br/>

                            <label>token:</label>
                            <input type="text" name="token"/>
                            <br/>

                            <button type="submit">OK</button>

                        </form>
                    )}
                </UserContext.Consumer>
            </React.Fragment>
        );
    }
}

export default LoginPage;