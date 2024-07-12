import ListStyles from './ExperienceList.module.css'
import ListItemStyles from './ExperienceListItem.module.css'

export function ExperienceListItem(props){
    const experience = props.experience;
    return (
        <li className={ListItemStyles.item}>
            <h2>{experience.title}</h2>
            <p>{experience.description}</p>
        </li>
    );
}

export default function ExperienceList(props){
    return (
        <ul className={ListStyles.list}>
            {props.experienceList.map((experience) => {
                return <ExperienceListItem key={experience.id} experience={experience} />;
            })}
        </ul>
    );
}