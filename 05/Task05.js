import { Row, Col } from 'react-bootstrap';

import {
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardText,
} from '../components/Card';

import Button from '../components/Button/Button';

const Task05 = () => {
  return (
    <Row>
      <Col>
        <Card>
          <CardImage src='https://picsum.photos/100/80' />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button variant='primary'>Go somewhere</Button>
          </CardBody>
        </Card>
      </Col>

      <Col>Card!</Col>
    </Row>
  );
};

export default Task05;
