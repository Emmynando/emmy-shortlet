"use client";
import Head from "next/head";
import useSWR from "swr";
import { getCar } from "@/libs/apis";
import BookCarCta from "@/components/Layout/BookCarCta";
import SelectedCarPix from "@/components/Layout/SelectedCarPix";
import { useState } from "react";
import styles from "@/components/Layout/SelectedCarPix.module.css";

const CarDetails = (props: { params: { _id: string } }) => {
  const {
    params: { _id },
  } = props;
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endBookingDate, setEndBookingDate] = useState<Date | null>(null);

  async function getCarData() {
    return getCar(_id);
  }

  const { data, error, isLoading } = useSWR("/api/car", getCarData);
  if (error) throw new Error("Error fetching Data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch Data");

  //calculating number of days
  const calcNoOfDays = () => {
    if (!startDate || !endBookingDate) return 0;
    const timeDiff = endBookingDate.getTime() - startDate.getTime();
    const noOfDays = Math.ceil(timeDiff / (24 * 60 * 60 * 1000));
    return noOfDays;
  };

  // getting minimum end date
  function getMinEndDate() {
    if (startDate) {
      const endDate = new Date(startDate);
      endDate.setDate(endDate.getDate() + 1);
      return endDate;
    }
    return null;
  }
  const days = calcNoOfDays();

  function bookingDeetsHandler() {
    console.log(typeof data[0]?.price);
  }

  if (!data) return <h2> Loading</h2>;
  return (
    <section className={styles["parent-container"]}>
      <Head>
        <link rel="preload" href="SelectedCarPix.module.css" as="style" />
      </Head>
      <h3>Car Details</h3>
      <SelectedCarPix photos={data![0]?.image} />
      // car details section
      <div className={styles["car-details"]}>
        <h2>{data![0]?.carModel}</h2>
        <p>
          <span> N{data![0]?.price}</span> per day
        </p>
      </div>
      {/* booking details section */}
      <div>
        <BookCarCta
          startDate={startDate}
          setStartDate={setStartDate}
          endBookingDate={endBookingDate}
          setEndBookingDate={setEndBookingDate}
          minEndBookingDate={getMinEndDate}
        />

        {calcNoOfDays() > 0 ? (
          <p>Total Price: N{+days * data[0]?.price}</p>
        ) : (
          <></>
        )}

        <button disabled={data?.isBooked} onClick={bookingDeetsHandler}>
          {" "}
          {!data![0]?.isBooked ? "BOOK NOW" : "BOOKED"}
        </button>
      </div>
    </section>
  );
};

export default CarDetails;
