import React, { Component } from 'react';
import Layout from '../../components/Layout'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

export default class Signup extends Component {
    onSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
        // console.log(this.state)
        alert('Logouting')
    
      }
  render() {
    return (
        <Layout>
            <Typography component="h1" variant="h5">
                Profile
            </Typography>
            <form onSubmit={this.onSubmit}>
           


        <Grid item xs={12} md={12}>
         
          <div className>
            <List>
              {/* {generate( */}
                <ListItem>
                    <Typography  component="h2" >First Name: Saurav</Typography>
                  {/* <ListItemText
                    secondary="First Name"
                    primary="Saurav Pratihar"
                  /> */}
                </ListItem>
              {/* )} */}
            </List>
          </div>
        </Grid>


                
             
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign Out
                </Button>
          
            </form>
        </Layout>
    );
  }
}
