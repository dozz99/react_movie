import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const PUBLIC_HOME = `${process.env.PUBLIC_URL}`;

function App() {
  const router = createBrowserRouter([
    {
      path: `${PUBLIC_HOME}/`,
      element: <Home />,
    },
    {
      path: `${PUBLIC_HOME}/movies/:id`,
      element: <Detail />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
