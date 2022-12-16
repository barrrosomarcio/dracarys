import {  useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DracarysContext } from './context/dracarys-context';
import { Login, Listing } from './screens';


function App() {
  const { loggedIn } = useContext(DracarysContext)

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: '/listing',
      element: loggedIn ? <Listing /> : <Login />
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
