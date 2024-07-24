import styles from "./Contact.module.css";
import {getImageUrl} from "../../utils";

const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
                    <a href="mailto:rohhaanmane9@gmail.com">rohhaanmane9@gmail.com</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon" />
                    <a href="https://www.linkedin.com/in/rohanmane9/">linkedin.com/rohanmane9</a>
                </li>
                <li className={styles.link}>
                    <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
                    <a href="https://github.com/RohhaanMane">github.com/RohhaanMane</a>
                </li>
            </ul>
    </footer>
  )
}

export default Contact