import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from './Button.js';

import {useFruits} from '../custom-hooks/useFruits';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DenseTable() {
  const classes = useStyles();
  const { data} = useFruits();
/*
  console.log(data);
  if(error) 
  {
    return <div>Error: {error.message}</div>;
  }
  else if (!loading)
  {
    return <div>Loading...</div>;
  } 
  else
  {
    */
    
  return (
    
    <div className='table'>
    <TableContainer component={Paper}>      
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Taste</TableCell>
            <TableCell align="right">Benefits</TableCell>
            <TableCell align="right">Origin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {data.filter((fruit) => {
          return fruit;  
        }).map((item)=> (
            <TableRow key={item.name}>
              <TableCell component="th" scope="row">
              <img
            src={item.image_url}
            alt={item.name }
            style={{ width: "150px", align: "center" }}
          />
              </TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">{item.taste}</TableCell>
              <TableCell align="right">{item.benefits}</TableCell>
              <TableCell align="right">{item.origin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
