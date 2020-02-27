import React, { Component } from "react";
import Layout from "../../components/Layout";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { userActions } from "../../redux/actions/userAction";
import { SIGN_IN, SIGN_UP, PROFILE } from "../../helper/routes"

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  onSubmit = e => {
    e.preventDefault();
    userActions
      .signout()
      .then(data => {
        if (data) {
          localStorage.setItem("token", "");
          return this.props.history.push(SIGN_IN);
        }
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (!token) {
      return this.props.history.push(SIGN_IN);
    }
    this.getUser();
  }

  getUser() {
    userActions
      .getUser()
      .then(data => {
        if (data) {
          this.setState({ user: data, loading: false });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.loading) {
      return <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}><p style={{ textAlign: 'center', }}>Loading...</p></div>;
    }

    const { first_name, last_name, referral_code, email, my_referral_code } = this.state.user;
    
    return (
      <Layout>
        <Typography component="h1" variant="h5">
          Profile
        </Typography>
        <form onSubmit={this.onSubmit}>
          <Grid item xs={12} md={12}>
            <div>
              <List>
                <ListItem>
                  <Typography component="h2">Email: {email}</Typography>
                </ListItem>
                <ListItem>
                  <Typography component="h2">
                    First Name: {first_name}
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography component="h2">Last Name: {last_name}</Typography>
                </ListItem>
                <ListItem>
                    <Typography component="h2">
                      My Referral Code: {my_referral_code}
                    </Typography>
                  </ListItem>
                {referral_code && (
                  <ListItem>
                    <Typography component="h2">
                      Applied Referral Code: {referral_code}
                    </Typography>
                  </ListItem>
                )}
              </List>
            </div>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign Out
          </Button>
        </form>
      </Layout>
    );
  }
}
