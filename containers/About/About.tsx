import classes from './index.module.scss'


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
            <div className={classes.card}>1</div>
            <div className={classes.card}>2</div>
            <div className={classes.card}>3</div>
        </div>
    </div>
  )
}

export default About