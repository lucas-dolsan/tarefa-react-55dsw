import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import contatosController from "./contatosController";

export default function PickerDeContato(props) {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    (async () => {
      const contatos = await contatosController.getAll();
      setContatos(contatos);
    })();
  }, []);

  if (!contatos.length) return null;

  return (
    <Form.Select {...props}>
      <option>Selecione um contato...</option>
      {contatos.map((contato) => {
        return (
          <option key={contato._id} value={contato._id}>
            {contato.nome}
          </option>
        );
      })}
    </Form.Select>
  );
}
