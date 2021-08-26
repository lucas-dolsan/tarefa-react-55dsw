import React, { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import ModalDeEdicaoDeUsuario from "./ModalDeEdicaoDeUsuario";
import usuariosController from "./usuariosController";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [isModalDeEdicaoVisivel, setIsModalDeEdicaoVisivel] = useState(false);
  const [form, setForm] = useState({});

  useEffect(() =>
    (async () => {
      const usuarios = await usuariosController.getAll();
      setUsuarios(usuarios);
    })()
  );

  async function editarUsuario(usuario) {
    try {
      const response = usuario._id
        ? await usuariosController.updateOneById(usuario._id, usuario)
        : await usuariosController.createOne(usuario);

      console.log(response);
    } catch (error) {
      alert(error.message);
    }
  }

  function onClickEditUsuario(usuario) {
    setForm(usuario);
    setIsModalDeEdicaoVisivel(true);
  }

  return (
    <>
      <Button variant="primary" onClick={() => setIsModalDeEdicaoVisivel(true)}>
        Criar novo
      </Button>
      <ListGroup>
        {usuarios.map((usuario) => (
          <ListGroup.Item onClick={() => onClickEditUsuario(usuario)}>
            {usuario.nome}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ModalDeEdicaoDeUsuario
        visivel={isModalDeEdicaoVisivel}
        setVisivel={setIsModalDeEdicaoVisivel}
        onSalvar={editarUsuario}
        form={form}
      />
    </>
  );
}
