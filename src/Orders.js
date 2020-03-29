import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

import DriverSettlements from './DriverSettlements.json';

const rows = DriverSettlements;

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Settlement Date: 2018-12-14, Week #3 2019</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Company</TableCell>
            <TableCell>Settlement</TableCell>
            <TableCell>Driver</TableCell>
            <TableCell>Truck</TableCell>
            <TableCell align="right">Fuel Charges</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.CompanyId}</TableCell>
              <TableCell>{row.DriverSettlementDate}</TableCell>
              <TableCell><Link href={"/detail/" + row.TruckId}>{row.Driver}</Link></TableCell>
              <TableCell>{row.TruckId}</TableCell>
              <TableCell>{row.FuelCharges}</TableCell>
              <TableCell align="right">{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}
