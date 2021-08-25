import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import usuariosController from "./usuariosController";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() =>
    (async () => {
      const usuarios = await usuariosController.getAll();
      setUsuarios(usuarios);
    })()
  );

  return (
    <>
      {usuarios.map((usuario) => {
        return (
          <Card>
            nome: {usuario.nome}
            <br />
            username: {usuario.username}
            <br />
            accessToken: {usuario.auth.accessToken}
            <br />
          </Card>
        );
      })}
    </>
  );
}
