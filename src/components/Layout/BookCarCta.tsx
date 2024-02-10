import Head from "next/head";
import { Dispatch, FC, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import classes from "./BookCarCta.module.css";

interface Props {
  startDate: Date | null;
  setStartDate: Dispatch<SetStateAction<Date | null>>;
  endBookingDate: Date | null;
  setEndBookingDate: Dispatch<SetStateAction<Date | null>>;
  calcMinEndDate: () => Date | null;
  minEndBookingDate: () => Date | null;
}

const BookCarCta: FC<Props> = (props) => {
  const {
    startDate,
    setStartDate,
    endBookingDate,
    setEndBookingDate,
    minEndBookingDate,
  } = props;

  return (
    <section className={classes.container}>
      <Head>
        <link rel="preload" href="BookCarCta.module.css" as="style" />
      </Head>
      <h4>Create Booking</h4>
      <label>Start Date</label>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        dateFormat="dd/mm/yyyy"
        minDate={new Date()}
        id="start-date"
        className={classes["start-date"]}
      />
      <label>End Date</label>
      <DatePicker
        selected={endBookingDate}
        onChange={(date) => setEndBookingDate(date)}
        dateFormat="dd/mm/yyyy"
        minDate={minEndBookingDate()}
        disabled={!startDate}
        id="end-date"
      />
    </section>
  );
};

export default BookCarCta;
