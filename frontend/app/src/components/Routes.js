import Home from './Home';
import Jobs from './Job/Jobs';
import Companies from './Company/Companies';
import Company from './Company/CompanyJob';
import Profile from './Profile/Profile'
import RegistrationForm from './Forms/RegistrationForm';
import LoginForm from './Forms/Loginform';

 
import {
  BrowserRouter as Router,
  Switch,
  Route,Redirect
} from "react-router-dom";

const Routes = () =>{
    const TOKEN_KEY = '_token';

    const isLogin = () => {
        if (localStorage.getItem(TOKEN_KEY)) {
            return true;
        }}
return(
    <Router>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/login">
                {isLogin() ? <Redirect to="/jobs" /> : <LoginForm/>}
            </Route>
            <Route exact path="/register">
                {isLogin() ? <Redirect to="/jobs" /> :  <RegistrationForm />}
            </Route>
            <Route exact path="/jobs">
                {isLogin() ?  <Jobs />: <Redirect to="/login" /> }
            </Route>
            <Route exact path="/companies">
                {isLogin() ?   <Companies />  :<Redirect to="/login" />}
            </Route>
            <Route exact path="/companies/:handle">
                {isLogin() ? <Company />  :  <Redirect to="/login" /> }
            </Route>
            <Route exact path="/profile">
                {isLogin() ?<Profile />  :   <Redirect to="/login" />}
            </Route>
        </Switch>
    </Router>)
};

export default Routes;