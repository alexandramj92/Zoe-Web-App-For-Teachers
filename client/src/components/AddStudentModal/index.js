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
import { navigate } from '@reach/router';
import API from '../../utils/API';
require("./style.css");

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = event => {
    setValues({...values, [event.target.name]: event.target.value,});
  };

  const handleSave = event => {
    event.preventDefualt();
    setOpen(false);
    
    const { firstName, lastName } = values;
      const studentData = {
        firstName,
        lastName
      }

      if (!studentData.firstName || !studentData.lastName) {
        return;
      }
      API.saveStudent(studentData)
        .then(navigate('/code'))
        .catch(err => console.log(err));
  }

  return (
    <div>
      <Button variant="none" onClick={handleClickOpen}>
        <AddStudentButton />
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
            name="firstName"
            fullWidth
            onChange={handleChange}
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Last Name"
            name="lastName"
            fullWidth
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
          {/* Needs saving logic */}
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
