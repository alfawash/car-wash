import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import useTranslations from "../useTranslations"
import * as styles from "./_About.module.scss"
//import { Link } from "gatsby"
//import LocalizedLink from "../localizedLink"

const About = () => {

    const { 
        opys_zagolovok,
        opys_abzac_1,
        opys_abzac_2
     } = useTranslations()

    return (
        <section id="o-nas" className={styles.section}>
            <div className={styles.container}>
                <h1 className={styles.aboutTitle}>{opys_zagolovok}</h1>

                <div className={styles.aboutInfo}>
                    <div className={styles.serviceDescription}>
                        <p>
                            {opys_abzac_1}
                        </p>
                        <p>
                            {opys_abzac_2}
                        </p>
                    </div>
                    <StaticImage src="../../images/about.jpg" alt="car washing" />
                </div>     
            </div>
        </section>
    )

}

export default About