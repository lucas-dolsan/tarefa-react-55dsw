import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import authController from "./authController";
import ModalDeRegistro from "./ModalDeRegistro";

const defaultFormContent = {
  username: "",
  senha: "",
};

export default function Login() {
  const [formContent, setFormContent] = useState(defaultFormContent);
  const [modalDeRegistroVisivel, setModalDeRegistroVisivel] = useState(false);

  function onRegistrar() {
    setModalDeRegistroVisivel(true);
  }

  async function onConfirmarRegistro(usuarioNovo) {
    try {
      await authController.register(usuarioNovo);
      setModalDeRegistroVisivel(false);
      window.location = "/usuarios";
    } catch (error) {
      alert(error.message);
    }
  }

  async function onEntrar() {
    try {
      await authController.login(formContent);
      window.location = "/usuarios";
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <Form>
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
      <Container>
        <Row>
          <Col>
            <Button onClick={onRegistrar}>Registrar</Button>
          </Col>
          <Col>
            <Button onClick={onEntrar}>Entrar</Button>
          </Col>
        </Row>
      </Container>
      <ModalDeRegistro
        onConfirmar={onConfirmarRegistro}
        setVisivel={setModalDeRegistroVisivel}
        visivel={modalDeRegistroVisivel}
      />
    </>
  );
}
