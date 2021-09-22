import React, { useState } from 'react';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import Toolbar from '@material-ui/core/Toolbar';
//import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

//import NavigationComponent from './NavigationComponent.jsx'
import ProgramsComponent from './ProgramsComponent.jsx'
import RentalComponent from './RentalComponent.jsx'
import FAQComponent from './FAQComponent.jsx'

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



export default function Housing() {
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
                    {['Programs', 'Rental', 'FAQ'].map((text, index) => (
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
                {count === 1 && <RentalComponent/>}
                {count === 2 && <FAQComponent/>}
                </main>
            </div>
        )
}
