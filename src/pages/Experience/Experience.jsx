import styles from './Experience.module.css'
import ExperienceList from './ExperienceList'
import ExperienceData from "../../data/experience.json"

export default function Experience() {
    return (
        <div className={styles.container}>
            <h1>Experience</h1>
            <ExperienceList experienceList={ExperienceData}></ExperienceList>
        </div>
    );
}