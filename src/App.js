import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Signin from '../src/containers/sign_in/Signin';
import Otp from '../src/containers/otp/Otp';
import Signup from '../src/containers/sign_up/Signup';
import Profile from '../src/containers/profile/Profile';
import { SIGN_IN, OTP, SIGN_UP, PROFILE} from './helper/routes'
const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path={SIGN_IN} component={Signin} />
        <Route exact path={OTP} component={Otp} />
        <Route exact path={SIGN_UP} component={Signup} />
        <Route exact path={PROFILE} component={Profile} />
        <Route component={Signin}/>
      </Switch>
    </div>
  </Router>
)

export default App;
