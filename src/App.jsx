import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Compromissos from "./views/compromissos";
import Contatos from "./views/contatos";
import Usuarios from "./views/usuarios";

export default function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="compromissos">Nice</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="compromissos">Compromissos</Nav.Link>
            <Nav.Link href="contatos">Contatos</Nav.Link>
            <Nav.Link href="usuarios">Usuarios</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/compromissos">
          <Compromissos />
        </Route>
        <Route path="/contatos">
          <Contatos />
        </Route>
        <Route path="/usuarios">
          <Usuarios />
        </Route>
      </Switch>
    </Router>
  );
}
