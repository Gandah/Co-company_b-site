import Link from 'next/link'
import { statistics } from '@/constants'


import classes from './index.module.scss'
import BigCard from '@/components/cards/BigCard'

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.aboutSubContainer}>
        <h2 className={classes.aboutHeading}>Your Reliable Real Estate Consultants</h2>
        <p className={classes.aboutParagraph}>
          At our real estate company, we pride ourselves on providing exceptional customer service to our clients. Our team of experienced advisors is dedicated to ensuring that you find your perfect dream home.
        </p>
      </div>
      <div className={classes.cardContainer}>
        <div className={classes.subContainer}>
           {statistics.map((item, i) => (
            <div className={`${classes.subCard} ${i % 2 === 0 ? classes.subCard__customers : classes.subCard__experience}`} key={`item-${i}`}>
              <h3 className={classes.subCardHeading}>{item.value}</h3>
              <p>{item.label}</p>
            </div>
           ) )
           }
        </div>

        <BigCard />
      </div>
    </div>
  )
}

export default About