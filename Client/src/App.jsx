import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  LandingPage,
  RegisterPage,
  LoginPage,
  ErrorPage,
  DashboardLayout,
  Membership,
  AdminPage,
} from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'Register',
        element: <RegisterPage />,
      },
      {
        path: 'Login',
        element: <LoginPage />,
      },
      {
        path: 'Dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <Membership />,
          },
          {
            path: 'Admin',
            element: <AdminPage />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
