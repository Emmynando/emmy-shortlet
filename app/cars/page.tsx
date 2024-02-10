"use client";
import Head from "next/head";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Car } from "@/models/car";
import useSWR from "swr";
import { getCars } from "@/libs/apis";
import SearchComp from "@/components/Layout/SearchComp";
import RoomCard from "@/components/Fragments/CarCard";
import styles from "@/components/Layout/CarPage.module.css";

export default function Cars() {
  const [carType, setCarType] = useState("");
  const [yearQuery, setYearQuery] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    // getting searched query using search params
    const searchedCarType = searchParams.get("carType");
    const searchedQuery = searchParams.get("yearQuery");

    // storing searched value
    setCarType(searchedCarType || "");
    setYearQuery(searchedQuery || "");
  }, [searchParams]);

  async function getCarsData() {
    return getCars();
  }

  const { data, error, isLoading } = useSWR("get/cars", getCarsData);
  if (error) throw new Error("Error fetching Data");
  if (typeof data === "undefined" && !isLoading)
    throw new Error("Cannot fetch Data");

  const filterCars = (cars: Car[]) => {
    return cars.filter((car) => {
      // Apply room type filter
      const carName = car.carModel.split(" ");

      if (
        carType &&
        carType.toLowerCase() !== "all" &&
        carName[0].toLowerCase() !== carType.toLowerCase()
      ) {
        return false;
      }

      // Apply search query filter
      if (yearQuery && car.year !== Number(yearQuery.trim())) {
        return false;
      }

      return true;
    });
  };

  const filteredCars = filterCars(data || []);

  return (
    <div className={styles.container}>
      <Head>
        <link rel="preload" href="CarPage.module.css" as="style" />
      </Head>
      <SearchComp
        carTypeFilter={carType}
        searchYearQuery={yearQuery}
        setCarTypeFilter={setCarType}
        setSearchYearQuery={setYearQuery}
      />
      <div>
        <h3> All Models for {carType.toUpperCase()}</h3>
        <div className={styles["car-box"]}>
          {filteredCars.map((car) => (
            <RoomCard key={car._id} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}
