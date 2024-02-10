import { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Car } from "@/models/car";
import styles from "./CarCard.module.css";

type Props = {
  car: Car;
};

const RoomCard: FC<Props> = (props) => {
  const {
    car: { _id, carModel, year, price, image, isBooked },
  } = props;

  return (
    <div className={styles.container}>
      <Head>
        <link rel="preload" href="CarCard.module.css" as="style" />
      </Head>
      <div className={styles.image}>
        <Image src={image[0].url} alt={"car"} width={250} height={250} />
      </div>
      <div className={styles.text}>
        <h5>{carModel}</h5>
        <h4> N{price} per day</h4>
        <button disabled={isBooked}>
          {" "}
          <Link href={`/cars/${_id}`}>{isBooked ? "BOOKED" : "BOOK NOW"}</Link>
        </button>
      </div>
    </div>
  );
};
export default RoomCard;
