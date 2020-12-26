import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import routes from "./router";
import {
    Login,
    // SignUp,
    Home,
    Workspace
} from '../screen';

class RouterApp extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path={routes.Workspace} component={Workspace} />
                    <Route path={routes.Drive} component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default RouterApp;