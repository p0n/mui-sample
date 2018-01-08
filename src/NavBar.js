import React from 'react';
import { AppBar, MenuItem, Drawer } from 'material-ui';

const NavBar = (props) => (
  <div>
    <Drawer
      docked={false}
      width={200}
      open={props.drawerIsOpen}
      onRequestChange={() => props.onToggle()}
    >
      <MenuItem>French Bulls</MenuItem>
      <MenuItem>Pitbulls</MenuItem>
      <MenuItem>Pugs</MenuItem>
    </Drawer>
    <AppBar
      title="Bulls"
      onLeftIconButtonClick={() => props.onToggle()}
    />
  </div>
);

export default NavBar;
