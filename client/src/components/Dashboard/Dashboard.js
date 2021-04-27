import React, { useState, useEffect } from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style";
import { Header, AddTask, TodoList, PopUp } from "../index";
import {  IconButton, Tooltip } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { fetchAPI, postAPI,updateAPI } from "../../services/api";
import { getDimensions } from "../../services/utils";

const Dashboard = (props) => {
  const [openTask, setOpenTask] = useState(false);
  const [id, setId] = useState(null);
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const [taskList, setTaskList] = useState([]);

  const classes = useStyles(style)();
  useEffect(() => {
    fetchAPI(`/todos`)
      .then((res) => {
        const task = res.data.map((list) => getDimensions(list));
        setTaskList(task);
      })
      .catch((err) => console.log(err));
  }, []);

  const addTask = (event, task) => {
    event.preventDefault();
    if (id) {
      updateAPI(`/todo/${id}`, task)
        .then((res) => {
           setTaskList((previousState) => {
          let titleIndex;
          taskList.map((i, index) => {
            console.log(i['_id'] === id,'-----',i['_id'] , id)
            if (i['_id'] === id ) titleIndex = index;
            return true;
          });
          task['_id']= id;
          setId(null);
           taskList.splice(titleIndex, 1, getDimensions(task));
          return taskList
        });
          setOpenTask(false);
        })
        .catch((err) => console.log(err));
    } else {
      postAPI(`/todo`, task)
        .then((res) => {
          setTaskList((previousState) => {
            taskList.push(getDimensions(res.data.todo));
            return taskList;
          });
          setOpenTask(false);
        })
        .catch((err) => console.log(err));
    }
  };
  const openTaskEditModal = (id) => {
    setId(id);
    setOpenTask(true);
  };
  return (
    <div>
      <Header logoutSession={props.logoutSession} user={user} />
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
          <TodoList taskList={taskList} setOpenTask={openTaskEditModal} />
        </div>
      </div>
      <AddTask
        addTask={addTask}
        open={openTask}
        id={id}
        close={() => setOpenTask(false)}
      />
      <PopUp open={props.open} close={props.close} user={user} />
    </div>
  );
};

export default Dashboard;
