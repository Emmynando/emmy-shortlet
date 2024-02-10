import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <header>
        <Link href="/">Em Autos</Link>
      </header>
      <nav>
        <ul>
          <li>
            <Link href="/login">Log in</Link>
          </li>
          <li>
            <Link href="/signup">Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
