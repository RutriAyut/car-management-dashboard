import { node, string } from "prop-types";
import Form from "react-bootstrap/Form";

function CustomSelect({ id, children, required }) {
  return (
    <Form.Select id={id} required={required}>
      {children}
    </Form.Select>
  );
}

CustomSelect.defaultProps = {
  id: "defaultSelect",
  required: "",
};

CustomSelect.propTypes = {
  children: node.isRequired,
  id: string,
  required: string,
};

export default CustomSelect;
