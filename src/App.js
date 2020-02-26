import React from 'react';
// import { connect } from 'react-redux';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Signin from '../src/containers/sign_in/Signin';
import Otp from '../src/containers/otp/Otp';
import Signup from '../src/containers/sign_up/Signup';
import Profile from '../src/containers/profile/Profile';



// const App = (
//   <Router>
//     <div>
//       <Route path="/" component={Signin} />
//       {/* <Route path="/users" component={Users} /> */}
//       {/* <Route path="/contact" component={Contact} /> */}
//     </div>
//   </Router>
// )

const App = () => (
  <Router>
    <div>
      <Route exact path="/sign_in" component={Signin} />
      <Route exact path="/otp" component={Otp} />
      <Route exact path="/sign_up" component={Signup} />
      <Route exact path="/profile" component={Profile} />



      {/* <Route path="/users" component={Users} /> */}
      {/* <Route path="/contact" component={Contact} /> */}
    </div>
  </Router>
)

export default App;
