import { Button } from "bootstrap";
import React from "react";
import { useEffect } from "react";
import { Card, Image } from "react-bootstrap";

export default function Compromissos() {
  return (
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src=".../100px180/" alt="Card image cap" />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );

  return (
    <Card>
      <Image src="" alt="askajfls"></Image>
      <Card.Body>
        <Card.Title>card title</Card.Title>
        <Card.Text>sdsadas gksdgmlks dgm lksm lskmg l</Card.Text>
        <Button>go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
