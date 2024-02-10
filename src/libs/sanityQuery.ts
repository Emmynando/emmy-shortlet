import { groq } from "next-sanity";

export const getFeaturedCarQuery = groq`*[_type == "carModel" && isBooked == false][0] {
    _id,
    carModel,
    image,
    isBooked,
    price,
   
}`;

export const getCarsQuery = groq`*[_type == "carModel"] {
    _id,
    carModel,
    year,
    image,
    isBooked,
    price,
   
}`;
export const getCarQuery = groq`*[_type == "carModel" && _id == $_id] {
    _id,
    carModel,
    year,
    image,
    isBooked,
    price,
}`;
