import React from 'react';
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  addButton: {
    float: 'right',
    marginRight: 20,
  },
  dialogButton: {
    margin: 12,
  },
};

export default class DialogExampleDialogDatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.props.onAddBull({
      name: this.refs.name.getValue().trim(),
      img: this.refs.img.getValue().trim(),
      photoBy: this.refs.photoBy.getValue().trim(),
    });
  }

  render() {
    const actions = [
      <RaisedButton
        style={styles.dialogButton}
        label="Cancel"
        secondary={true}
        onClick={this.props.onToggleDialog}
      />,
      <RaisedButton
        style={styles.dialogButton}
        label="Add"
        primary={true}
        type="submit"
        onClick={this.submit}
      />,
    ];

    return (
      <div>
        <FloatingActionButton
          style={styles.addButton}
          onClick={this.props.onToggleDialog}
        >
          <ContentAdd/>
        </FloatingActionButton>
        <Dialog
          title="Let's add a new bull"
          actions={actions}
          modal={true}
          open={this.props.dialogIsOpen}
          onRequestClose={this.props.onToggleDialog}
        >
          <form>
          <TextField
            ref="name"
            hintText="Name"
          /><br />
          <TextField
            ref="img"
            hintText="Image"
          /><br />
          <TextField
            ref="photoBy"
            hintText="Photo by"
          /><br />
          </form>
        </Dialog>
      </div>
    );
  }
}
