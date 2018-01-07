import React, { Component } from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
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
};

const tilesData = [
  {
    img: 'https://cdn.pixabay.com/photo/2016/10/26/18/15/bulldog-1772130_1280.jpg',
    title: 'Bull #1',
    author: 'pixabay',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/06/27/14/35/french-bulldog-1482630_1280.jpg',
    title: 'Bull #2',
    author: 'pixabay',
  },
  {
    img: 'https://cdn.pixabay.com/photo/2016/02/26/16/32/dog-1224267_1280.jpg',
    title: 'Bull #3',
    author: 'pixabay',
  },
];

const GridListSample = () => (
  <div style={styles.root}>
    <GridList style={styles.gridList} cols={2.2}>
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          subtitle={<span>by <b>{tile.author}</b></span>}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
        >
          <img src={tile.img} />
        </GridTile>
      ))}
    </GridList>
  </div>
);

const TableSample = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Author</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>1</TableRowColumn>
        <TableRowColumn>Bull #1</TableRowColumn>
        <TableRowColumn>pixabay</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>2</TableRowColumn>
        <TableRowColumn>Bull #2</TableRowColumn>
        <TableRowColumn>pixabay</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>3</TableRowColumn>
        <TableRowColumn>Bull #3</TableRowColumn>
        <TableRowColumn>pixabay</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
);

const Main = () => (
  <div>
    <GridListSample />
    <Subheader>TableSample</Subheader>
    <TableSample />
  </div>
);
export default Main;
