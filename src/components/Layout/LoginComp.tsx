"use client";
import { useRef } from "react";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import styles from "./LoginComp.module.css";

export default function LoginComp() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  async function loginSubmitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const username = usernameRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    try {
      const response = await signIn("credentials", { username, password });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.body}>
      <Head>
        <link rel="preload" href="LoginComp.module.css" as="style" />
      </Head>
      <section className={styles.container}>
        <h3>Login to Em Shortlet</h3>
        <form onSubmit={loginSubmitHandler} className={styles.form}>
          <input type="text" ref={usernameRef} placeholder="username" />

          <input type="password" ref={passwordRef} placeholder="password" />
          <button type="submit">Login</button>
        </form>
        <div className={styles.signup}>
          New User? <Link href="/signup">Sign Up</Link>
        </div>
      </section>
    </div>
  );
}
