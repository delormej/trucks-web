import React from 'react';
import MaterialTable from 'material-table';
import { useParams } from 'react-router-dom';
import DriverSettlement from './DriverSettlement.json';
import AmountDue from './AmountDue';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Deductions from './Deductions';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

export function Details() {
  let { driverSettlementId } = useParams();
  const [state, setState] = React.useState({
    columns: [
      { title: 'Load', field: 'ProNumber' },
      { title: 'Miles', field: 'Miles', type: 'numeric' },
      { title: 'Revenue', field: 'TotalPaid', type: 'numeric' },
      { title: 'FSC', field: 'ExtendedAmount', type: 'numeric' },
      { title: 'Advance', field: 'AdvanceAmount', type: 'numeric' },
      { title: 'Dead Head', field: 'DeadHead', type: 'numeric' },
      { title: 'Empty', field: 'Empty', type: 'numeric' },      
      { title: 'Tolls', field: 'Tolls', type: 'numeric' },            
  
      { title: 'Canada', field: 'Canada', type: 'numeric' },         
      { title: 'Stops', field: 'StopOff', type: 'numeric' },
      { title: 'Detention', field: 'Detention', type: 'numeric' },
      { title: 'Hand Load', field: 'HandLoad', type: 'numeric' },
      { title: 'Layover', field: 'Layover', type: 'numeric' },
      { title: 'Layover', field: 'Layover', type: 'numeric' },      
      { title: 'Other', field: 'Other', type: 'numeric' },               
    ],
    data: DriverSettlement.Credits
  });

  return (
  <MaterialTable
    title={ "Editing... " + driverSettlementId }
    icons={tableIcons}
    columns={state.columns}
    data={state.data}
    options={ 
      { 
        padding: "dense", 
        showFirstLastPageButtons: false,
        showSelectAllCheckbox: false,
        paging: false,
        search: false,
        toolbarButtonAlignment: "left"
      } 
    }
    editable={{
      onRowAdd: (newData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            setState((prevState) => {
              const data = [...prevState.data];
              data.push(newData);
              return { ...prevState, data };
            });
          }, 600);
        }),
      onRowUpdate: (newData, oldData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            if (oldData) {
              setState((prevState) => {
                const data = [...prevState.data];
                data[data.indexOf(oldData)] = newData;
                return { ...prevState, data };
              });
            }
          }, 600);
        }),
      onRowDelete: (oldData) =>
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
            setState((prevState) => {
              const data = [...prevState.data];
              data.splice(data.indexOf(oldData), 1);
              return { ...prevState, data };
            });
          }, 600);
        }),
    }}
  />
  );
}

export default function Detail() {
  return (
    <React.Fragment>
      <Grid item xs={12} md={8} lg={9}>
        <Paper /* className={fixedHeightPaper} */>
          <Deductions />
        </Paper>
      </Grid>
      {/* Amount Due */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper /*className={fixedHeightPaper}*/ >
          <AmountDue />
        </Paper>
      </Grid>
      {/* Details */}
      <Grid item xs={12}>
        <Paper /*className={classes.paper}*/>
          <Details />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
