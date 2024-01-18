import { Route, Routes } from "react-router-dom";
import { adminRoutes, authorizedRoutes, guestRoutes } from "./routes";
import { useAppSelector } from "./store/hooks";
import { selectCurrentUser } from "./store/slices/auth/authSlice";
import { ErrorPage } from "./pages/error-page";

function App() {

  const user = useAppSelector(selectCurrentUser);

  if (user) {
    return (
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
    )
  }

  return (
    <Routes>
      {guestRoutes.map(r => (
        <Route key={r.path} path={r.path} Component={r.component} />
      ))}
      <Route path="*" Component={ErrorPage} />
    </Routes>
  )
}

export default App;
