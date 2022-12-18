import {  useContext } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DracarysContext } from './context/dracarys-context';
import { Login, Listing, Details, NewDragon, EditDragon } from './screens';


function App() {
  const { loggedIn } = useContext(DracarysContext)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/listing',
      element: loggedIn ? <Listing /> : <Login />
    },
    {
      path: '/dragon/:id',
      element: loggedIn ? <Details /> : <Login />
    },
    {
      path:'/new',
      element: loggedIn ? <NewDragon /> : <Login />
    },
    {
      path:'/edit/:id',
      element: loggedIn ? <EditDragon /> : <Login />
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
