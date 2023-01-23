import PageNotFound from "../../pages/404";
import Register from "../../pages/register";
import Login from "../../pages/login";
import Movie from "../../pages/movie";

const ROUTE_OBJECT = [{ element: <Movie />, path: "/movie" }];

const LOGIN_ROUTE_OBJECT = [
  { element: <Login />, path: "/auth/login" },
  { element: <Register />, path: "/auth/register" },
  { element: <PageNotFound />, path: "/*" },
];

const COMPONENT_ROUTE_OBJECT = [{ element: <PageNotFound />, path: "/*" }];

export { ROUTE_OBJECT, LOGIN_ROUTE_OBJECT, COMPONENT_ROUTE_OBJECT };
