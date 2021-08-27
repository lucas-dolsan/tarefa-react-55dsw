import React, { useEffect, useState } from "react";
import { Button, Container, ListGroup, Row } from "react-bootstrap";
import ItemList from "../../components/ItemList";
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

  function onEditar(compromisso) {
    setForm(compromisso);
    setIsModalDeEdicaoVisivel(true);
  }

  return (
    <Container>
      <Button
        variant="primary"
        className="mt-2 mb-2"
        onClick={() => setIsModalDeEdicaoVisivel(true)}
      >
        Criar novo
      </Button>
      <Row>
        <ItemList
          items={compromissos}
          onDelete={onApagar}
          onEdit={onEditar}
          renderItem={({ nome }) => <ListGroup.Item>{nome}</ListGroup.Item>}
          key="_id"
        />
      </Row>
      <ModalDeEdicaoDeCompromisso
        visivel={isModalDeEdicaoVisivel}
        setVisivel={setIsModalDeEdicaoVisivel}
        onSalvar={salvarCompromisso}
        form={form}
      />
    </Container>
  );
}
