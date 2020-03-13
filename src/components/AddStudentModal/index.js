import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddStudentButton from '../AddStudentButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
require("./style.css");

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="none" onClick={handleClickOpen}>
        <span id="student-btn"><AddCircleOutlineIcon /> <h2>Add Student</h2></span>
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Student</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the student's first and last name to add them to the project.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="First Name"
            type="firstName"
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            type="lastName"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
          {/* Needs saving logic */}
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
