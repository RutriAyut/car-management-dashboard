import { arrayOf, object } from "prop-types";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function CustomBreadcrumb({ link }) {
  return (
    <Breadcrumb>
      {link.map((result, key) => {
        return (
          <Breadcrumb.Item key={key} href={result.link} active={result.active}>
            {result.name}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

CustomBreadcrumb.defaultProps = {
  link: null,
};

CustomBreadcrumb.propTypes = {
  link: arrayOf(object),
};

export default CustomBreadcrumb;
