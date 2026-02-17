import React from 'react';

import { Card as RBCard } from 'react-bootstrap';

const CardBody = ({ children }) => {
    return <RBCard.Body>{children}</RBCard.Body>;
};

export default CardBody;