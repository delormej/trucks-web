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

export default function AmountDue() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Amount Due</Title>
      <Typography component="p" variant="h4">
        $292.46
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        <Table size="small">
            <TableRow>
                <TableCell>Driver:</TableCell>
                <TableCell>RICHARD ROBEL</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Truck:</TableCell>
                <TableCell>13795</TableCell>
            </TableRow>
            <TableRow>
                <TableCell>Settlement Date:</TableCell>
                <TableCell>2019-01-25</TableCell>
            </TableRow>            
        </Table>
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
            &nbsp;<br/>
          Download Excel
            &nbsp;<br/>
        </Link>
      </div>
    </React.Fragment>
  );
}

