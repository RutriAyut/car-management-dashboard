import Card from "react-bootstrap/Card";
import { card, cardBody, iconWhyUs } from "../style";
import Text from "../../Text";

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

export default CardWhy;
