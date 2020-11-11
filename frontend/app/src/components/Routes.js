import Home from '../pages/Home';
import Jobs from '../pages/Jobs';
import Companies from '../pages/Companies';
import Company from '../pages/Company';
import Profile from '../pages/Profile';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const Routes = () =>(
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                <Home />
            </Route>
            <Route exact path="/logout">
                <Home/>
            </Route>
            <Route exact path="/register">
                <Home />
            </Route>
            <Route exact path="/jobs">
                <Jobs />
            </Route>
            <Route exact path="/companies">
                <Companies/>
            </Route>
            <Route exact path="/companies/:handle">
                <Company/>
            </Route>
            <Route exact path="/profile">
                <Profile/>
            </Route>
        </Switch>
    </Router>
);

export default Routes;