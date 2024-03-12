#### Complete App

[Jobify](https://jobify.live/)

#### Create React APP

[VITE](https://vitejs.dev/guide/)

```sh
npm create vite@latest projectName -- --template react
```

#### Vite - Folder and File Structure

```sh
npm i
```

```sh
npm run dev
```

- APP running on http://localhost:5173/
- .jsx extension

#### Remove Boilerplate

- remove App.css
- remove all code in index.css

  App.jsx

```jsx
const App = () => {
  return <h1>Jobify App</h1>;
};
export default App;
```

#### Project Assets

- get assets folder from complete project
- copy index.css
- copy/move README.md (steps)
  - work independently
  - reference
  - troubleshoot
  - copy

#### Global Styles

- saves times on the setup
- less lines of css
- speeds up the development

- if any questions about specific styles
- Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
- Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)

#### Title and Favicon

- add favicon.ico in public
- change title and favicon in index.html

```html
<head>
  <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
  <title>Jobify</title>
</head>
```

- resource [Generate Favicons](https://favicon.io/)

#### Install Packages (Optional)

- yes, specific package versions
- specific commands will be provided later
- won't need to stop/start server

```sh
npm install @tanstack/react-query@4.29.5 @tanstack/react-query-devtools@4.29.6 axios@1.3.6 dayjs@1.11.7 react-icons@4.8.0 react-router-dom@6.10.0 react-toastify@9.1.2 recharts@2.5.0 styled-components@5.3.10

```

#### Router

[React Router](https://reactrouter.com/en/main)

- version 6.4 brought significant changes (loader and action)
- pages as independent entities
- less need for global state
- more pages

#### Setup Router

- all my examples will include version !!!

```sh
npm i react-router-dom@6.10.0
```

App.jsx

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>home</h1>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
```

#### Create Pages

- create src/pages directory
- setup index.js and following pages :

  AddJob.jsx
  Admin.jsx
  AllJobs.jsx
  DashboardLayout.jsx
  DeleteJob.jsx
  EditJob.jsx
  Error.jsx
  HomeLayout.jsx
  Landing.jsx
  Login.jsx
  Profile.jsx
  Register.jsx
  Stats.jsx

```jsx
const AddJob = () => {
  return <h1>AddJob</h1>;
};
export default AddJob;
```

#### Index

App.jsx

```jsx
import HomeLayout from "../ pages/HomeLayout";
```

pages/index.js

```js
export { default as DashboardLayout } from "./DashboardLayout";
export { default as Landing } from "./Landing";
export { default as HomeLayout } from "./HomeLayout";
export { default as Register } from "./Register";
export { default as Login } from "./Login";
export { default as Error } from "./Error";
export { default as Stats } from "./Stats";
export { default as AllJobs } from "./AllJobs";
export { default as AddJob } from "./AddJob";
export { default as EditJob } from "./EditJob";
export { default as Profile } from "./Profile";
export { default as Admin } from "./Admin";
```

App.jsx

```jsx
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
```

#### Link Component

- navigate around project
- client side routing

Register.jsx

```jsx
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <Link to="/login">Login Page</Link>
    </div>
  );
};
export default Register;
```

Login.jsx

```jsx
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/register">Register Page</Link>
    </div>
  );
};
export default Login;
```

#### Nested Routes

- what about Navbar?
- decide on root (parent route)
- make path relative
- for time being only home layout will be visible

App.jsx

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);
```

HomeLayout.jsx

```jsx
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      {/* add things like Navbar */}
      {/* <h1>home layout</h1> */}
      <Outlet />
    </>
  );
};
export default HomeLayout;
```

#### Index (Home) Page

App.jsx

```jsx
{
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
...
      ]
}
```

#### Error Page

- bubbles up

App.jsx

```jsx
{
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    ...
}
```

Error.jsx

```jsx
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page !!!</h1>
      <Link to="/dashboard">back home</Link>
    </div>
  );
};
export default Error;
```

#### Styled Components

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
