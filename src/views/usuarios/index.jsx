import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import usuariosController from "./usuariosController";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(
    () =>
      (async () => {
        const usuarios = await usuariosController.getAll();
        setUsuarios(usuarios);
      })(),
    []
  );

  return (
    <ListGroup>
      {usuarios.map((usuario) => (
        <ListGroup.Item>{usuario.nome}</ListGroup.Item>
      ))}
    </ListGroup>
  );
}
