import styles from './styles/Experience.module.css'
import ExperienceData from "../../data/experience.json"
import { useEffect, useState } from 'react';

import ExperienceList from './ExperienceList'
import ExperienceDescription from './ExperienceDescription'

export default function Experience() {
    const experienceList = ExperienceData;
    const [activeItem, setActiveItem] = useState(experienceList[experienceList.length - 1].id);

    return (
        <div className={styles.container}>
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
}