import React, { useState, useEffect, useRef } from "react";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style";
import { Header, AddTask, TodoList, PopUp } from "../index";
import { fetchAPI, postAPI, updateAPI } from "../../services/api";
import { getDimensions } from "../../services/utils";

const Dashboard = (props) => {
  const [openTask, setOpenTask] = useState(false);
  const [id, setId] = useState(null);
  const user = JSON.parse(sessionStorage.getItem("userData"));
  const [taskList, setTaskList] = useState([]);
  let listData = useRef([]);
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
              if (i["_id"] === id) titleIndex = index;
              return true;
            });
            task["_id"] = id;
            setId(null);
            taskList.splice(titleIndex, 1, getDimensions(task));
            return taskList;
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
    if (id) {
      fetchAPI(`/todo/${id}`)
        .then((res) => {
          listData.current = res.data;
          setId(id);
          setOpenTask(true);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className={classes.body}>
      <Header
        logoutSession={props.logoutSession}
        user={user}
        setOpenTask={setOpenTask}
      />
      <div className={classes.bodyDiv}>
        <div className={classes.todoList}>
          <TodoList taskList={taskList} setOpenTask={openTaskEditModal} />
        </div>
      </div>
      <AddTask
        addTask={addTask}
        open={openTask}
        id={id}
        listData={listData}
        close={() => {
          setId(null);
          setOpenTask(false);
        }}
      />
      <PopUp open={props.open} close={props.close} user={user} />
    </div>
  );
};

export default Dashboard;
