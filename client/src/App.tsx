import { Suspense, lazy } from "react";
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { routes } from "./routes/routes";
import SuspenseLoader from "./components/common/SuspenseLoader";
import DataProvider from "./context/DataProvider";

const ErrorComponent = lazy(() => import('./components/common/ErrorComponent'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path={routes.main.path} element={<Navigate to={`${routes.emails.path} / inbox`} />} />
      <Route path={routes.main.path} element={<routes.main.element />} >

      </Route>
    </Route>
  )
)

function App() {
  return (
    <Suspense fallback={<SuspenseLoader />}>
      <DataProvider>
        <RouterProvider router={router} />
      </DataProvider>
    </Suspense>
  );
}

export default App;
