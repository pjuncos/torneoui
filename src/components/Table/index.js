import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Refresh, ArrowBack } from '@material-ui/icons';
import { Typography, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import axios from 'axios';
import { APP_ROUTES, URL } from '../../config';
import { useDispatch } from "react-redux";
import { showError } from '../../redux/actions'
import { useHistory, useParams } from 'react-router-dom'
import { PositionsTable } from './table';

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

export const Table = () => {
    const classes = useStyles();
    const history = useHistory();
    const { id } = useParams();
    const [list, setList] = useState([]);
    const dispatch = useDispatch();

    const fetchData = () => {
        axios.get(URL.TABLE.LIST(id))
            .then(response => setList(response.data))
            .catch(e => dispatch(showError(e.message)));
    };

    const handleBack = () => {
        history.push(`${APP_ROUTES.FIXTURE}/${id}`);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div style={{ height: 400, width: '100%', marginTop: 40 }}>
                <div className={classes.root}>
                    <Typography variant="h5" component="h5" gutterBottom>
                        Tabla de posiciones
                    </Typography>
                    <PositionsTable rows={list}/>
                </div>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="Volver" icon={<ArrowBack />} onClick={handleBack}/>
                    <BottomNavigationAction label="Refrescar" icon={<Refresh />} onClick={fetchData}/>
                </BottomNavigation>
            </div>
        </>
    );
}
