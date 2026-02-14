import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Tabs from '../components/Tabs/Tabs';
import Tab from '../components/Tabs/Tab';

const Task04 = () => {
  return (
    <Row>
      <Col>
        <Tabs defaultActiveKey='profile'>
          <Tab eventKey='home' title='Home'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              condimentum lacus nec ligula faucibus rhoncus.
            </p>
          </Tab>

          <Tab eventKey='profile' title='Profile'>
            <p>
              Donec dignissim ultricies felis, eu dictum eros congue in. In
              gravida lobortis libero nec tempus.
            </p>
          </Tab>

          <Tab eventKey='contact' title='Contact' disabled>
            <p>
              Vivamus metus nulla, fermentum eget placerat vitae, mollis
              interdum elit.
            </p>
          </Tab>
        </Tabs>
      </Col>

      <Col>Tabs!</Col>
    </Row>
  );
};

export default Task04;