import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './NavBar';
import Main from './Main';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  constructor() {
    super()
    this.state = {
      open: false,
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
      open: !this.state.open
    })
    console.log(this.state);
  }
  render() {
    return (
      <MuiThemeProvider>
        <NavBar
          onToggle={() => this.handleToggle()}
          open={this.state.open}
        />
        <Main bulls={this.state.bulls} />
      </MuiThemeProvider>
    );
  }
}

export default App;
