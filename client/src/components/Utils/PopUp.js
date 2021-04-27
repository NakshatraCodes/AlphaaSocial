import React from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style";
import {
  Dialog,
  DialogContent,
  IconButton,
} from "@material-ui/core";
import { Clear } from "@material-ui/icons";

const PopUp = (props) => {
  const classes = useStyles(style)();

  return (
    <Dialog className={classes.modalWidth} 
      open={props.open} 
      disableEscapeKeyDown={true} 
      disableBackdropClick={true}
      onClose={props.close}
    >
      <DialogContent className={classes.dialogContent}>
        <IconButton onClick={props.close} aria-label="Close" className={classes.cancelCrossIcon}>
          <Clear />
        </IconButton>
         <h4>Hi User</h4>
        <p>Welcome to your todo board.</p>
      </DialogContent>
    </Dialog>
  );
};

export default PopUp;
