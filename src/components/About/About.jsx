import styles from "./About.module.css";
import { getImageUrl } from "../../utils";


const About = () => {
    return (
        <section id="about" className={styles.container}>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img
                    src={getImageUrl("about/aboutImage.png")}
                    alt="Me sitting with a laptop"
                    className={styles.aboutImage}
                />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/cursorIcon.png")}
                            alt="Cursor icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Frontend Devloper</h3>
                            <p>
                                I am a frontend developer with experience in
                                building responsive and optimized sites
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/serverIcon.png")}
                            alt="Server icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>Backend Devloper</h3>
                            <p>
                                I have experience developing fast and optimised
                                back-end systems and APIs
                            </p>
                        </div>
                    </li>

                    <li className={styles.aboutItem}>
                        <img
                            src={getImageUrl("about/devOpsIcon3.png")}
                            alt="DevOps icon"
                        />
                        <div className={styles.aboutItemText}>
                            <h3>DevOps</h3>
                            <p>
                                I am a well versed with Docker, Kubernetes,
                                AWS, CI/CD Pinpeline  
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default About;
