import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import UnemploymentComponent from './unemployment.jsx';
import JobSearchComponent from './jobsearch.jsx';
import FAQComponent from './faq.jsx';
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    // backgroundColor: "#DDA448",
    backgroundColor: "#AF9164",

  },
  drawerPaper: {
    marginTop: 80,
    width: drawerWidth,
    backgroundColor: "#AF9164",
    // backgroundColor: "#DDA448",
    paddingLeft: 8
  },
  drawerContainer: {
    overflow: 'auto',
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    // backgroundColor: "#DDA448",
    backgroundColor: "#AF9164",
    minHeight: "85vh"
  },
}));

export default function Jobs() {
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
                    {['Unemployment Benefits', 'Job Search', 'FAQ'].map((text, index) => (
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
                 {count === 0 && <UnemploymentComponent />}   
                 {count === 1 && <JobSearchComponent />} 
                 {count === 2 && <FAQComponent />}        
                <Toolbar />                                
                </main>
            </div>
        )
}