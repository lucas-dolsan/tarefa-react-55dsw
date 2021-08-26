import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { useState } from "react";

const defaultFormContent = {
  nome: "",
  username: "",
  senha: "",
};

export default function ModalDeRegistro({ visivel, onConfirmar, setVisivel }) {
  const [formContent, setFormContent] = useState(defaultFormContent);

  function onFechar() {
    setVisivel(false);
    setFormContent(defaultFormContent);
  }

  return (
    <Modal show={visivel} onHide={onFechar}>
      <Modal.Header closeButton>
        <Modal.Title>Registre-se</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nome</Form.Label>
            <Form.Control
              type="text"
              value={formContent.nome}
              onChange={(e) =>
                setFormContent({ ...formContent, nome: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>username</Form.Label>
            <Form.Control
              type="text"
              value={formContent.username}
              onChange={(e) =>
                setFormContent({ ...formContent, username: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>senha</Form.Label>
            <Form.Control
              type="password"
              value={formContent.senha}
              onChange={(e) =>
                setFormContent({ ...formContent, senha: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onFechar}>
          Fechar
        </Button>
        <Button variant="primary" onClick={() => onConfirmar(formContent)}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
