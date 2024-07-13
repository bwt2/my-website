import styles from './styles/ExperienceListItem.module.css'
import { parseExperienceDate } from '../../utils/dateParser';

export default function ExperienceListItem({ experience, isActive, toggleActive }){
    return (
        <li className={`${styles.item} 
                        ${isActive ? styles.active : styles.inactive}`} 
            onClick={toggleActive}
        >
            <section className={styles.textArea}>
                <h2 className={styles.title}>{experience.title}</h2>
                <p>{parseExperienceDate(experience.start)} - {parseExperienceDate(experience.end)} · </p>
                <p>{experience.company}</p>
            </section>
        </li>
    );
}