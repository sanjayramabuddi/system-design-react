import React from "react";
import UserAdd from "../pages/User/UserAdd";
import UserDelete from "../pages/User/UserDelete";
// import UserList from "../pages/User/UserList";
const ProductList = React.lazy(() => import("../components/Products"));

const UserRoutes = [
  {
    path: "user-add",
    element: <UserAdd />,
  },
  {
    path: "user-update",
    element: <UserDelete />,
  },
  {
    path: "user-list",
    element: <ProductList />,
  },
  // {
  //   path: "user-list",
  //   element: <UserList />,
  // },
];

export default UserRoutes;
