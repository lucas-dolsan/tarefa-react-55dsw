import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const defaultFormContent = {
  nome: "",
  fone: "",
  email: "",
};

export default function ModalDeEdicaoDeContato({
  onSalvar,
  visivel,
  setVisivel,
  form,
}) {
  const [formContent, setFormContent] = useState(form || defaultFormContent);

  useEffect(() => {
    setFormContent(form);
  }, [form]);

  function onFechar() {
    setVisivel(false);
    setFormContent(defaultFormContent);
  }
  return (
    <Modal show={visivel} onHide={onFechar}>
      <Modal.Header closeButton>
        <Modal.Title>Contato</Modal.Title>
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
            <Form.Label>Fone</Form.Label>
            <Form.Control
              type="text"
              value={formContent.fone}
              onChange={(e) =>
                setFormContent({ ...formContent, fone: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={formContent.email}
              onChange={(e) =>
                setFormContent({ ...formContent, email: e.target.value })
              }
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onFechar}>
          Fechar
        </Button>
        <Button
          variant="primary"
          onClick={() => onSalvar(formContent) && onFechar()}
        >
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
