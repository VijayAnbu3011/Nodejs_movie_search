import { useRoutes } from "react-router-dom";
import CONSTANTS from "../constants";

const RouterComponent = () => {
  const routeObj = CONSTANTS.ROUTE_OBJECT;
  const routes = useRoutes([...routeObj]);
  return routes;
};

const LoginComponent = () => {
  const routeObj = CONSTANTS.LOGIN_ROUTE_OBJECT;
  const routes = useRoutes([...routeObj]);
  return routes;
};

const Component = () => {
  const routeObj = CONSTANTS.COMPONENT_ROUTE_OBJECT;
  const routes = useRoutes([...routeObj]);
  return routes;
};

export { Component, LoginComponent, RouterComponent };
