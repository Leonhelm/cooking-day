"use client";
import { SyntheticEvent, useCallback, useRef, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useUser } from "./UserContext";

export const Login = () => {
  const emailRef = useRef<null | HTMLInputElement>(null);
  const passwordRef = useRef<null | HTMLInputElement>(null);
  const [isLoading, setLoading] = useState(false);
  const { setUser } = useUser() ?? {};

  const onSubmit = useCallback(
    async (event: SyntheticEvent) => {
      event.preventDefault();
      setLoading(true);

      const auth = getAuth();
      const email = emailRef?.current?.value ?? "";
      const password = passwordRef?.current?.value ?? "";

      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setUser?.(userCredential.user);
        })
        .catch((error) => {
          window.alert(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    },
    [setUser],
  );

  return (
    <form onSubmit={onSubmit}>
      <div>
        <input
          type="email"
          placeholder="Email"
          ref={emailRef}
          disabled={isLoading}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          ref={passwordRef}
          disabled={isLoading}
        />
      </div>
      <div>
        <button type="submit" disabled={isLoading}>
          Sign in
        </button>
      </div>
    </form>
  );
};
