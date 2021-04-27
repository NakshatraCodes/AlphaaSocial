let idCounter = 0;

export const getId = () => {
  idCounter++;

  return idCounter.toString();
};