import Form from "react-bootstrap/Form";
import { string } from "prop-types";

function inputText({ type, placeholder, id, required, value }) {
  return (
    <>
      <Form.Control
        type={type}
        id={id}
        placeholder={placeholder}
        required={required}
        defaultValue={value}
      />
    </>
  );
}

inputText.defaultProps = {
  type: "Text",
  id: "input",
  placeholder: "placeholder",
  required: "",
  value: "",
};

inputText.propTypes = {
  type: string,
  id: string,
  placeholder: string,
  required: string,
  value: string,
};

export default inputText;
