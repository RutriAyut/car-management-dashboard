import { node } from "prop-types";
import AdminMenu from "../../Menu/AdminMenu";
import LeftMenu from "../../Menu/LeftMenu";
import RightMenu from "../../Menu/RightMenu";

const LayoutAdmin = ({ children }) => {
  return (
    <div className="d-flex flex-row">
      <LeftMenu />
      <div style={{ width: "100%" }}>
        <AdminMenu />
        <div className="d-flex flex-row">
          <RightMenu />
          {children}
        </div>
      </div>
    </div>
  );
};

LayoutAdmin.propTypes = {
  children: node.isRequired,
};

export default LayoutAdmin;
