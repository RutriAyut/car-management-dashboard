import { number, string } from "prop-types";
import "./style.js";
import { styLogo, styLogoAdmin } from "./style.js";

const Logo = ({ color, variant }) => {
  switch (variant) {
    case 1:
      return <div className={styLogo(color)}></div>;
    case 2:
      return <div className={styLogoAdmin}></div>;
  }
};

Logo.defaultProps = {
  color: "#0d28a6",
  variant: 1,
};

Logo.propTypes = {
  color: string,
  variant: number,
};

export default Logo;
