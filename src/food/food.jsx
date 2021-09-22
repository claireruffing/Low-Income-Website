import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import FoodBanksComponent from './foodBanks.jsx'
import FoodStampsComponent from './foodStamps.jsx'
import FoodFAQ from './foodFAQ.jsx'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    backgroundColor: "#AF9164",
  },
  drawerPaper: {
    marginTop: 80,
    width: drawerWidth,
    paddingLeft: 8,
    backgroundColor: "#AF9164",
  },
  drawerContainer: {
    overflow: 'auto',
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    backgroundColor: "#AF9164",
    minHeight: "85vh"
  },
}));

export default function Edu() {
  const [count, setCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleClick = (e, index) => {
    setCount(index)
    setSelectedIndex(index);

  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
          <List>
            {['Food Banks', 'Food Stamps', 'FAQ'].map((text, index) => (
              <div>
                <ListItem button key={text} onClick={(event) => handleClick(event, index)} selected={selectedIndex === index}>
                  {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
                  <ListItemText primary={text} />
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        {count === 0 && <FoodBanksComponent />}
        {count === 1 && <FoodStampsComponent />}
        {count === 2 && <FoodFAQ />}
      </main>
    </div>
  )
}