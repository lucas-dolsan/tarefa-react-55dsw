import React, { useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import compromissosController from "./compromissosController";
import ModalDeEdicaoDeCompromisso from "./ModalDeEdicaoDeCompromisso";

export default function Compromissos() {
  let [compromissos, setCompromissos] = useState([]);
  const [isModalDeEdicaoVisivel, setIsModalDeEdicaoVisivel] = useState(false);
  const [form, setForm] = useState({});

  useEffect(
    () =>
      (async () => {
        const compromissos = await compromissosController.getAll();
        setCompromissos(compromissos);
      })(),
    []
  );

  async function salvarCompromisso(compromisso) {
    try {
      compromisso._id
        ? editarCompromisso(compromisso)
        : criarCompromisso(compromisso);
    } catch (error) {
      alert(error.message);
    }
  }

  async function criarCompromisso(compromisso) {
    const novoCompromisso = await compromissosController.createOne(compromisso);
    setCompromissos([...compromissos, novoCompromisso]);
  }

  async function editarCompromisso(compromisso) {
    const compromissoAtualizado = await compromissosController.updateOneById(
      compromisso._id,
      compromisso
    );
    setCompromissos([
      ...compromissos.filter(({ _id }) => _id !== compromisso._id),
      compromissoAtualizado,
    ]);
  }

  async function onApagar(compromisso) {
    try {
      await compromissosController.deleteOneById(compromisso._id);
      setCompromissos(
        compromissos.filter(({ _id }) => compromisso._id !== _id)
      );
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickEditCompromisso(compromisso) {
    setForm(compromisso);
    setIsModalDeEdicaoVisivel(true);
  }

  return (
    <>
      <Button variant="primary" onClick={() => setIsModalDeEdicaoVisivel(true)}>
        Criar novo
      </Button>
      <ListGroup>
        {compromissos.map((compromisso) => (
          <Container key={compromisso._id}>
            <Row>
              <Col>
                <ListGroup.Item
                  onClick={() => onClickEditCompromisso(compromisso)}
                >
                  {compromisso.nome}
                </ListGroup.Item>
              </Col>
              <Col>
                <Button onClick={() => onApagar(compromisso)}>Apagar</Button>
              </Col>
            </Row>
          </Container>
        ))}
      </ListGroup>
      <ModalDeEdicaoDeCompromisso
        visivel={isModalDeEdicaoVisivel}
        setVisivel={setIsModalDeEdicaoVisivel}
        onSalvar={salvarCompromisso}
        form={form}
      />
    </>
  );
}
