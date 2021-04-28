let idCounter = -1;

export const getId = () => {
  idCounter++;
  return idCounter.toString();
};

export const getDimensions = (
  task,
  dimensions = { x: 0, y: 0, w: 3, h: 3, i:getId()}
) => {
  return {
    x: dimensions.x,
    y: dimensions.y,
    w: dimensions.w,
    h: dimensions.h,
    i: dimensions.i,
    _id: task._id,
    title: task.title,
    description: task.description,
  };
};

export const setTodoLocal = () => {};
