import Typography from '@material-ui/core/Typography';
import React from 'react';
import laptopinfo from "./covidresources.json";
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    buttonColor: {
        backgroundColor: "#aa5042",
        color: '#ffffff'
    },
    details: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
        width: 100,
        paddingLeft: 10
    }, 
    root: {
        display: 'flex',
    },
    customizeToolbar: {
        minHeight: 36
    },
    smallToolBar: {
        minHeight: 15
    }
  }));

export default function LaptopsComponent() {
    const classes = useStyles();
    const items = []
    const laptopContent = []
    const internetContent = []
    laptopinfo["Laptop Resources"].map((item, index) =>
        laptopContent.push(
            <div>
                <Card>
                    <div className={classes.details}>
                        <CardMedia>
                            <img src={item.imageLink} className={classes.img}>
                            </img>
                        </CardMedia>
                        <CardContent>
                            <Typography>
                            <Box fontWeight="fontWeightBold">
                                {item.name}
                            </Box>
                            <Box>
                                {item.description}
                            </Box>
                            </Typography>
                            <Button variant="contained" href={item.link} target="_blank" className={classes.buttonColor}>
                                    Visit Website
                            </Button>
                        </CardContent>
                    </div>
                </Card>
                <Toolbar className={classes.customizeToolbar}/>
            </div>
        )
    )
    laptopinfo["Internet Resources"].map((item, index) =>
        internetContent.push(
            <div>
                <Card>
                    <div className={classes.details}>
                        <CardMedia>
                            <img src={item.imageLink} className={classes.img}>
                            </img>
                        </CardMedia>
                        <CardContent>
                            <Typography>
                            <Box fontWeight="fontWeightBold">
                                {item.name}
                            </Box>
                            <Box>
                                {item.description}
                            </Box>
                            </Typography>
                            <Button variant="contained" href={item.link} target="_blank" className={classes.buttonColor}>
                                    Visit Website
                            </Button>
                        </CardContent>
                    </div>
                </Card>
                <Toolbar className={classes.customizeToolbar}/>
            </div>
        )
    )

    items.push(
        <div>
            <Card>
                <div className={classes.details}>
                    <CardContent>
                        <Typography>
                            <Box fontWeight="fontWeightBold" fontSize="h5.fontSize">
                            Tech Resources - Laptops
                            </Box>
                        </Typography>
                        <Toolbar className={classes.smallToolBar}/>
                        <Divider />
                        <Toolbar className={classes.smallToolBar}/>
                        {laptopContent}
                    </CardContent>
                </div>
            </Card>
            <Toolbar className={classes.smallToolBar}/>
            <Card>
            <div className={classes.details}>
                <CardContent>
                    <Typography>
                        <Box fontWeight="fontWeightBold" fontSize="h6.fontSize">
                            Tech Resources - Internet/Wifi
                        </Box>
                    </Typography>
                    <Toolbar className={classes.smallToolBar}/>
                    <Divider />
                    <Toolbar className={classes.smallToolBar}/>
                    {internetContent}
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