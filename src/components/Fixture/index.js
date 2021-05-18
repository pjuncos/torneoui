import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Assignment, Refresh, ArrowBack } from '@material-ui/icons';
import { Grid, Paper, Button } from '@material-ui/core';
import { Typography, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import axios from 'axios';
import { APP_ROUTES, URL } from '../../config';
import { useDispatch } from "react-redux";
import { showError } from '../../redux/actions'
import { useHistory, useParams } from 'react-router-dom'
import { RoundTable } from './table';

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

export const FixtureGrid = () => {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const [items, setItems] = useState([]);
    const [list, setList] = useState([]);
    const dispatch = useDispatch();

    const fetchData = () => {
        axios.get(URL.FIXTURE.LIST(id))
            .then(response => setList(response.data))
            .catch(e => dispatch(showError(e.message)));
    };

    const handleClickViewTable = () => {

    }

    const handleBack = () => {
        history.push(`${APP_ROUTES.HOME}`);
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const array = []
        let teams;
        let round;
        let i = 0;
        while(i < list.length) {
            round = list[i].round;
            teams = [];
            while(i < list.length && round === list[i].round) {
                teams.push({
                    team1: list[i].team1_name,
                    team2:list[i].team2_name
                });
                i++;
            }
            array.push(
                <Paper className={classes.paper}  key={round} variant="outlined">
                    <Grid container wrap="nowrap" spacing={3}>
                        <Grid item>
                            Fecha {round}
                        </Grid>
                        <Grid item xs>
                            <RoundTable rows={teams}/>
                        </Grid>
                    </Grid>
                </Paper>);
        }
        setItems(array);
    }, [list]);

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <div className={classes.root}>
                    <Typography variant="h5" component="h5" gutterBottom>
                        Fixture
                    </Typography>
                    { items }
                </div>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="Volver" icon={<ArrowBack />} onClick={handleBack}/>
                    <BottomNavigationAction label="Refrescar" icon={<Refresh />} onClick={fetchData}/>
                    <BottomNavigationAction label="Ver posiciones" icon={<Assignment />} onClick={handleClickViewTable}/>
                </BottomNavigation>
            </div>
        </>
    );
}
