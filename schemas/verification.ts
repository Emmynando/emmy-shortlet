import { defineField } from "sanity";

const verification = {
  name: "verification",
  title: "verification",
  type: "document",
  fields: [
    defineField({
      name: "identifier",
      title: "identifier",
      type: "string",
    }),
    defineField({
      name: "token",
      title: "Token",
      type: "string",
    }),
    defineField({
      name: "expires",
      title: "Expires",
      type: "date",
    }),
  ],
};

export default verification;
