import { Route, Routes } from "react-router-dom";
import { adminRoutes, authorizedRoutes, guestRoutes } from "./routes";
import { useAppSelector } from "./store";
import { selectCurrentUser } from "../features/user";
import { ErrorPage } from "../pages/error-page";
import { Layout } from "./layout/Layout";


function App() {

  const user = useAppSelector(selectCurrentUser);

  if (user) {
    return (
      <Layout>
        <Routes>
          {user.role === "Admin" ? (
            adminRoutes.map(r => (
              <Route key={r.path} path={r.path} Component={r.component} />
            ))
          ) : (
            authorizedRoutes.map(r => (
              <Route key={r.path} path={r.path} Component={r.component} />
            ))
          )}
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </Layout>
    )
  }

  return (
    <Layout>
      <Routes>
        {guestRoutes.map(r => (
          <Route key={r.path} path={r.path} Component={r.component} />
        ))}
        <Route path="*" Component={ErrorPage} />
      </Routes>
    </Layout>
  )
}

export default App;
