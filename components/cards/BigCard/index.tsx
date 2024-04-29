import Link from 'next/link'
import Image from 'next/image'

import classes from './index.module.scss'


const BigCard = () => {
  return (
    <div className={classes.card}>
    <div className={classes.imageContainer}>
      <img  src="/assets/images/livingroom.jpg" 
      alt="a living room" />
    </div>
    <div className={classes.cardText}>
      <p>
        We have witnessed the ever-evolving landscape of the real estate market and 
        became a trusted partner by thousands of clients.
      </p>
      <Link href="#" className={classes.cardLink}>
        <p>Learn more</p>
        <Image
        src="/assets/icons/arrow_right.png"
         width={32} height={24} 
         alt="arrow right icon" />
      </Link>
    </div>
  </div>
  )
}

export default BigCard