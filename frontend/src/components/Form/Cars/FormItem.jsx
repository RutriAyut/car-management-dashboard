import { node, string } from "prop-types";
import Row from "react-bootstrap/Row";
import { useContext } from "react";
import { Levelwidth } from "../../../context";

const FormItem = ({ children }) => {
  const level = useContext(Levelwidth);
  return <Row style={{ width: level }}>{children}</Row>;
};

FormItem.propTypes = {
  children: node.isRequired,
  w: string,
};

export default FormItem;
