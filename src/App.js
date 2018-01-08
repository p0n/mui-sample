import React, { Component } from 'react';
import NavBar from './NavBar';
import Main from './Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      drawerIsOpen: false,
      dialogIsOpen: false,
      bulls: [
        {
          img: 'https://cdn.pixabay.com/photo/2016/10/26/18/15/bulldog-1772130_1280.jpg',
          name: 'Bull #1',
          photoBy: 'pixabay',
        },
        {
          img: 'https://cdn.pixabay.com/photo/2016/06/27/14/35/french-bulldog-1482630_1280.jpg',
          name: 'Bull #2',
          photoBy: 'pixabay',
        },
        {
          img: 'https://cdn.pixabay.com/photo/2016/02/26/16/32/dog-1224267_1280.jpg',
          name: 'Bull #3',
          photoBy: 'pixabay',
        },
      ]
    }
  }
  handleToggle() {
    this.setState({
      drawerIsOpen: !this.state.drawerIsOpen
    })
  }
  handleToggleDialog() {
    this.setState({
      dialogIsOpen: !this.state.dialogIsOpen
    })
  }
  handleAddBull(bull) {
    if (!bull) {
      return;
    } else {
      this.state.bulls.push({
        name: bull.name,
        img: bull.img,
        photoBy: bull.photoBy,
      });
    }
    this.handleToggleDialog();
  }
  render() {
    return (
      <div>
        <NavBar
          onToggle={() => this.handleToggle()}
          drawerIsOpen={this.state.drawerIsOpen}
        />
        <Main
          onAddBull={(bull) => this.handleAddBull(bull)}
          onToggleDialog={() => this.handleToggleDialog()}
          dialogIsOpen={this.state.dialogIsOpen}
          bulls={this.state.bulls}
         />
      </div>
    );
  }
}
