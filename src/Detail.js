// Detail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    seeMore: {
      marginTop: theme.spacing(3),
    },
}));
  
export default function Detail() {
    const classes = useStyles();
    let { driverSettlementId } = useParams();

    return (
      <span>Loading... {driverSettlementId}</span>
    )    

}