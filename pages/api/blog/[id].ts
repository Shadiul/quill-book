import { faker } from "@faker-js/faker";
import { NextApiRequest, NextApiResponse } from "next";
import Blog from "../../../interfaces/blog";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  if (method === "GET") {
    const blog: Blog = {
      id: faker.database.mongodbObjectId(),
      date: faker.date.recent(),
      title: faker.lorem.sentence(),
      cover: faker.image.abstract(480, 480, true),
      description: content,
    };
    setTimeout(() => {
      return res.status(200).json({ message: "Success", blog: blog });
    }, 2000);
  } else {
    return res.status(400).json({ message: "Not Found" });
  }
}

const content = `
# Role based employees profile management system



This project is mainly based on the role based permission of different routes.

We have 4 different types of users:

- Admin

- System Manager

- Business Manager

- Employees



Libraries used:

- React with typescript

- React router dom

- Context API and react hooks

- Nodemailer

- React form hooks and yup resolver

- Tailwind css and MUI



Admin is the top of the pyramid which has a downline of System managers. Each system manager is registered with its admin id/username. The same structure follows for business managers and employees except employess is the lowest element of the pyramid so it wont have any downline.


To prevent access form using non allowed routes we used conditional role based routes using  **react-router-dom** and **context api** .



Route Objects:

\`\`\`tsx {3-4, 8}
export const UNPROTECTED_ROUTES: RouteObject[] = [
  { path: "/", element: <RoleSelectionPage /> },
  { path: PATHS_ADMIN.login, element: <AdminLoginPage /> },
  { path: PATHS_SYSTEM_MANAGER.login, element: <SystemManagerLoginPage /> },
  {
    path: PATHS_SYSTEM_MANAGER.createAccount,
    element: <SystemManagerCreateAccountPage />,
  },
  { path: "*", element: <div>Not Found</div> },
];

export const PROTECTED_ROUTES_ADMIN: RouteObject[] = [
  {
    path: "/admin",
    children: [
      { path: PATHS_ADMIN.login, element: <AdminLoginPage /> },
      { path: PATHS_ADMIN.dashboard, element: <AdminDashboardPage /> },
      {
        path: PATHS_ADMIN.systemManagerInvitation,
        element: <SystemManagerInvitationPage />,
      },
      { path: "*", element: <div>Not Found</div> },
    ],
  },
];

export const PROTECTED_ROUTES_SYSTEM_MANAGER: RouteObject[] = [
  {
    path: "/system-manager",
    children: [
      {
        path: PATHS_SYSTEM_MANAGER.createAccount,
        element: <SystemManagerCreateAccountPage />,
      },
      { path: PATHS_SYSTEM_MANAGER.login, element: <SystemManagerLoginPage /> },
      {
        path: PATHS_SYSTEM_MANAGER.dashboard,
        element: <SystemManagerDashboardPage />,
      },
    ],
  },
];
\`\`\`

~~~tsx
function App() {
  const auth = useAuth();

  let routes;

  if (auth.isLoggedIn) {
    switch (auth.role) {
      case "admin":
        routes = PROTECTED_ROUTES_ADMIN;
        break;
      case "system_manager":
        routes = PROTECTED_ROUTES_SYSTEM_MANAGER;
        break;
      default:
        routes = UNPROTECTED_ROUTES;
        break;
    }
  } else {
    routes = UNPROTECTED_ROUTES;
  }

  const renderRoutes = useRoutes(routes);
  return <>{renderRoutes}</>;
}
~~~

This will prevent user from accessing routes of different roles.



For data visualization we can use the current role from the auth context then limit the user on viewing the data out of their role.





#### Proposals for betterment

- Admin should not have access to data that can be read and write by system manager. Admin's role should be limited to send invitaions of system managers and controlling the system managers permission and access. 

`;
