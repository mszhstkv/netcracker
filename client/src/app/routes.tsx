import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import IncidentContainer from 'components/Incident/Incident.container';
import AuthContainer from 'components/Auth/Auth.container';
import Register from 'components/Register/Register.container';

export const useRoutes = (isAuth: boolean) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/incidents" exact>
                    <IncidentContainer />
                </Route>
                <Redirect to="/incidents" />
            </Switch>
        );
    }

    return (
        <Switch>
            <Route path="/login">
                <AuthContainer />
            </Route>
            <Route path="/register" exact>
                <Register />
            </Route>
            <Redirect to="/login" />
        </Switch>
    );
};
