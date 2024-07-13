import styles from './styles/ExperienceList.module.css'
import ExperienceListItem from './ExperienceListItem'

export default function ExperienceList({ experienceList, activeItem, setActiveItem }){

    return (
        <ul className={styles.list}>
            {experienceList.toReversed().map((experience) => {
                return <ExperienceListItem 
                    key={experience.id} 
                    experience={experience} 
                    isActive={activeItem === experience.id}
                    toggleActive={() => setActiveItem(experience.id)}
                />;
            })}
        </ul>
    );
}