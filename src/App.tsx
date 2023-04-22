import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import ImprintPage from "./pages/Imprint";
import PrivacyPage from "./pages/Privacy";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'imprint', element: <ImprintPage />},
      {path: 'privacy', element: <PrivacyPage />},
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
