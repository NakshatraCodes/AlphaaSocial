import React, { useState, useEffect } from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style";
import { Header, AddTask, TodoList } from "../index";
import { Grid, IconButton, Tooltip } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { fetchAPI } from "../../services/api";
import { getId } from "../../services/utils";

const Dashboard = (props) => {
  const [openTask, setOpenTask] = useState(false);
  const [taskList, setTaskList] = useState([
        {
          x: 0,
          y: 0,
          w: 3,
          h: 3,
          i: getId(),
          task: "buy veggies",
          description: "tomato, potato",
        },
        {
          x: 0,
          y: 1,
          w: 3,
          h: 3,
          i: getId(),
          task: "buy groceries",
          description: "salt, chilli",
        },
      ]);

  const classes = useStyles(style)();
  useEffect(() => {
    fetchAPI(`/todos`).then((res) => {
      console.log("res---------", res);
      //setTaskList();
    });
  }, []);

  const addTask = (event, task) => {
    event.preventDefault();
    console.log("task: ", task);
    setTaskList((previousState) => {
      taskList.push({
        x: 0,
        y: 0,
        w: 3,
        h: 3,
        i: getId(),
        task: task.task,
        description: task.description,
      });
      return taskList;
    });
    setOpenTask(false);
  };
  return (
    <div>
      <Header logoutSession={props.logoutSession} />
      <div className={classes.bodyDiv}>
        <Tooltip title="Add Task">
          <IconButton
            onClick={() => setOpenTask(true)}
            aria-label="Close"
            className={`${classes.cancelCrossIcon} ${classes.createTask}`}
          >
            <Add />
          </IconButton>
        </Tooltip>
        <div className={classes.todoList}>
          <TodoList taskList={taskList}/>
        </div>
      </div>
      <AddTask
        addTask={addTask}
        open={openTask}
        close={() => setOpenTask(false)}
      />
    </div>
  );
};

export default Dashboard;
