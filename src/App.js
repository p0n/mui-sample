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
      open: false
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
        <Main />
      </MuiThemeProvider>
    );
  }
}

export default App;
