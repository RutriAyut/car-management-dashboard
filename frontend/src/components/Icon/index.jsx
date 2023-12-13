import { node } from "prop-types";
import { boxMenuIcon } from "./style";

const Icon = ({ children }) => {
  return <div className={boxMenuIcon}>{children}</div>;
};

Icon.propTypes = {
  children: node.isRequired,
};

export default Icon;
