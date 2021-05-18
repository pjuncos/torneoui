import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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

export const PositionsTable = props => {
    const { rows } = props;
    return (
        <TableContainer>
            <Table size={"small"}>
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Nombre</StyledTableCell>
                        <StyledTableCell>Puntos</StyledTableCell>
                        <StyledTableCell>Jugados</StyledTableCell>
                        <StyledTableCell>Ganados</StyledTableCell>
                        <StyledTableCell>Empatados</StyledTableCell>
                        <StyledTableCell>Perdidos</StyledTableCell>
                        <StyledTableCell>Goles a favor</StyledTableCell>
                        <StyledTableCell>Goles en contra</StyledTableCell>
                        <StyledTableCell>Diferencia</StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.team_id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.points}</TableCell>
                            <TableCell>{row.played}</TableCell>
                            <TableCell>{row.win}</TableCell>
                            <TableCell>{row.draw}</TableCell>
                            <TableCell>{row.lost}</TableCell>
                            <TableCell>{row.scored}</TableCell>
                            <TableCell>{row.conceded}</TableCell>
                            <TableCell>{row.difference}</TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

PositionsTable.propTypes = {
    rows: PropTypes.array,

}
