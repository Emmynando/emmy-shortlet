"use client";

import Head from "next/head";
import { useRouter } from "next/navigation";
import { ChangeEvent, FC } from "react";

import styles from "../Layout/SearchComp.module.css";

type Props = {
  carTypeFilter: string;
  searchYearQuery: string;
  setCarTypeFilter: (value: string) => void;
  setSearchYearQuery: (value: string) => void;
};
const SearchFrag: FC<Props> = ({
  carTypeFilter,
  searchYearQuery,
  setCarTypeFilter,
  setSearchYearQuery,
}) => {
  const router = useRouter();

  const handleCarTypeChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setCarTypeFilter(event.target.value);
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchYearQuery(event.target.value);
  };

  const handleFilterClick = () => {
    router.push(`/cars?carType=${carTypeFilter}&yearQuery=${searchYearQuery}`);
  };

  return (
    <section className={styles.container}>
      <Head>
        <link rel="preload" href="SearchComp.module.css" as="style" />
      </Head>
      <div>
        <label>Car Model</label>
        <select value={carTypeFilter} onChange={handleCarTypeChange}>
          <option value="all">All</option>
          <option value="benz">Benz</option>
          <option value="toyota">Toyota</option>
          <option value="lexus">Lexus</option>
          <option value="bmw">BMW</option>
          <option value="porshe">Porshe</option>
          <option value="audi">Audi</option>
          <option value="bus">Bus</option>
        </select>
      </div>

      <div>
        <label>Search</label>
        <input
          type="search"
          id="search"
          placeholder="Car Year"
          value={searchYearQuery}
          onChange={handleSearchQueryChange}
        />

        <button type="button" onClick={handleFilterClick}>
          search
        </button>
      </div>
    </section>
  );
};

export default SearchFrag;
