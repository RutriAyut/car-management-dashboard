import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Text from "../Text";
import { ctaBg, ctaBtn, ctaParagraf } from "./style";

const Cta = () => {
  const navigate = useNavigate();
  const handleOnSewa = (e) => {
    navigate("/search");
  };

  return (
    <section id="cta" className="mtMargin mainMargin">
      <div className={ctaBg}>
        <Text variant={7}>Sewa Mobil di (Lokasimu) Sekarang</Text>
        <div className={ctaParagraf}>
          <Text variant={6}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
        <div className={ctaBtn}>
          <Button onClick={handleOnSewa}>Mulai Sewa Mobil</Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
