import styles from "./Experience.module.css";
import skills from "../../Data/skills.json";
import history from "../../Data/history.json";
import { getImageUrl } from "../../utils";

const Experience = () => {
    return (
        <section id="experience" className={styles.container}>
            <h2 className={styles.title}>Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img
                                        src={getImageUrl(skill.imageSrc)}
                                        alt={skill.title}
                                    />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        return (
                            <li key={id} className={styles.historyItem}>
                                <img
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${historyItem.organisation} Logo `}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{historyItem.role}</h3>
                                    <p>{historyItem.startDate} - {historyItem.endDate}</p>

                                    <ul>
                                        {historyItem.experiences.map(
                                            (experience, id) => {
                                                return (
                                                    <li key={id}>
                                                        {experience}
                                                    </li>
                                                );
                                            }
                                        )}
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Experience;
