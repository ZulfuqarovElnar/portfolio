import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
]);

export default Routes;
