import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1300,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <List component="nav" aria-label="main mailbox folders" >
      <CardContent><Box><font size = "+2" ><b>Frequently Asked Questions</b></font> </Box> </CardContent>
        <Divider /> 
        <CardContent>  
          <font size = "+1"><b>What would disqualify you for unemployment?</b> </font>
          <ListItemText primary="To be eligible for unemployment benefits your employer must classify you as an employee, and not an independent contractor. If you were fired for misconduct you 
          will not be eligible for unemployment benefits. An employee will also be disqualified from receiving unemployment benefits when he or she quit without good cause to quit."/> <br></br> <br></br>
          <font size = "+1"><b>Are there any disadvantages for filing for unemployment?</b> </font>
          <ListItemText primary="When filing for unemployment you must pay for federal taxes on unemployment benefits and sometimes state taxes, as these benefits are considered taxable income. 
           While receiving unemployment benefits, you will not receive any insurance or additional benefits, as you are responsible for any insurance you may need."/> <br></br> <br></br>
           <font size = "+1"><b>When will I recieve my first unemployment payment? </b> </font>
          <ListItemText primary="Most claimants recieve their first payment in about three weeks after applying for benefits, after being eligible and meeting the requirements needed to recieve aid.
          There maybe usually be a delay of six to eight weeks to recieve benefits if the state is overwhelmed with applications or there may have been an error in your application."/> <br></br> <br></br>

        </CardContent>
      </List> 
    </div>
  );
}


