import { node } from "prop-types";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/" />;

  return children;
};

PrivateRouter.propTypes = {
  children: node.isRequired,
};

export default PrivateRouter;
