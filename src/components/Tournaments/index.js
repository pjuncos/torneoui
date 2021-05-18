import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Add, Refresh } from '@material-ui/icons';
import { Grid, Avatar, Paper, Button, TextField } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
import { Typography, BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import axios from 'axios';
import { URL, DEFAULT_VALUES } from '../../config';
import { useDispatch } from "react-redux";
import { showError } from '../../redux/actions'

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
    const [cant, setCant] = useState(DEFAULT_VALUES.TEAMS_CANT);
    const [name, setName] = useState('');
    const [error, setError] = useState(false);
    const [items, setItems] = useState([]);
    const [openDialog, setOpenDialog] = React.useState(false);
    const dispatch = useDispatch();
    const handleClickOpenDialog = () => {
        setError(false);
        setCant(DEFAULT_VALUES.TEAMS_CANT);
        setName('');
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleSubmitDialog = () => {
        if (isNaN(cant) || cant < 2 || !name) {
            setError(true);
        } else {
            setOpenDialog(false);
            axios.post(URL.TOURNAMENT.CREATE, {cant, name})
                .then(() => fetchData())
                .catch(e => dispatch(showError(e.message)));
        }
    };

    const handleChangeCant = (event) => {
        setCant(event.target.value);
    };

    const handleChangeName = (event) => {
        setName(event.target.value);
    };

    const fetchData = () => {
        axios.get(URL.TOURNAMENT.LIST)
            .then(response => setList(response.data))
            .catch(e => dispatch(showError(e.message)));
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const array = []
        list.forEach(t=>{
            array.push(
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
        )});
        setItems(array);
    }, [list]);

    return (
        <>
            <div style={{ height: 400, width: '100%' }}>
                <div className={classes.root}>
                    { items.length ? items : <Paper className={classes.paper}variant="outlined">
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item xs>
                                <Typography>No existen torneos creados</Typography>
                            </Grid>
                        </Grid>
                    </Paper> }
                </div>
                <BottomNavigation showLabels>
                    <BottomNavigationAction label="Refrescar" icon={<Refresh />} onClick={fetchData}/>
                    <BottomNavigationAction label="Nuevo torneo" icon={<Add />} onClick={handleClickOpenDialog}/>
                </BottomNavigation>
            </div>
            <Dialog open={openDialog}>
                <DialogTitle>Crear torneo</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="cantidad"
                        label="Cantidad de Equipos"
                        error={error}
                        onChange={handleChangeCant}
                        variant="outlined"
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="name"
                        label="Nombre del torneo"
                        error={error}
                        onChange={handleChangeName}
                        variant="outlined"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleSubmitDialog} color="primary">
                        Crear
                    </Button>
                    <Button onClick={handleCloseDialog} color="primary">
                        Cancelar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}
