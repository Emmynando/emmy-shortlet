import sanityClient from "./sanity";
import * as queries from "./sanityQuery";
import { Car } from "@/models/car";

export async function getFeaturedCar() {
  const result = await sanityClient.fetch<Car>(
    queries.getFeaturedCarQuery,
    {},
    { cache: "no-cache" }
  );

  return result;
}

export async function getCars() {
  const result = await sanityClient.fetch<Car[]>(
    queries.getCarsQuery,
    {},
    { cache: "no-cache" }
  );

  return result;
}
export async function getCar(_id: string) {
  const result = await sanityClient.fetch<Car>(
    queries.getCarQuery,
    { _id },
    { cache: "no-cache" }
  );

  return result;
}
