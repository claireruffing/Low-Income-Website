import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

const link1 = 'https://www.hud.gov/states/california/renting';
const link2 = 'https://www.voa.org/find-housing?gclid=CjwKCAiA8Jf-BRB-EiwAWDtEGhCuBt1Ku-t3r_7HMdtf-xMsfsCoTIpNA6AO08c6uM9b6UpmzdFbEhoCng8QAvD_BwE';
const link3 = 'https://www.cwda.org/housing-support-program';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      // margin: theme.spacing(1),
      width: '100%',
      // maxWidth: 900,
    },
  }, 
  smallToolBar: {
    minHeight: 15
  },
  margin: {
    margin: 20
  },
  buttonColor: {
    backgroundColor: "#aa5042",
    color: '#ffffff'
  },
}));

export default function Types() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card>
        <Typography variant="h5" gutterBottom className={classes.margin}>
          <Box fontWeight="fontWeightBold">Affordable Housing Rental information in California</Box>
        </Typography>
        <Divider />
        <Toolbar className={classes.smallToolBar}/>

        <Card className={classes.margin}>
          <CardContent>
              <Typography variant="h6" gutterBottom>
              RENTAL HELP: CALIFORNIA
            </Typography>
            <Typography variant="body1" gutterBottom>
              You can get rental information such as Riverside County and San Diego Initiate COVID-19 Renter Assistance, Subsidized Apartments, Public Housing and Housing Choice Vouchers (Section 8). Advising is available.
            </Typography>
            <Button variant="contained" href={link1} target="_blank" className={classes.buttonColor}>
                    Visit Website
            </Button>
          </CardContent>
        </Card>
          
        <Toolbar className={classes.smallToolBar}/>

        <Card className={classes.margin}>
          <CardContent>
              <Typography variant="h6" gutterBottom>
              Affordable Housing from VOA.org
              </Typography>
              <Typography variant="body1" gutterBottom>
                VOA offters not only affordable housing within United States, but also overarching programs and services for your potential needs. Feel free to go through the website and get as much as benefits.
              </Typography>
              <Button variant="contained" href={link2} target="_blank" className={classes.buttonColor}>
                      Visit Website
              </Button>
          </CardContent>
        </Card>

        <Toolbar className={classes.smallToolBar}/>

        <Card className={classes.margin}>
          <CardContent>
              <Typography variant="h6" gutterBottom>
              California Rent Assistance
            </Typography>
            <Typography variant="body1" gutterBottom>
              We provide an online directory of of rental assistance programs in California. Choose the city in California on the right side of the page.
              We list the cities where we found help for those needing help paying their rent. We only list the rental assistance programs on the website and do not provide the aid ourselves.
            </Typography>
            <Button variant="contained" href={link3} target="_blank" className={classes.buttonColor}>
                    Visit Website
            </Button>
          </CardContent>
        </Card>
        
        <Toolbar className={classes.smallToolBar}/>
      </Card>
    </div>
  );
}


