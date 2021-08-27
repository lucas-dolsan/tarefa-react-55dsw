import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const defaultFormContent = {
  nome: "",
  descricao: "",
  local: "",
  data: "",
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
        <Modal.Title>Compromisso</Modal.Title>
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
            <Form.Label>Descrição</Form.Label>
            <Form.Control
              type="textarea"
              value={formContent.descricao}
              onChange={(e) =>
                setFormContent({ ...formContent, descricao: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Local</Form.Label>
            <Form.Control
              type="text"
              value={formContent.local}
              onChange={(e) =>
                setFormContent({ ...formContent, local: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data</Form.Label>
            <Form.Control
              type="text"
              value={formContent.data}
              onChange={(e) =>
                setFormContent({ ...formContent, data: e.target.value })
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
