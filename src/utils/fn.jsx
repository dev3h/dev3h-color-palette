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

export const splitColorString = (colorString) => {
  const newColors = [];
  for (let i = 0; i < colorString?.length; i += 6) {
    const color = colorString?.slice(i, i + 6);
    newColors.push(color);
  }
  return newColors;
};

export const hex2rgb = (hex) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgb(${r},${g},${b})`;
};

export const formatDate = (date) => {
  return moment(date)?.fromNow();
};
