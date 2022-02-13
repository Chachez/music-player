export const timeConverter = (value) => {
  return Math.floor(value / 60) + ":" + (value % 60 ? value % 60 : "00");
};
