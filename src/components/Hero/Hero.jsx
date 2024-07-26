import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

const Hero = () => {
    return (
        <section className={styles.container}>
            
            <div className={styles.content}>
                <h1 className={styles.title}>I am Rohan</h1>
                <p className={styles.description}>
                    I am a full-stack developer with 5 years of experience using
                    React and NodeJS. Reach out if you would like to learn more!
                </p>
                <a
                    href="mailto:rohhaanmane9@gmail.com"
                    className={styles.contactBtn}
                >
                    Contact Me
                </a>
            </div>
            <div className={styles.heroImgContainer}>
                <img
                    src={getImageUrl("hero/heroRohan.png")}
                    alt="Hero image for me"
                    className={styles.heroImg}
                />
            </div>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};

export default Hero;
