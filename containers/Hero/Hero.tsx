"use client"
import SearchBar from "@/components/ui/SearchBar"

import classes from './index.module.scss'


const Hero = () => {
  return (
    <div className={classes.heroContainer}
     >

      <div className={classes.heroTextContainer}>
        <h1 className={classes.heroHeading}>
            Find your 
          <span className={classes.heroSpan}>
            perfect Home
          </span> 
        </h1>
        <p className={classes.heroParagraph}>
          Let our expert team guide you through the magic of real estate and helping you find the
          perfect home where your dreams take flight.
        </p>
      </div>
      <SearchBar />
    </div>
  )
}

export default Hero