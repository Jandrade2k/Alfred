import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';


import logo from '../../assets/alfred.png';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {
  const estilo = useStyles();
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" className={estilo.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={estilo.title} color="inherit">
            <img src={logo} alt="Alfred App" height="25px" className={estilo.image} /> Alfred App
          </Typography>
          <div className={estilo.grow} />
          {location.pathname === '/' && (
          <div className={estilo.button}>
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default PrimarySearchAppBar;
