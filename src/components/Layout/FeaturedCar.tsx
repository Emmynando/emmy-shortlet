import Head from 'next/head'
import Link from 'next/link'
import styles from './FeaturedCar.module.css'


export default function FeaturedCar(props) {
  const {_id, price, carModel} = props.props
  const image = props.props.image[0]
  return (
    <div className={styles.container}>
      <Head>
        <link rel="preload" href="FeaturedCar.module.css" as="style" />
      </Head>
      <h2>People's Favourite</h2>

      <div className={styles.box}>
        <section>
      {<img key={image._key} src={image.url} alt={carModel} />}
      </section>
      
      <section className={styles['second-div']}>
        <div>
        <h3>{carModel}</h3>
        <p>Price: N<span>{price}</span> per day</p>
        <button><Link href ={`/cars/${_id}`}> See Details</Link></button>
        </div>
      </section>
      </div>

    </div>
  );
}
