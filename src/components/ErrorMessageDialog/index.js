import { Dialog, DialogTitle, DialogActions, DialogContent, Typography, Button } from '@material-ui/core';
import {useDispatch, useSelector} from "react-redux";
import { hideError } from '../../redux/actions'

const ErrorMessageDialog = () => {
    const error = useSelector(state => state.error);
    const message = useSelector(state => state.message);
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(hideError());
    }

    return (
        <Dialog state='error' open={error}>
            <DialogTitle>Error</DialogTitle>
            <DialogContent>
                <Typography>{message}</Typography>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>OK</Button>
            </DialogActions>
        </Dialog>
    );
};

export default ErrorMessageDialog;
