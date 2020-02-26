import React, { Component } from 'react';
import Layout from '../../components/Layout'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class Otp extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
            otp: ""
        };
      }
    
      onSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
        console.log(this.state.otp)
    
      }
      onOTPChange =(e) => {
        this.setState({ otp: e.target.value})
      }
  render() {
    return (
        <Layout> 
            <Typography component="h1" variant="h5">
                Enter OTP
            </Typography>
            <form onSubmit={this.onSubmit}>
                <TextField
                    // type="number"
                    // length={6}
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
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Verify OTP
                </Button>
          
            </form>
        </Layout>
    );
  }
}
