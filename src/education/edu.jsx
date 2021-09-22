import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

import ProgramsComponent from './programsComponent.jsx'
import ScholarshipsComponent from './ScholarshipComponent.jsx'
import FaqComponent from './faq.jsx'
import LaptopsComponent from './laptops.jsx'


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
                    {['Youth Educational Programs', 'College Scholarships', 'COVID19 Resources', 'FAQ'].map((text, index) => (
                        <div>
                          <ListItem button key={text} onClick={(event) => handleClick(event, index)} selected={selectedIndex === index}>
                            <ListItemText primary={text} />
                          </ListItem>
                          <Divider />
                        </div>

                    ))}
                    </List>
                </div>
                </Drawer>
                <main className={classes.content}>
                  {count === 0 && <ProgramsComponent/>}
                  {/* {count === 1 && <HigheredComponent/>} */}
                  {count === 1 && <ScholarshipsComponent/>}
                  {count === 2 && <LaptopsComponent/>}
                  {count === 3 && <FaqComponent/>}
                </main>
            </div>
        )
}