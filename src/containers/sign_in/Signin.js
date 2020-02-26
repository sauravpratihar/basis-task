import React, { Component } from "react";
import Layout from "../../components/Layout";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class Signin extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        email: ""
    };
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log('clicked')
    console.log(this.state.email)

  }
  onEmailChange =(e) => {
    this.setState({ email: e.target.value})
  }
  
  render() {
    console.log('state', this.state)
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
