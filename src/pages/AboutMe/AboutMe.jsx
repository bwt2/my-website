import styles from './AboutMe.module.css'

export default function AboutMe() {
    return (
        <div className={styles.container}>
            <section className={styles.text}>
                <h1>About Me</h1>
                <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, sed at cumque veniam eius alias incidunt cupiditate obcaecati maxime, facere odit quo nihil rem dolore nostrum saepe, impedit illo nesciunt.</h2>
            </section>
            <section className={styles.display}>
                {/* <div>
                    Weather API call here...
                </div> */}
            </section>
        </div>
    );
}