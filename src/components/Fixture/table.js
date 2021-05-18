import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export const RoundTable = props => {
    const { rows } = props;
    return (
        <TableContainer con>
            <Table size={"small"}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Equipo 1</StyledTableCell>
                        <StyledTableCell>Equipo 2</StyledTableCell>
                        <StyledTableCell>Resultado</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.team1}>
                            <TableCell>{row.team1}</TableCell>
                            <TableCell>{row.team2}</TableCell>
                            <TableCell>-</TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

RoundTable.propTypes = {
    rows: PropTypes.array,

}
