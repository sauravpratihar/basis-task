import React, { Component } from "react";
import Layout from "../../components/Layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { userActions } from "../../redux/actions/userAction";
import { SIGN_IN, PROFILE } from "../../helper/routes"

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      referral: localStorage.getItem('ref'),
      loading: false
    };
  }

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (!token) {
      return this.props.history.push(SIGN_IN);
    }
  }

  onSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true})
    userActions
      .updateUser({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        referral_code: this.state.referral
      })
      .then(data => {
        this.setState({ loading: false})
        if (data) {
          return this.props.history.push(PROFILE, data);
        }
      })
      .catch(err => console.log(err));
  };

  onFirstNameChange = e => {
    this.setState({ first_name: e.target.value });
  };

  onLastNameChange = e => {
    this.setState({ last_name: e.target.value });
  };

  onReferralChange = e => {
    this.setState({ referral: e.target.value });
  };

  render() {
    if (this.state.loading) {
      return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><p style={{ textAlign: 'center', }}>Loading...</p></div>;
    }
    return (
      <Layout>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form onSubmit={this.onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="First Name"
            autoFocus
            value={this.state.first_name}
            onChange={this.onFirstNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Last Name"
            value={this.state.last_name}
            onChange={this.onLastNameChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            label="Referral Code"
            value={this.state.referral}
            onChange={this.onReferralChange}
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Up
          </Button>
        </form>
      </Layout>
    );
  }
}
