import Home from './Home';
import Jobs from './Job/Jobs';
import Companies from './Company/Companies';
import Company from './Company/CompanyJob';
import Profile from './Profile';
 
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