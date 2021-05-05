import React, { useState, useEffect } from "react";
import {
  TextField,
  TextareaAutosize,
  Grid,
  Dialog,
  DialogContent,
  IconButton,
  DialogTitle,
  Button,
  DialogActions,
  Select,
  MenuItem,
} from "@material-ui/core";
import useStyles from "../../custom-hooks/useStyles";
import style from "../../assets/style";
import { Clear } from "@material-ui/icons";
import configForWaterfall from "../Charts/configForWaterfall";
import configForBar from "../Charts/configForBar";

const AddTask = (props) => {
  const classes = useStyles(style)();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [config, setConfig] = useState(
    JSON.stringify(configForWaterfall, null, 4)
  );
  const [chartType, setChartType] = useState("Waterfall");
  const [isDisable, setIsDisable] = useState(false);
  const [isError, setIsError] = useState({ title: false, description: false });
  const CheckIfNotEmpty = (text) => !(text == null || /^\s*$/.test(text));

  useEffect(() => {
    setTitle(props.listData.current.title);
    setDescription(props.listData.current.description);
    setConfig(props.listData.current.config);
    setChartType(props.listData.current.chartType);
  }, [props.id, props.listData]);

  const checkEnable = (input) => {
    !CheckIfNotEmpty(input.value)
      ? setValue(input, true)
      : setValue(input, false);
  };
  const setValue = (input, bool) => {
    setIsError((previousState) => {
      previousState[input.name] = bool;
      return previousState;
    });
    setIsDisable(!isDisable);
  };
  const clearState = () => {
    setDescription("");
    setTitle("");
  };
  return (
    <Dialog
      className={classes.modalWidth}
      open={props.open}
      disableEscapeKeyDown={true}
      disableBackdropClick={true}
      onClose={props.close}
      key={props.id ? props.id : ""}
      onExit={clearState}
    >
      <DialogTitle className={classes.dialogTitle}>
        {props.id ? "Update Chart" : "Add Chart"}
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <IconButton
          onClick={props.close}
          aria-label="Close"
          className={classes.cancelCrossIcon}
        >
          <Clear />
        </IconButton>
        <Grid container>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              name="title"
              defaultValue={title}
              placeholder="Add Task"
              type="text"
              helperText={isError.title ? "Please enter task" : ""}
              error={isError.title}
              onChange={(e) => {
                setTitle(e.target.value);
                checkEnable(e.target);
              }}
              onBlur={(e) => {
                setTitle(e.target.value);
                checkEnable(e.target);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              defaultValue={description}
              helperText={isError.description ? "Please enter description" : ""}
              name="description"
              placeholder="Description"
              error={isError.description}
              onChange={(e) => {
                setDescription(e.target.value);
                checkEnable(e.target);
              }}
              onBlur={(e) => {
                setDescription(e.target.value);
                checkEnable(e.target);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <TextareaAutosize
              aria-label="maximum height"
              defaultValue={config}
              style={{ minWidth: "400px" }}
              onChange={(e) => {
                setConfig(e.target.value);
                checkEnable(e.target);
              }}
              onBlur={(e) => {
                setConfig(e.target.value);
                checkEnable(e.target);
              }}
            />
          </Grid>
          {!props.id && (
            <Grid item xs={12} sm={12} md={12}>
              <Select
                value={chartType}
                onChange={(e) => {
                  setChartType(e.target.value);
                  setConfig(
                    e.target.value === "Bar"
                      ? JSON.stringify(configForBar, null, 4)
                      : JSON.stringify(configForWaterfall, null, 4)
                  );
                  checkEnable(e.target);
                }}
              >
                <MenuItem value={"Bar"}>Bar</MenuItem>
                <MenuItem value={"Waterfall"}>Waterfall</MenuItem>
              </Select>
            </Grid>
          )}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid className={classes.actionButton} item xs={12} sm={12} md={12}>
          <Button
            onClick={props.close}
            className={"buttonCancel"}
            type="button"
          >
            Cancel
          </Button>
          <Button
            className={"buttonDefault"}
            onClick={(e) =>
              props.addTask(e, { title, description, config, chartType })
            }
            type="submit"
            disabled={
              props.id
                ? false
                : isError.title || isError.description || !title || !description
            }
          >
            Add
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default AddTask;
