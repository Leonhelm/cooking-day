"use client";
import { useCallback, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useUser } from "./UserContext";

export const Logout = () => {
  const { setUser } = useUser() ?? {};
  const [isLoading, setLoading] = useState(false);

  const onClick = useCallback(() => {
    const auth = getAuth();

    setLoading(true);

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser?.(null);
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setUser]);

  return (
    <button type="button" onClick={onClick} disabled={isLoading}>
      Get out
    </button>
  );
};
