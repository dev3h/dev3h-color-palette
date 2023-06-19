import {
  StarOutlined,
  StarFilled,
  ThunderboltOutlined,
  ThunderboltFilled,
  ReloadOutlined,
  HeartOutlined,
  HeartFilled,
} from "@ant-design/icons";

const appNavTree = [
  {
    key: "new",
    title: "New",
    path: "",
    iconOutlined: <StarOutlined />,
    iconFilled: <StarFilled />,
  },
  {
    key: "popular",
    title: "Popular",
    path: "popular",
    iconOutlined: <ThunderboltOutlined />,
    iconFilled: <ThunderboltFilled />,
  },
  {
    key: "random",
    title: "Random",
    path: "random",
    iconOutlined: <ReloadOutlined />,
    iconFilled: <ReloadOutlined />,
  },
  {
    key: "collection",
    title: "Collection",
    path: "collection",
    iconOutlined: <HeartOutlined />,
    iconFilled: <HeartFilled />,
  },
];

export { appNavTree };
