import ListStyles from './styles/ExperienceList.module.css'
import ExperienceListItem from './ExperienceListItem'
import { useEffect, useState } from 'react';

export default function ExperienceList(props){
    const [activeItem, setActiveItem] = useState(null);
    const experienceList = props.experienceList;

    useEffect(() => {
        if (experienceList.length > 0) setActiveItem(experienceList[experienceList.length - 1].id);
    }, [])

    function toggleActiveItem(id){
        setActiveItem(prevActiveItem => (prevActiveItem === id ? null : id));
    }

    return (
        <ul className={ListStyles.list}>
            {props.experienceList.toReversed().map((experience) => {
                return <ExperienceListItem 
                    key={experience.id} 
                    experience={experience} 
                    isActive={activeItem === experience.id}
                    toggleActive={() => toggleActiveItem(experience.id)}
                />;
            })}
        </ul>
    );
}