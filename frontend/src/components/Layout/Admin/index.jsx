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

export default LayoutAdmin;
