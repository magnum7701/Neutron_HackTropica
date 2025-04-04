import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { ErrorPage } from './ErrorPage.jsx';
import { LoginPage } from './LoginPage.jsx';
import { HomePage } from './HomePage.jsx';
import "../styles/index.scss";
import { DashboardLayout } from './DashBoardLayout.jsx';
import { DashBoardPage } from './DashBoardPage.jsx';
import NotesPage from './NotesPage.jsx';
import AssignMentPage from './AssignMentPage.jsx';
import AccountPage from './AccountPage.jsx';
import SettingsPage from './SettingsPage.jsx';
import { NewNote } from './NewNote.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/newnote",
    element: <NewNote />
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashBoardPage />
      },
      {
        path: "notes",
        element: <NotesPage />
      },
      {
        path: "assignments",
        element: <AssignMentPage />
      },
      {
        path: "accounts",
        element: <AccountPage />
      },
      {
        path: "settings",
        element: <SettingsPage />
      },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
