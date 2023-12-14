import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Admin from "./Admin";
import Login from "./Main/login";
import PrivateRouter from "./PrivateRouter";

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<Main />} />
        <Route
          path="/admin/*"
          element={
            <PrivateRouter>
              <Admin />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
