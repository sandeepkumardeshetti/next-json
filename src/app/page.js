import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default async function Home() {
  const fetchData = await fetch("https://jsonplaceholder.typicode.com/users")
  const res = await fetchData.json()

  return (
    <main className={styles.main}>
      <h1>Generate ststic params</h1>
      <div>
        {
          res.map((user) => {
            return (
              <div key={user.id}>
                <Link href={`${user.id}`}>{user.name}</Link>
                <h2></h2>
               
              </div>
            );
          })
        }
      </div>
    </main>
  );
}
