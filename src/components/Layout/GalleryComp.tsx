import Head from "next/head";
import benz from "../../../public/images/shortlet_images/benz-1.jpg";
import audi from "../../../public/images/shortlet_images/audi-2.jpg";
import toyota from "../../../public/images/shortlet_images/toyota-1.jpg";
import porshe from "../../../public/images/shortlet_images/porshe-1.jpg";
import bmw from "../../../public/images/shortlet_images/bmw-1.jpg";
import Image from "next/image";

import styles from "./GalleryComp.module.css";
export default function Gallery() {
  return (
    <div className={styles.box}>
        <Head>
          <link rel="preload" href="GalleryComp.module.css" as="style" />
        </Head>
      
      <h3 style={{ color: "#000000" }}> Galleria</h3>
      <div className={styles.container}>
        <div>
          <Image src={audi} width={250} height={409} alt="cars" />
        </div>
        <div>
          <Image src={benz} width={250} height={200} alt="cars" />
        </div>
        <div>
          <Image src={toyota} width={250} height={200} alt="cars" />
        </div>
        <div>
          <Image src={porshe} width={250} height={200} alt="cars" />
        </div>
        <div>
          <Image src={bmw} width={250} height={200} alt="cars" />
        </div>
      </div>
    </div>
  );
}
