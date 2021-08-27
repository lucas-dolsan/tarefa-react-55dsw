import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import contatosController from "./contatosController";
import ModalDeEdicaoDeContato from "./ModalDeEdicaoDeContato";

export default function Contatos() {
  const [contatos, setContatos] = useState([]);
  const [isModalDeEdicaoVisivel, setIsModalDeEdicaoVisivel] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() =>
    (async () => {
      const contatos = await contatosController.getAll();
      setContatos(contatos);
    })()
  );

  async function editarContato(contato) {
    try {
      const response = contato._id
        ? await contatosController.updateOneById(contato._id, contato)
        : await contatosController.createOne(contato);

      console.log(response);
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
          <ListGroup.Item onClick={() => onClickEditContato(contato)}>
            {contato.nome}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ModalDeEdicaoDeContato
        visivel={isModalDeEdicaoVisivel}
        setVisivel={setIsModalDeEdicaoVisivel}
        onSalvar={editarContato}
        form={form}
      />
    </>
  );
}
