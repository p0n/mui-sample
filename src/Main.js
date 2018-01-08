import React from 'react';
import InputDialog from './InputDialog';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    display: 'flex',
    flexWrap: 'nowrap',
    overflowX: 'auto',
  },
  titleStyle: {
    color: 'rgb(0, 188, 212)',
  },
  buttonStyle: {
    float: 'right',
    marginRight: 20,
  },
};

const GridListSample = (props) => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {props.bulls.map((bull) => (
        <GridTile
          key={bull.name}
          title={bull.name}
          subtitle={<span>photo by <b>{bull.photoBy}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={bull.img} alt={bull.name}/>
        </GridTile>
      ))}
    </GridList>
  </div>
);

const TableSample = (props) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>No.</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Photo by</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      {props.bulls.map((bull, index) => (
        <TableRow key={bull.name}>
          <TableRowColumn>{index + 1}</TableRowColumn>
          <TableRowColumn>{bull.name}</TableRowColumn>
          <TableRowColumn>{bull.photoBy}</TableRowColumn>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <GridListSample bulls={this.props.bulls}/>
        <TableSample bulls={this.props.bulls}/>
        <InputDialog
          dialogIsOpen={this.props.dialogIsOpen}
          onToggleDialog={this.props.onToggleDialog}
          onAddBull={this.props.onAddBull}
        />
      </div>
    );
  }
}
