import Form from "react-bootstrap/Form";
import { string } from "prop-types";

function inputText({ type, placeholder, id, required }) {
  return (
    <>
      <Form.Control
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
      />
    </>
  );
}

inputText.defaultProps = {
  type: "Text",
  id: "input",
  placeholder: "placeholder",
  required: "",
};

inputText.propTypes = {
  type: string,
  id: string,
  placeholder: string,
  required: string,
};

export default inputText;
