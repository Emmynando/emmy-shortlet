// "use client";

import HeroComp from "@/components/Layout/HeroComp";
import SearchComp from "@/components/Layout/SearchComp";
import Gallery from "@/components/Layout/GalleryComp";
import FeaturedCar from "@/components/Layout/FeaturedCar";
import { getFeaturedCar } from "@/libs/apis";

export default async function Home() {
  // featured car fetched props
  const peoplesChoice = await getFeaturedCar();

  return (
    <div>
      <HeroComp />
      <SearchComp />
      <Gallery />
      <FeaturedCar props={peoplesChoice} />
    </div>
  );
}
