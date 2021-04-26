import React,{useState} from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style"
import {Header,DragableItem,AddTask} from "../index"
import { Grid,IconButton,Tooltip } from '@material-ui/core';
import { Add } from "@material-ui/icons";

const Dashboard = (props) => {
    const [openTask, setOpenTask]= useState(false);
    const classes = useStyles(style)();

  return (
    <div>
        <Header logoutSession={props.logoutSession} />
        <div className={classes.bodyDiv}>
          <Tooltip title="Add Task">
            <IconButton
            onClick={()=>setOpenTask(true)}
            aria-label="Close"
            className={`${classes.cancelCrossIcon} ${classes.createTask}`}
          >
            <Add />
          </IconButton>
        </Tooltip>
          <DragableItem />
        </div>
        <AddTask open={openTask} close={()=> setOpenTask(false)} />
    </div>
  );
};

export default Dashboard;
