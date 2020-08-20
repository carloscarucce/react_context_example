import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch,} from "react-router-dom";
import HomePage from "./pages/home/home-page";
import LoginPage from "./pages/login/login-page";
import PanelPage from "./pages/panel/panel-page";
import {UserContext, UserContextDefaults} from "./contexts/user-context";

function App() {
    return (
        <Router>
            <UserContext.Provider value={UserContextDefaults}>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/panel">Panel</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/panel" component={PanelPage}/>
                        <Route path="*">
                            Page not found
                        </Route>
                    </Switch>
                </div>
            </UserContext.Provider>
        </Router>
    );
}

export default App;
