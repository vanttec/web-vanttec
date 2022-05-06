import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

//Navbar
import Navbar from "../components/Public/Navbar/Navbar";

import "./LayoutPublic.scss";

export default function LayoutPublic(props) {
  const { routes } = props; //Sistema de rutas que me llega por props

  return (
    <>
      <Navbar />
        <Container>
          <LoadRoutes routes={routes} />
        </Container>
      <h1>Footer</h1>
    </>
  );
}

function LoadRoutes({ routes }) {
  //Carga las rutas
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
    </Switch>
  );
}
