import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, NavLink
} from 'reactstrap';

const CardWithButton1 = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="10%" src="https://hugoleonardodev.github.io/imgs/undraw_to_the_moon_v1mv (1).svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">LinkedIn</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Hugo Leonardo</CardSubtitle>
          <CardText>Connect with me on LinkedIn.</CardText>
          <Button><NavLink href="https://www.linkedin.com/in/hugo-leonardo-matosinhos-de-souza/">LinkedIn</NavLink></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardWithButton1;