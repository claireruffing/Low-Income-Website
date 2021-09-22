import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Box from '@material-ui/core/Box';

const link1 = 'https://www.cdss.ca.gov/inforesources/cdss-programs/housing-programs';
const link2 = 'https://www.cdss.ca.gov/inforesources/cdss-programs/housing-programs/calworks-housing-support-program';
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
            <Box fontWeight="fontWeightBold">
              Supporting Programs in California
            </Box>
          </Typography>

          <Divider />
      <Toolbar className={classes.smallToolBar}/>

      <Card className={classes.margin}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
          CDSS Housing and Homelessness Programs
          </Typography>
          <Typography variant="body1" gutterBottom>
            The Housing and Homelessness Branch is within the Family Engagement and Empowerment Division of the California Department of Social Services (CDSS). The Branch is responsible for program development and oversight of statewide housing programs funded by the CDSS. The Branch also serves as a statewide technical assistance provider to all California’s social services agencies. The Branch aims to streamline services on both the local and statewide level, to promote equal access to safe and affordable housing for all Californians.
          </Typography>
          <Button variant="contained" href={link1} target="_blank" className={classes.buttonColor}>
                  Visit Website
          </Button>
          <Typography variant="h6" gutterBottom />
        </CardContent>
      </Card>
         
         
      <Toolbar className={classes.smallToolBar}/>

      <Card className={classes.margin}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
          CalWORKs Housing Support Program
          </Typography>
          <Typography variant="body1" gutterBottom>
            HSP offers financial assistance and several wrap-around supportive services, including, but not limited to: rental assistance, security deposits, utility payments, moving costs, hotel and motel vouchers, landlord recruitment, case management, housing outreach and placement, legal services, and credit repair.
          </Typography>
          <Button variant="contained" href={link2} target="_blank" className={classes.buttonColor}>
                  Visit Website
          </Button>
          <Typography variant="h6" gutterBottom/>
        </CardContent>
      </Card>
         
         
      <Toolbar className={classes.smallToolBar}/>

      <Card className={classes.margin}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
          CWDA Housing Support Program
          </Typography>
          <Typography variant="body1" gutterBottom>
            The CalWORKs Housing Support Program was created by the Legislature and Governor Brown as part of the 2014-15 State Budget and assists homeless CalWORKs families by helping them obtain and keep permanent housing. In the first year, 20 counties were funded and closely worked with community partners to house more than 3,000 families. In 2015-16, 42 counties are funded to find safe, stable homes for homeless families.
          </Typography>
          <Button variant="contained" href={link3} target="_blank" className={classes.buttonColor}>
                  Visit Website
          </Button>
        </CardContent>
      </Card>

      </Card>

      
    </div>
  );
}

