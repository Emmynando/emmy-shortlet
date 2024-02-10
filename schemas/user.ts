import { defineField } from "sanity";

const user = {
  name: "user",
  title: "user",
  type: "document",
  fields: [
    defineField({
      name: "isadmin",
      title: "Is Admin",
      description: "For Admins",
      type: "boolean",
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "username",
      title: "username",
      description: "For Users",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "email",
      description: "For Users",
      type: "string",
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "emailVerified",
      title: "Email Verified",
      description: "For Users",
      type: "boolean",
      initialValue: false,
      hidden: true,
    }),
    defineField({
      name: "password",
      type: "string",
      description: "Account Password",
      hidden: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "image",
      description: "Account Image",
      type: "url",
    }),
  ],
};

export default user;
