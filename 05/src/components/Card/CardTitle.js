import { Card as RBCard } from 'react-bootstrap';

const CardTitle = ({ children }) => {
    return <RBCard.Title>{children}</RBCard.Title>;
};

export default CardTitle;