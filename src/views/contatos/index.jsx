import React, { useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, Row } from "react-bootstrap";
import contatosController from "./contatosController";
import ModalDeEdicaoDeContato from "./ModalDeEdicaoDeContato";

export default function Contatos() {
  const [contatos, setContatos] = useState([]);
  const [isModalDeEdicaoVisivel, setIsModalDeEdicaoVisivel] = useState(false);
  const [form, setForm] = useState({});
  useEffect(
    () =>
      (async () => {
        const contatos = await contatosController.getAll();
        setContatos(contatos);
      })(),
    []
  );

  async function salvarContato(contato) {
    try {
      contato._id ? editarContato(contato) : criarContato(contato);
    } catch (error) {
      alert(error.message);
    }
  }

  async function criarContato(contato) {
    const novoContato = await contatosController.createOne(contato);
    setContatos([...contatos, novoContato]);
  }

  async function editarContato(contato) {
    const compromissoAtualizado = await contatosController.updateOneById(
      contato._id,
      contato
    );
    setContatos([
      ...contatos.filter(({ _id }) => _id !== contato._id),
      compromissoAtualizado,
    ]);
  }

  async function onApagar(contato) {
    try {
      await contatosController.deleteOneById(contato._id);
      setContatos(contatos.filter(({ _id }) => contato._id !== _id));
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickEditContato(contato) {
    setForm(contato);
    setIsModalDeEdicaoVisivel(true);
  }

  return (
    <>
      <Button variant="primary" onClick={() => setIsModalDeEdicaoVisivel(true)}>
        Criar novo
      </Button>
      <ListGroup>
        {contatos.map((contato) => (
          <Container key={contato._id}>
            <Row>
              <Col>
                <ListGroup.Item onClick={() => onClickEditContato(contato)}>
                  {contato.nome}
                </ListGroup.Item>
              </Col>
              <Col>
                <Button onClick={() => onApagar(contato)}>Apagar</Button>
              </Col>
            </Row>
          </Container>
        ))}
      </ListGroup>
      <ModalDeEdicaoDeContato
        visivel={isModalDeEdicaoVisivel}
        setVisivel={setIsModalDeEdicaoVisivel}
        onSalvar={salvarContato}
        form={form}
      />
    </>
  );
}
