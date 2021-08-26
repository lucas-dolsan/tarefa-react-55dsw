import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const defaultFormContent = {
  nome: "",
  login: "",
  senha: "",
};

export default function ModalDeEdicaoDeUsuario({
  onSalvar,
  visivel,
  setVisivel,
  form,
}) {
  const [formContent, setFormContent] = useState(form || defaultFormContent);

  function onFechar() {
    setVisivel(false);
    setFormContent(defaultFormContent);
  }
  return (
    <Modal show={visivel} onHide={onFechar}>
      <Modal.Header closeButton>
        <Modal.Title>Usuário</Modal.Title>
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
            <Form.Label>login</Form.Label>
            <Form.Control
              type="text"
              value={formContent.login}
              onChange={(e) =>
                setFormContent({ ...formContent, login: e.target.value })
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
        <Button variant="primary" onClick={() => onSalvar(formContent)}>
          Salvar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
