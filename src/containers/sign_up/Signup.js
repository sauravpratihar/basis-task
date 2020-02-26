import React, { Component } from 'react';
import Layout from '../../components/Layout'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


export default class Signup extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            first_name: "",
            last_name: "",
            referral: ""
        };
      }
    
      onSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
        console.log(this.state)
    
      }
      onFirstNameChange =(e) => {
        this.setState({ first_name: e.target.value})
      }
      onLastNameChange =(e) => {
        this.setState({ last_name: e.target.value})
      }

      onReferralChange =(e) => {
        this.setState({ referral: e.target.value})
      }
  render() {
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
                    // required
                    fullWidth
                    label="Referral Code"
                    value={this.state.referral}
                    onChange={this.onReferralChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign Up
                </Button>
          
            </form>
        </Layout>
    );
  }
}
