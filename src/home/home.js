import React, { useState, } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Slider from 'infinite-react-carousel';
import {Link } from "react-router-dom";
import Calendar from 'react-calendar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#AF9164"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  
}));

const settings={
  autoplaySpeed: 5000,
  arrows: false,
  autoplay: true,
  dots:true,
  pauseOnHover: true
};

export default function Home() {
  
  const classes = useStyles();

  const [value, onChange] = useState(new Date());

    return (
      <div className={classes.root}>

      <Grid container spacing={0}>
        <Grid item xs>
        <div>
          <Slider{...settings}>
            <div>
              <img src="https://raw.githubusercontent.com/gmillican10/cmpm131/main/src/img/homepage-banner.png?token=ALKGBQ5HJQX3FVF7DLAFI4C74B5KM" width="100%"/>
            </div>
            <div>
              <Link to ='/job-resources' >
                <img src="https://raw.githubusercontent.com/gmillican10/cmpm131/main/src/img/unemploy-benefits-banner.png?token=ALKGBQ4FDCCOWMQD5YD6W6274DZ7O" width="100%"/>
              </Link>
            </div>
            <div>
              <Link to ='/educational-resources' >
                <img src="https://raw.githubusercontent.com/gmillican10/cmpm131/main/src/img/yep-banner.png?token=ALKGBQ3GYCYSCKDTJ6TTDQS74D2BE" width="100%"/>
              </Link>
            </div>
          </Slider>
        </div>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <b><Paper className={classes.paper}>Upcoming Deadlines & Events
          </Paper></b>
          <br></br>
          <Paper>
            <Calendar
            onChange={onChange}
            value={value}
          />
          </Paper>      
          <br></br>
          <Paper><b>The Science Ambassador Scholarship</b>
            <br></br>
            Deadline to Apply: December 14, 2020
            <br></br>See <u>College Scholarships</u> under <Link to ='/educational-resources'>Education</Link> for more information
          </Paper>
          <br></br>
          <Paper><b>Salvation Army - Food Bank</b>
            <br></br>
            1515 W. North Street, Anaheim, CA 92801
            <br></br>
            (714) 491-1450
            <br></br>
            Mon., Weds., Fri. 10 a.m. - 12:30p.m.
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><b>Mission Statement</b>
          <br></br>
          Our organization is comprised of community members from across the state of California, who all strive to provide service and support to Low Income communities in need of financial support.
          <br></br>
          <br></br>
          The California Community Resources project seeks to help connect individuals from Low Income communities with attaining access to Housing, Educational, Job, and Nutritional resource services.
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}><b>About the CCR</b>
          <br></br>
          <br></br>
          Here at the California Community Resources project, we are a engaged team of five individuals from diverse backgrounds that are providing their support to community members in need of a digital platform hosting financial resources to support them during the Covid-19 Pandemic.
          </Paper>
        </Grid>
      </Grid>
      </div>
    );
  }

  