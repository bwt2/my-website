import styles from './AboutMe.module.css';
import { forwardRef } from 'react';

const AboutMe = forwardRef( function AboutMe(props, ref) {
    return (
        <div className={styles.container} ref={ref}>
            <section className={styles.text}>
                <h1>About Me</h1>
                <h2>
                3rd year undergraduate student at the University of Sydney pursuing a Bachelor of Advanced Computing majoring in Software Development and Physics. 
                </h2>
            </section>
            <section className={styles.display}>
                {/* <div>
                    Weather API call here...
                </div> */}
            </section>
        </div>
    );
})

export default AboutMe;