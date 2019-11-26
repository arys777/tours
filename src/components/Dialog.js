import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = ({ open, closeDialog, onHandleSuccess, content: { successButtonText, title, body }={} }) => {
  const handleSuccess = () => {
    closeDialog();
    onHandleSuccess && onHandleSuccess();
  };
  return (
    <Dialog
      open={open}
      onClose={() => closeDialog()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => closeDialog()} color="primary">
          Закрыть
        </Button>
        <Button onClick={handleSuccess} color="primary" autoFocus>
          {successButtonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AlertDialog;