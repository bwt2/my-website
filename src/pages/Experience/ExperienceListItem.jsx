import ListItemStyles from './styles/ExperienceListItem.module.css'
import { parseExperienceDate } from '../../utils/dateParser';

export default function ExperienceListItem({ experience, isActive, toggleActive }){
    return (
        <li className={`${ListItemStyles.item} 
                        ${isActive ? ListItemStyles.active : ListItemStyles.inactive}`} 
            onClick={toggleActive}
        >
            <section className={ListItemStyles.textArea}>
                <h2 className={ListItemStyles.title}>{experience.title}</h2>
                <p>{parseExperienceDate(experience.start)} - {parseExperienceDate(experience.end)}  · </p>
                <p>{experience.company}</p>
            </section>
        </li>
    );
}