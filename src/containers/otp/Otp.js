import React, { Component } from "react";
import Layout from "../../components/Layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { userActions } from "../../redux/actions/userAction";
import { Redirect } from "react-router-dom";
import { SIGN_IN, SIGN_UP, PROFILE } from "../../helper/routes"

export default class Otp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      otp: "",
      loading: false
    };
  }

  onSubmit = e => {
    this.setState({ loading: true });
    e.preventDefault();
    console.log("clicked", this.props.location.state.email);
    console.log(this.state.otp);
    userActions
      .signin({ email: this.props.location.state.email, otp: this.state.otp })
      .then(data => {
        if (data) {
          localStorage.setItem("token", data.token);
          this.setState({ loading: false });
          if (data.user.is_first_time) {
            return this.props.history.push(SIGN_UP);
          } else {
            return this.props.history.push(PROFILE, data.user);
          }
        }
      })
      .catch(err => console.log);
  };

  onOTPChange = e => {
    this.setState({ otp: e.target.value });
  };

  render() {
    if (this.state.loading) {
      return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><p style={{ textAlign: 'center', }}>Loading...</p></div>;
    }
    
    if (!this.props.location.state) {
      return <Redirect to={SIGN_IN} />;
    }
    return (
      <Layout>
        <Typography component="h1" variant="h5">
          Enter OTP
        </Typography>
        <form onSubmit={this.onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="OTP"
            name="otp"
            autoComplete="OTP"
            value={this.state.otp}
            onChange={this.onOTPChange}
            autoFocus
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Verify OTP
          </Button>
        </form>
      </Layout>
    );
  }
}
