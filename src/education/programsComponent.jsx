import Typography from '@material-ui/core/Typography';
import React, { useState }  from 'react';
import programs from "./programs.json";
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
    },
    leftPadding: {
        paddingLeft: 20
    },
    dividerHeight: {
        height: 3
    }
  }));
export default function ProgramsComponent() {
    const classes = useStyles();
    const programsList = Object.keys(programs)
    const [ageGroup, setAgeGroup] = useState('Elementary');
    const items = []
    programs[ageGroup].map((item, index) =>
                items.push(
                    <div>
                        <Card className={classes.root}>
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
                        <Toolbar className={classes.smallToolBar}/>
                    </div>
                )
            )

    return (
        <div>
            <Card>
                <div className={classes.details}>
                    <Typography>
                        <Box fontWeight="fontWeightBold" fontSize="h5.fontSize" className={classes.leftPadding}>
                            Youth Educational Programs
                        </Box>
                    </Typography>
                    <CardContent>
                        <Autocomplete
                            id="filter-demo"
                            options={programsList}
                            onChange={(e, value) => value === null ? setAgeGroup('Elementary') : setAgeGroup(value)}
                            defaultValue={'Elementary'}
                            style={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Filter By Age Group" variant="outlined" />}
                        />
                    </CardContent>
                </div>
                <Divider />
                <Toolbar className={classes.smallToolBar}/>
                <CardContent>
                    {items}
                </CardContent>
            </Card>
        </div>
    )
}