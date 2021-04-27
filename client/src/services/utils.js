let idCounter = 0;

export const getId = () => {
  idCounter++;
  return idCounter.toString();
};

export const getDimensions = (task) => {
  return {
          x: 0,
          y: 0,
          w: 3,
          h: 3,
          i: getId(),
          _id: task._id,
          title: task.title,
          description: task.description,
        };
};