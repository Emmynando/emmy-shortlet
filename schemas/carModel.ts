import { defineField } from "sanity";

const carModel = {
  name: "carModel",
  title: "Car Model",
  type: "document",
  fields: [
    defineField({
      name: "carModel",
      title: "Car Model",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      // readOnly: true,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      // readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "isBooked",
      title: "Is Booked",
      description: "if the car has been booked",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "image",
      title: "image",
      description: "Account Image",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url", title: "url" },
            { name: "file", type: "file", title: "file" },
          ],
        },
      ],
      validation: (Rule) =>
        Rule.required().min(2).error("Minimum of Two Images"),
    }),
  ],
};

export default carModel;
