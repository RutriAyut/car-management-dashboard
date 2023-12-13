import { node } from "prop-types";
import Footer from "../../Footer";
import Menu from "../../Menu/MainMenu";

const LayoutMain = ({ children }) => {
  return (
    <>
      <Menu />
      {children}
      <Footer />
    </>
  );
};

LayoutMain.propTypes = {
  children: node.isRequired,
};

export default LayoutMain;
