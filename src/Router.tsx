import { createBrowserRouter } from "react-router-dom";
import ShowCreators from "./pages/ShowCreators";
import AddCreator from "./pages/AddCreator";
import ViewCreator from "./pages/ViewCreator";
import EditCreator from "./pages/EditCreator";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/creators",
    element: <ShowCreators />,
  },
  { path: "/add", element: <AddCreator /> },
  {
    path: "/creators/:id",
    element: <ViewCreator />,
  },
  {
    path: "/creators/:id/edit",
    element: <EditCreator />,
  },
]);

export default router;
