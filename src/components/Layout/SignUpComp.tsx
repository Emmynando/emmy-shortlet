"use client";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
import { useState, FormEvent } from "react";
import { signUp } from "next-auth-sanity/client";
import axios from "axios";
import styles from "./SignUpComp.module.css";

const defaultFormData = {
  email: "",
  username: "",
  password: "",
};

export default function SignUpComponent() {
  const router = useRouter();
  const [userDeet, setUserDeet] = useState(defaultFormData);
  const [checkPassword, setCheckPassword] = useState("");

  function HandleChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserDeet({ ...userDeet, [name]: value });
  }

  async function submitFormHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { email, username, password } = userDeet;
    // checks if both password matches
    if (password.trim().toLowerCase() !== checkPassword.trim().toLowerCase()) {
      console.log("password do not match");
      return;
    }
    // checks for empty field
    if (!username || !email || !password || !checkPassword) {
      return;
    }
    try {
      userDeet?.username.toLowerCase();
      const response = await signUp(userDeet);
      if (response) router.push("/auth");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={styles.body}>
      <Head>
        <link rel="preload" href="SignUpComp.module.css" as="style" />
      </Head>
      <section className={styles.container}>
        <h3>SIGN UP</h3>
        <form onSubmit={submitFormHandler} className={styles.form}>
          <input
            autoComplete="false"
            type="text"
            placeholder="username"
            name="username"
            value={userDeet.username}
            onChange={HandleChangeHandler}
            required
          />
          <input
            type="email"
            placeholder="example.com"
            name="email"
            value={userDeet.email}
            onChange={HandleChangeHandler}
            required
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={userDeet.password}
            onChange={HandleChangeHandler}
            required
          />
          <input
            type="password"
            placeholder="confirm password"
            name="checkPassword"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </div>
  );
}
