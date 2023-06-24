import { message } from "antd";
import moment from "moment/moment";

export const copyColor = (color) => {
  navigator.clipboard.writeText(color).then(
    () => {
      message.success(`${color} copied to clipboard!`);
    },
    () => {
      message.error("Copy failed, please try again.");
    }
  );
};

export const formatDate = (date) => {
  return moment(date).fromNow();
};
