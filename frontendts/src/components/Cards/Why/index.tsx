import Card from 'react-bootstrap/Card';
import Text from '../../Text';
import { card, cardBody, iconWhyUs } from '../style';
import { IconProps } from '../../Props';

function CardWhy({ icon, title, text }: IconProps) {
	console.log({icon, title, text});
	return (
		<Card className={card} data-testid="why">
			<Card.Body className={cardBody}>
				<Card.Img bsPrefix={iconWhyUs} src={icon} />
				<Text variant={3}>{title}</Text>
				<Text>{text}</Text>
			</Card.Body>
		</Card>
	);
}

export default CardWhy;
