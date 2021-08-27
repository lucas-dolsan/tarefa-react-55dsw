import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import usuariosController from "./usuariosController";

export default function PickerDeUsuario(props) {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    (async () => {
      const usuarios = await usuariosController.getAll();
      setUsuarios(usuarios);
    })();
  }, []);

  if (!usuarios.length) return null;

  return (
    <Form.Select {...props}>
      <option>Selecione um usuário...</option>
      {usuarios.map((usuario) => {
        return (
          <option key={usuario._id} value={usuario._id}>
            {usuario.nome}
          </option>
        );
      })}
    </Form.Select>
  );
}
