import Card from "react-bootstrap/Card";
import { card, cardBody, iconWhyUs } from "../style";
import Text from "../../Text";
import { string } from "prop-types";

function CardWhy({ icon, title, text }) {
  return (
    <Card className={card}>
      <Card.Body className={cardBody}>
        <Card.Img bsPrefix={iconWhyUs} src={icon} />
        <Text variant={3}>{title}</Text>
        <Text>{text}</Text>
      </Card.Body>
    </Card>
  );
}

CardWhy.propTypes = {
  icon: string,
  title: string,
  text: string,
};

export default CardWhy;
