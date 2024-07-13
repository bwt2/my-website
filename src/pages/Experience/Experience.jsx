import styles from './styles/Experience.module.css'
import ExperienceData from "../../data/experience.json"
import { useEffect, useState, forwardRef } from 'react';

import ExperienceList from './ExperienceList'
import ExperienceDescription from './ExperienceDescription'

const Experience =  forwardRef(function Experience(props, ref) {
    const experienceList = ExperienceData;
    const [activeItem, setActiveItem] = useState(experienceList[experienceList.length - 1].id);

    return (
        <div className={styles.container} ref={ref}>
            <h1>Experience</h1>
            <section className={styles.experienceDisplay}>
                <ExperienceList experienceList={ExperienceData} 
                                activeItem={activeItem} 
                                setActiveItem={setActiveItem}
                >            
                </ExperienceList>
                <ExperienceDescription activeItem={activeItem} 
                                       experienceList={ExperienceData}
                >
                </ExperienceDescription>
            </section>
        </div>
    );
})

export default Experience;