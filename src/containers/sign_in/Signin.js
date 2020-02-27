import React, { Component } from "react";
import Layout from "../../components/Layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { userActions } from "../../redux/actions/userAction";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { OTP, PROFILE } from "../../helper/routes"
import { getUrlParameter } from "../../helper/helper"


class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      loading: false
    };
  }

  onSubmit = e => {
    e.preventDefault();
    localStorage.setItem('ref', '')
    if(getUrlParameter('ref')){
      localStorage.setItem('ref', getUrlParameter('ref'))
    }
    this.setState({ loading: true });
    userActions
      .sendOTP({
        email: this.state.email
      })
      .then(data => {
        this.setState({ loading: false });
        if (data) {
          return this.props.history.push(OTP, { email: this.state.email });
        }
      })
      .catch(err => console.log(err));
  };
  onEmailChange = e => {
    this.setState({ email: e.target.value });
  };

  render() {
    if (this.state.loading) {
      return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><p style={{ textAlign: 'center', }}>Loading...</p></div>;
    }

    if (localStorage.getItem("token")) {
      return <Redirect to={PROFILE} />;
    }
    return (
      <Layout>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={this.onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="email"
            label="Email Address"
            autoFocus
            value={this.state.email}
            onChange={this.onEmailChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
        </form>
      </Layout>
    );
  }
}

export default connect()(Signin);
