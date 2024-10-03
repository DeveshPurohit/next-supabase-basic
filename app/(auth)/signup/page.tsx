"use client"

import Link from "next/link";
import { signup } from "../actions";

export default function SignupPage() {
  
  async function clickHandler(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    e
  ) {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const pass = formdata.get('password') as string;
    if(pass.length < 6){
      alert("Mininmum password length should be greater than 5!")
    }
    try {
      await signup(formdata)
    } catch (error) {
      console.log(error)
    }
    alert("Verify your email address!")
  }
  
  return (
    <form onSubmit={clickHandler} className="h-screen flex flex-col space-y-4 justify-center items-center ">
      <h1 className="text-3xl font-semibold text-slate-900 ">Welcome! Create an account</h1>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input type="email" name="email" className="grow" placeholder="Email" />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="h-4 w-4 opacity-70"
        >
          <path
            fillRule="evenodd"
            d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          type="password"
          name="password"
          className="grow"
        />
      </label>
      <button type="submit" className="btn">
        Sign Up
      </button>
      <p className="text-slate-700">Already a user, <Link className="font-semibold underline" href={'/login'}>Login</Link></p>
    </form>
  );
}
