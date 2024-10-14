import { Login } from "./Login";
import { Logout } from "./Logout";
import { useUser } from "./UserContext";


export const Auth = () => {
  const {user} = useUser() ?? {};

  return user ? <Logout /> : <Login />
}