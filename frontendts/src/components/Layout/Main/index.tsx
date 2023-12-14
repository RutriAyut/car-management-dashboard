import { node } from "prop-types";
import Footer from "../../Footer";
import Menu from "../../Menu/MainMenu";
import { ChildrenProps } from "../../Props";

const LayoutMain = ({ children }: ChildrenProps) => {
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
