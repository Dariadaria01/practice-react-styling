import { Card as RBCard } from 'react-bootstrap';

const Card = ({ children, width = '18rem' }) => {
    return (
        <RBCard style={{ width }}>
            {children}
        </RBCard>
    );
};

export default Card;