import { defineField } from "sanity";

const booking = {
  name: "car",
  title: "car",
  type: "document",
  fields: [
    defineField({
      name: "user",
      title: "user",
      type: "reference",
      to: [{ type: "user" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "carType",
      title: "carType",
      type: "reference",
      to: [{ type: "carModel" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bookingDate",
      title: "Booking date",
      description: "Date of booking",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "checkoutDate",
      title: "Checkout Date",
      type: "date",
      description: "Account Password",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bookedDays",
      title: "Booked Days",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "totalPrice",
      title: "Total Price",
      type: "number",
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
};

export default booking;
