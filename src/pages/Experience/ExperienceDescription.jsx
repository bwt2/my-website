import styles from './styles/ExperienceDescription.module.css'

export default function ExperienceDescription({ activeItem, experienceList }){
    if (experienceList.length <= 0){
        return <></>
    }

    const experience = experienceList[activeItem-1];

    return <section className={styles.description}>
        <p>{experience.description}</p>
    </section>
}