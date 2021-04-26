import React,{useState,useEffect} from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style"
import {Header,DragableItem,AddTask,TodoList} from "../index"
import { Grid,IconButton,Tooltip } from '@material-ui/core';
import { Add } from "@material-ui/icons";
import {fetchAPI } from '../../services/api'

const Dashboard = (props) => {
    const [openTask, setOpenTask]= useState(false);
    const classes = useStyles(style)();
    useEffect(() => {
      fetchAPI(`/todos`).then((res) => {
        console.log('res---------',res)
      });
    }, []);

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
          <TodoList />
        </div>
        <AddTask open={openTask} close={()=> setOpenTask(false)} />
    </div>
  );
};

export default Dashboard;
