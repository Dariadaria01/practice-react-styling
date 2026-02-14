import React from 'react';
import Button, { ButtonThemeProvider } from './src/components/Button';
import { Row, Col, Button as RBButton } from 'react-bootstrap';

const Task02 = () => {
  return (
    <ButtonThemeProvider>
      <Row>
        <Col>
          <RBButton variant='primary' size='lg'>
            RB Button!
          </RBButton>
        </Col>
        <Col>
          <Button variant='primary' size='lg' active>
            Custom Button!
          </Button>
        </Col>
      </Row>
    </ButtonThemeProvider>
  );
};

export default Task02;