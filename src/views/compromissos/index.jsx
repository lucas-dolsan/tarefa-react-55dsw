import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import compromissosController from "./compromissosController";
import ModalDeEdicaoDeCompromisso from "./ModalDeEdicaoDeCompromisso";

export default function Compromissos() {
  const [compromissos, setCompromissos] = useState([]);
  const [isModalDeEdicaoVisivel, setIsModalDeEdicaoVisivel] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() =>
    (async () => {
      const compromissos = await compromissosController.getAll();
      setCompromissos(compromissos);
    })()
  );

  async function editarCompromisso(compromisso) {
    try {
      const response = compromisso._id
        ? await compromissosController.updateOneById(
            compromisso._id,
            compromisso
          )
        : await compromissosController.createOne(compromisso);

      console.log(response);
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
          <ListGroup.Item onClick={() => onClickEditCompromisso(compromisso)}>
            {compromisso.nome}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ModalDeEdicaoDeCompromisso
        visivel={isModalDeEdicaoVisivel}
        setVisivel={setIsModalDeEdicaoVisivel}
        onSalvar={editarCompromisso}
        form={form}
      />
    </>
  );
}
