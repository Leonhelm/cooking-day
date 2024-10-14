import styles from "./page.module.css";
import {UserContext, useUser, Auth} from '@/auth'

const Home = () => {
  const {user, isLoadingUser} = useUser() ?? {};

  return <div className={styles.page}>
    <header><Auth /></header>
      <main className={styles.main}>
        {
          isLoadingUser ? <div>Loading...</div> : <h1>Hello, {user?.displayName ?? 'World'}!</h1>
        }
      </main>
    </div>
}

export default function App () {
  return <UserContext>
    <Home />
  </UserContext>
}
