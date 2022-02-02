import React from 'react';
import SideBarList from './List';
import './sidebar.scss';
import Grid from '@mui/material/Grid';

const SideBar = () => {
  return (<Grid className='sidebar' color="primary" >
     <SideBarList />
  </Grid>)
}

export default SideBar;