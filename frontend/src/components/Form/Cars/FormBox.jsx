import { node, string } from "prop-types";
import { formBox } from "./style";
import { Levelwidth } from "../../../context";

const FormBox = ({ level, children }) => {
  return (
    <div className={formBox}>
      <Levelwidth.Provider value={level}>{children}</Levelwidth.Provider>
    </div>
  );
};

FormBox.propTypes = {
  children: node.isRequired,
  level: string,
};

export default FormBox;
