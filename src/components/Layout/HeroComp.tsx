import Image from "next/image";
import Head from "next/head";
import car1 from "../../../public/images/shortlet_images/benz-2.jpg";
import car2 from "../../../public/images/shortlet_images/audi-1.jpg";

import styles from "./HeroComp.module.css";
export default function HeroComp() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preload" href="HeroComp.module.css" as="style" />
      </Head>
      <section>
        <div>
          <h1>
            Ride Exotic Cars
            <br /> of Your Choice
          </h1>
          <p>
            {" "}
            With Em Autos, you get to announce your presence in an exotic car
            for as long as you want....
          </p>
          <button>Book Car</button>
        </div>
      </section>
      <section>
        <div className={styles["image-box"]}>
          <div className={styles["image-item"]}>
            <Image
              src={car1}
              width={220}
              height={230}
              alt="apartment"
              className={styles.image}
            />
          </div>
          <div className={styles["image-item"]}>
            <Image
              src={car2}
              width={220}
              height={230}
              alt="apartment"
              className={styles.image}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
