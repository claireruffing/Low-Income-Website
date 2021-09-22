import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Toolbar from '@material-ui/core/Toolbar';

// This is the Food FAQ section of the website.

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 800,
    },
    cardPlacement: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    smallToolBar: {
        minHeight: 15
    },
});

export default function Types() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <div className={classes.cardPlacement}>
                    <CardContent>
                        <Typography variant="h5">
                            <Box fontWeight="fontWeightBold">
                                FAQ How to Navigate the Nutrition Pages
                            </Box>
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            <Toolbar className={classes.smallToolBar}/>

            <Card className={classes.root}>
                <div className={classes.cardPlacement}>
                    <CardContent>
                        <Typography>
                            <Box fontWeight="fontWeightBold">
                                How do I navigate the Food Banks table?
                            </Box>
                            <Box>
                                1. Start typing the city name of where you want to find food banks in the Search box.<br></br>
                                2. A drop down list of cities will appear. Click on the city name that matches the city you are looking for. Then the table will show food banks in that city.<br></br>
                                3. If you want to clear your selection you made, click the 'X' button in the search box. The table will then refill with all of its data.<br></br>
                                4. If you want to know more information than what the table provides, you can look up the name and address of the food bank on Google.
                            </Box>
                        </Typography>
                    </CardContent>
                </div>
            </Card>
            <Toolbar className={classes.smallToolBar}/>

            <Card className={classes.root}>
                <div className={classes.cardPlacement}>
                    <CardContent>
                        <Typography>
                            <Box fontWeight="fontWeightBold">
                                How do I navigate to the Food Stamps application?
                            </Box>
                            <Box>
                                The dark button that says 'Click Here to Go to California Food Stamps Application' will open up that website in a new tab. That is where you will apply for food stamps.<br></br>

                            </Box>
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </div>
    );
}
