import './App.css';
import Layout from './Views/Layout.jsx';
import Home from './Views/Home.jsx';
import ErrorNotFound from './Views/ErrorNotFound.jsx';
import Users from './Views/Users.jsx';
import Posts from './Views/Posts.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const routerDom = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorNotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/users',
        element: <Users />,
      },
      {
        path: '/posts',
        element: <Posts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routerDom} />;
}

export default App;
