import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Add, Refresh } from '@material-ui/icons';
import { Grid, Avatar, Paper } from '@material-ui/core';
import { Typography, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import axios from 'axios';
import { URL } from '../../config';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflow: 'hidden',
        padding: theme.spacing(0, 3),
    },
    paper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
    },
}));

export const TournamentsGrid = () => {
    const classes = useStyles();
    const [list, setList] = useState([]);

    const fetchData = async () => {
        const { data } = await axios.get(URL.TOURNAMENT.LIST);
        console.log(data);
        setList(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <div className={classes.root}>
                    {list.map(t=>(
                    <Paper className={classes.paper}  key={t.id} variant="outlined">
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                                <Avatar>{t.id}</Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography>{t.tournament_name}</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    ))}
                </div>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="Refrescar" icon={<Refresh />} onClick={fetchData}/>
                </BottomNavigation>
            </div>
        </>
    );
}
