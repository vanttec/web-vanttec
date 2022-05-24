import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./config/routes";

import "./App.scss";

function App() {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Router>
  );
}

function RouteWithSubRoutes(route) {
  //Con esta función nos renderisa la routa en la que estemos, en lugar de tener una gran lista de rutas
  //Con que la ruta exista en config, todo esta bien
  //La función solo pide que nos renderice las rutas de la configuración

  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: `
          <df-messenger
            intent="WELCOME"
            chat-title="VantTec"
            agent-id="8b9c7f93-2e5f-425d-a4bb-c3496f054d88"
            language-code="en"
          ></df-messenger>
`,
        }}
      />
      <Route
        path={route.path}
        exact={route.exact}
        render={(props) => <route.component routes={route.routes} {...props} />}
      />
    </>
  );
}

export default App;
