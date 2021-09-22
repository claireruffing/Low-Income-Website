import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1500,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8
  },
  margin: {
    margin: 20
  },
  pTop: {
    paddingTop: 20
  },
  buttonColor: {
    backgroundColor: "#aa5042",
    color: '#ffffff'
  },
}));

// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.margin}>
        <Typography variant="h5">
          <Box className={classes.pTop} fontWeight="fontWeightBold">Unemployment Benefits</Box>
        </Typography>
        
        <br></br>
        <Divider />
        <br></br>
        <Button 
            size = "large" 
            variant = "contained" 
            className={classes.buttonColor} 
            target = "_blank"
            href={"https://edd.ca.gov/"}>
            Offical Link to the EDD Website
        </Button>
          <List component="nav" aria-label="main mailbox folders" >
            <font size = "+1" ><b>How to Apply for Unemployment Benefits</b></font> <br></br>
              <ListItemText primary="Step 1: Click the button up above to navigate to the offical EDD Website." /> <br></br>    
              <ListItemText primary="Step 2: Make sure you login to the website. If you do not current have an account registered with EDD, create one." /> <br></br>
                2a. You should see on the top left corner a benefits login button.
                <br></br><img src = "https://i.gyazo.com/5202a2005d589ef39c45d6fd2ee3db30.png"></img> <br></br>
                <br></br>
                2b. You will then be prompt to enter your login information. If you do not have an account click the register now button below.
                <img src = "https://i.gyazo.com/61746931022aab9d567d0df82b18a9c4.png" width = "700"></img>
              <ListItemText primary="Step 3: Once logged in, click to file a claim on the EDD Homepage Website." />
              <img src = "https://i.gyazo.com/8e5dd8f989ca6ebcb169b0c0e0ac3a0d.png"></img> <br></br>
              <ListItemText primary="Step 4: When you are directed to the main EDD website, click file for unemployment" /><br></br>
              <ListItemText primary="Step 5: Fill and Follow the instrcutions regarding the form." /> <br></br>
              <ListItemText primary="Step 6: Once the form is filled and submitted you will recieve an email regarding the application and the form will be process in about a week." />  <br></br>
              <ListItemText primary="Step 7: After recieving unemployment benefits, you will need to do a follow up form roughly every two weeks" />
              <br></br>
              <b>Additional Help: </b> Contact the support using the offical EDD contact information for assistance.
              <br></br> 
            <Button 
            size = "small" 
            target = "_blank"
            variant = "contained" 
            color = "secondary" 
            href={"https://edd.ca.gov/about_edd/contact_edd.htm"}>
            Offical Link For the list of EDD Contact Support
            </Button>
          </List>
          <Divider />  
      </div>
    
    </div>
  );
}


