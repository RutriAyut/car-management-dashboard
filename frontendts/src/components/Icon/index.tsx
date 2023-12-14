import { boxMenuIcon } from "./style";
import { ChildrenProps } from "../Props";

const Icon = ({ children }: ChildrenProps) => {
  return <div className={boxMenuIcon}>{children}</div>;
};

export default Icon;
