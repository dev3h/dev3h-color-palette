import {
  StarOutlined,
  StarFilled,
  ThunderboltOutlined,
  ThunderboltFilled,
  ReloadOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";
import path from "../utils/path";

const appNavTree = [
  {
    key: "new",
    title: "New",
    path: path.HOME,
    iconOutlined: <StarOutlined />,
    iconFilled: <StarFilled />,
  },
  {
    key: "popular",
    title: "Popular",
    path: path.POPULAR,
    iconOutlined: <ThunderboltOutlined />,
    iconFilled: <ThunderboltFilled />,
  },
  {
    key: "random",
    title: "Random",
    path: path.RANDOM,
    iconOutlined: <ReloadOutlined />,
    iconFilled: <ReloadOutlined />,
  },
  {
    key: "collection",
    title: "Collection",
    path: path.COLLECTION,
    iconOutlined: <HeartOutlined />,
    iconFilled: <HeartFilled />,
  },
];

export { appNavTree };
