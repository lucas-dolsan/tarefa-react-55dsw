import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Spinner } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./views/auth/Login";
import Compromissos from "./views/compromissos";
import Contatos from "./views/contatos";
import Usuarios from "./views/usuarios";
import authController from "./views/auth/authController";

export default function AppRouter() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await authController.validateAccessToken();
      setIsAuthenticated(response);
      setIsLoading(false);
    })();
  });

  if (isLoading)
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Spinner animation="border" />;
      </div>
    );

  if (!isAuthenticated) return <Login />;

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
        <Route path="/login">
          <Login />
        </Route>
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
