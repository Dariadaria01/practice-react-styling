import { Card as RBCard } from 'react-bootstrap';

const CardImage = ({ src, variant = 'top' }) => {
    return <RBCard.Img variant={variant} src={src} />;
};

export default CardImage;