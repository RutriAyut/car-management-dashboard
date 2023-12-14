import { Navigate } from "react-router-dom";
import { ChildrenProps } from "../../components/Props";

const PrivateRouter = ({ children }: ChildrenProps) => {
  const token = localStorage.getItem("token");

  if (!token) return <Navigate to="/" />;

  return children;
};

export default PrivateRouter;
