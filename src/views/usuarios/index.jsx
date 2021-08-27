import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import ItemList from "../../components/ItemList";
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
    <ItemList
      items={usuarios}
      renderItem={({ nome }) => <ListGroup.Item>{nome}</ListGroup.Item>}
      key="_id"
      disableActions={true}
    />
  );
}
