import React from "react";
import { Container, ListGroup, Row, Col, Button } from "react-bootstrap";

export default function ItemList({
  items,
  onEdit,
  onDelete,
  key,
  renderItem,
  disableActions,
}) {
  return (
    <ListGroup className="gradient-list">
      {items.map((item) => (
        <Container className="p-1" key={item[key]}>
          <Row className="list-item">
            <Col className="Col-1">
              <ListGroup.Item>{renderItem(item)}</ListGroup.Item>
            </Col>
            <Col className="Col-2">
              <Button
                disabled={disableActions}
                className="m-1"
                size="sm"
                onClick={() => onEdit(item)}
              >
                Editar
              </Button>
              <Button
                disabled={disableActions}
                className="m-1"
                size="sm"
                onClick={() => onDelete(item)}
              >
                Apagar
              </Button>
            </Col>
          </Row>
        </Container>
      ))}
    </ListGroup>
  );
}
