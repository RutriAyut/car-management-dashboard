import Row from "react-bootstrap/Row";
import { useContext } from "react";
import { Levelwidth } from "../../../context";
import { ChildrenProps } from "../../Props";

const FormItem = ({ children }: ChildrenProps) => {
  const level = useContext(Levelwidth);
  return <Row style={{ width: level }}>{children}</Row>;
};

export default FormItem;
