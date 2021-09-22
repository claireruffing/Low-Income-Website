import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 1100,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 8,
    padding: 20,
    marginLeft: 10
  },
}));

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Typography variant="h5" gutterBottom>
        <Box fontWeight="fontWeightBold">
          Frequently Asked Questions
        </Box>
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        1. How do I qualify for low income apartments in California?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Once the median income is established for an area, households earning less than 80 percent of that amount are considered low income. Those earning less than 50 percent are considered very low income, and anyone making less than 30 percent of the AMI is considered extremely low income.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        2. How can I get a free apartment?
      </Typography>
      <Typography variant="body1" gutterBottom>
        There are several advices to reduce your cost:
        1) List a Room With Airbnb.
        2) Get Roommates.
        3) House Sit for Others.
        4) Find a Rent-for-Work Situation.
        5) Become a Live-In Nanny or Pet Sitter.
        6) Manage an Apartment Building.
        7) Live with a Relative and Do Chores for Rent.
        8) Move Back in With Your Parents.
      </Typography>
      
      <Typography variant="h6" gutterBottom>
        3. What can I do if I can't afford your rent?
      </Typography>
      <Typography variant="body1" gutterBottom>
       1) Take the help you can get. Applying for unemployment or other assistance programs may take time, but it can certainly be worth it.
       2) Talk to your landlord.
       3) Call 211.
       4) Apply for grants in your industry.
       5) Ask for help from family or friends.
       6) Modify living arrangements.
       7) Seek professional advice.
      </Typography>
      
    </div>
  );
}

