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

export default LayoutMain;
