import React, { Component } from 'react';
import { AppBar, MenuItem, Drawer } from 'material-ui';

const NavBar = (props) => (
  <div>
    <Drawer
      docked={false}
      width={200}
      open={props.open}
      onRequestChange={() => props.onToggle()}
    >
      <MenuItem>React</MenuItem>
      <MenuItem>Redux</MenuItem>
      <MenuItem>React Router</MenuItem>
      <MenuItem>Material UI</MenuItem>
      <MenuItem>Electron</MenuItem>
    </Drawer>
    <AppBar
      title="Material-UI"
      onLeftIconButtonClick={() => props.onToggle()}
    />
  </div>
);

export default NavBar;
