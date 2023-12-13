import React from "react";
import ReactDOM from "react-dom/client";
import RouterApp from "./routes";
import { GoogleOAuthProvider } from "@react-oauth/google";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const clientID =
  "485030194031-qa2q2i6t5am8oqu0i13ho63fa2jj9cid.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
      <RouterApp />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
