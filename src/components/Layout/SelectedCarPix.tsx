import { FC, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { Image as ImageType } from "@/models/car";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import styles from "./SelectedCarPix.module.css";

const SelectedCarPix: FC<{ photos: ImageType[] }> = ({ photos }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function showPhotoHandler(index: number) {
    setPhotoIndex(index);
    setShowModal(true);
  }

  if (!photos || photos.length === 0) {
    return (
      <div>
        <h2>No images available</h2>
      </div>
    );
  }

  return (
    <section className={styles.container}>
      <Head>
        <link rel="preload" href="SelectedCarPix.module.css" as="style" />
      </Head>
      <div className={styles.box}>
        {/* image section */}
        <section className={styles["image-container"]}>
          <div
            className={styles["main-image"]}
            onClick={() => showPhotoHandler(0)}
          >
            <Image
              src={photos[0].url}
              layout="responsive"
              width={0}
              height={0}
              alt="car"
            />
          </div>
          <div className={styles["images-box"]}>
            {photos.slice(1).map((photo, index) => (
              <div
                key={photo._key}
                className={styles["mapped-image"]}
                onClick={() => showPhotoHandler(index + 1)}
              >
                <Image
                  src={photo.url}
                  layout="responsive"
                  width={0}
                  height={0}
                  alt="car"
                />
              </div>
            ))}
          </div>
        </section>
        <div>
          <FaArrowLeft />
          <FaArrowRight />
        </div>
      </div>
      {showModal && (
        <div>
          {" "}
          <Image
            src={photos[photoIndex].url}
            alt="car"
            width={150}
            height={150}
          />
        </div>
      )}
    </section>
  );
};

export default SelectedCarPix;
