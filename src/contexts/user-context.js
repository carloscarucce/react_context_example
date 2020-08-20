import React from 'react';

let UserContextDefaults = {
    "username":null,
    "token": null,
    "setUser": function (username, token) {
        UserContextDefaults.username = username;
        UserContextDefaults.token = token;
    }
};
let UserContext = React.createContext(UserContextDefaults);

export {UserContext, UserContextDefaults};