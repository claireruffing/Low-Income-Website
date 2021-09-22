import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(3),
            fontFamily: 'sans-serif',
            // width: theme.spacing(40),
            // height: theme.spacing(30),
        },
    },
    button: {
        '& > *': {
            fontWeight: props => props.fontWeight,
        },
        marginBottom: 20,
        maxHeight: 50,
        padding: 10,
    },
    italicFont: {
        fontStyle: props => props.fontStyle,
    },
    header: {
        padding: 10,
        maxWidth: 500,
        marginBottom: 10
        
    }
}));

function openApplication() {
    window.open("https://www.getcalfresh.org/?source=g2&gclid=CjwKCAiA8Jf-BRB-EiwAWDtEGl8WzjmmNwCaUB1fI0mqZjYn9OENXpFLtpXj2bmHu778Lan5o_WR5RoC5qsQAvD_BwE", "_blank");
}

export default function Variants() {
    const props = { fontStyle: 'italic', fontWeight: 'bold' };
    const classes = useStyles(props);

    return (
        <div>
            <Paper className={classes.header}>
                <Typography variant="h5">
                    <Box fontWeight="fontWeightBold">
                        Apply for Food Stamps Here!
                    </Box>
                </Typography>
            </Paper>
            <Button className={classes.button} variant="contained" style={{'background-color':"#AA5042"}} onClick={() => openApplication()}>
                    Click Here to Go to California Food Stamps Application
                </Button>
            <Paper className={classes.root} elevation={3}>
                <Typography>
                    You will be redirected to the California food stamps website
                    in a new tab in your browser.
                    The website is called GetCalFresh.org. The application will take
                    around 10 minutes to complete. <br></br>
                    Once the GetCalFresh website loads, click the "Apply Now -&gt;"
                    button to begin working on the application. Directions on how to fill out the applicaiton
                    will be provided by GetCalFresh as you progress through the application.
                </Typography>
            </Paper>
            <br></br>
            <Paper className={classes.root} elevation={3}>
                <Typography className={classes.italicFont}>
                    Note: <br></br>
                    1. Need documents with you like your ID, paystubs, or rent receipts. <br></br>
                    2. Once application is approved, you will need to wait up to 30 days before receiving your food stamps.
                </Typography>
            </Paper>
        </div >
    );
}
