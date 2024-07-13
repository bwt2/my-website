import styles from './styles/Experience.module.css'
import ExperienceData from "../../data/experience.json"

import ExperienceList from './ExperienceList'
import ExperienceDisplay from './ExperienceDisplay'

export default function Experience() {
    return (
        <div className={styles.container}>
            <h1>Experience</h1>
            <section className={styles.experienceDisplay}>
                <ExperienceList experienceList={ExperienceData}></ExperienceList>
                <ExperienceDisplay></ExperienceDisplay>
            </section>
        </div>
    );
}