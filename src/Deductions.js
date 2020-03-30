import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Deductions() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Deductions</Title>
      <Typography color="textSecondary" className={classes.depositContext}>
        <Table size="small">
            <TableRow>
                <TableCell>Advances</TableCell>
                <TableCell>833.38</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Qualcomm</TableCell>
                <TableCell>0.00</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Occupational Insurance</TableCell>
                <TableCell>23.95</TableCell>
            </TableRow>            
        </Table>
      </Typography>
    </React.Fragment>
  );
}

