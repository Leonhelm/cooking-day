"use client";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";
import { createFirebaseApp } from "@/shared/firebase/clientApp";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";

export const UserReactContext = createContext<{
  isLoadingUser: boolean;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
} | null>(null);

export const UserContext = (props: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    const app = createFirebaseApp();
    const auth = getAuth(app);
    const unsubscriber = onAuthStateChanged(auth, async (user) => {
      try {
        setUser(user ?? null);
      } catch {
      } finally {
        setLoadingUser(false);
      }
    });

    return () => unsubscriber();
  }, []);

  return (
    <UserReactContext.Provider value={{ user, setUser, isLoadingUser }}>
      {props.children}
    </UserReactContext.Provider>
  );
};

export const useUser = () => useContext(UserReactContext);
