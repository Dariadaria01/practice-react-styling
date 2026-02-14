import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Breadcrumb from '../components/Breadcrumb';

const Task03 = () => {
  return (
    <Row>
      <Col>
        <Breadcrumb>
          <Breadcrumb.Item href='#'>Home</Breadcrumb.Item>

          <Breadcrumb.Item href='https://getbootstrap.com/docs/4.0/components/breadcrumb/'>
            Library
          </Breadcrumb.Item>

          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
      </Col>

      <Col>Breadcrumb!</Col>
    </Row>
  );
};

export default Task03;
