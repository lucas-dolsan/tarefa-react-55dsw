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
    <ListGroup>
      {items.map((item) => (
        <Container className="p-1" key={item[key]}>
          <Row>
            <Col>
              <ListGroup.Item>{renderItem(item)}</ListGroup.Item>
            </Col>
            <Col>
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
