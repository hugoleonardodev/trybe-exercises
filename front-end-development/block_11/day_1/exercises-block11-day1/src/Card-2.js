import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, NavLink
} from 'reactstrap';

const CardWithButton2 = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="10%" src="https://hugoleonardodev.github.io/imgs/undraw_to_the_moon_v1mv (1).svg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Portfolio</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">hugoleonardodev.github.io</CardSubtitle>
          <CardText>Personal Web Portfolio, with projects, contacts, social medias, etc</CardText>
          <Button><NavLink href="https://hugoleonardodev.github.io/">Portfolio</NavLink></Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardWithButton2;