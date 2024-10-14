import { useCallback, useRef } from "react"

export const Login = () => {
  const emailRef= useRef(null);
  const passwordRef= useRef(null);

  const onClick = useCallback(async () => {

  }, [])

  return <>
    <div><input type="text" placeholder="Email" ref={emailRef} /></div>
    <div><input type="password" placeholder="Password" ref={passwordRef} /></div>
    <div><button type="button" onClick={onClick}>Sign in</button></div>
  </>
}