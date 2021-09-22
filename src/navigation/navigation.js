import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import WorkIcon from '@material-ui/icons/Work';
import HomeIcon from '@material-ui/icons/Home';
import SchoolIcon from '@material-ui/icons/School';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  rightAlign: {
    marginLeft: 'auto',
  },
  leftAlign: {
    marginRight: theme.spacing(1),
  },
  indicator: {
    backgroundColor: 'white',
  },
  test: {
    backgroundColor: '#9cacbf',
  },
  styles: {
    textDecoration: 'none',
    color: 'white',
  }
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#659DBD' }}>
        <Toolbar>
          <div className={classes.leftAlign}>
            <NavLink id="homebutton" to="/cmpm131" className={classes.styles} >
              <Tab label="Home" />
            </NavLink>
          </div>
          <div className={classes.rightAlign}>
            <NavLink to="/housing-resources" className={classes.styles}>
                <Tab label="Housing" icon={<HomeIcon />} />
            </NavLink>
            <NavLink to="/job-resources" className={classes.styles}>
              <Tab label="Jobs" icon={<WorkIcon />} />
            </NavLink>
            <NavLink to="/food-resources" className={classes.styles}>
              <Tab label="Nutrition" icon={<FastfoodIcon />} />
            </NavLink>
            <NavLink to="/educational-resources" className={classes.styles}>
              <Tab label="Education" icon={<SchoolIcon />} />
            </NavLink>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
