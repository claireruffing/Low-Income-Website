import Typography from '@material-ui/core/Typography';
import React, { useState }  from 'react';
import questions from "./faquestions.json";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    buttonColor: {
        backgroundColor: "secondary"
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 100,
    }, 
    root: {
        display: 'flex',
    },
    customizeToolbar: {
        minHeight: 36
    },
    smallToolBar: {
        minHeight: 15
    }, 
    yellowBackground: {
        height: '100%',
    }
  }));

export default function FaqComponent() {
    const classes = useStyles();
    const items = []
    const questionContent = []
    questions["Frequently Asked Questions"].map((item, index) =>
        questionContent.push(
            <div>
                <Typography>
                <Box fontWeight="fontWeightBold">
                    {item.question}
                </Box>
                <Box>
                    {item.answer}
                </Box>
                </Typography>
                <Toolbar className={classes.customizeToolbar}/>
            </div>
        )
    )

    items.push(
        <div>
            <Card className={classes.yellowBackground}>
                <div className={classes.details}>
                    <CardContent>
                        <Typography>
                            <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                            Frequently Asked Questions
                            </Box>
                        </Typography>
                        <Toolbar className={classes.smallToolBar}/>
                        <Divider />
                        <Toolbar className={classes.smallToolBar}/>
                        {questionContent}
                    </CardContent>
                </div>
            </Card>
    </div>
    )

    return (
        <div>
            {items}
        </div>
    )
}