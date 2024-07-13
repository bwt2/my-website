import styles from './Skills.module.css';
import { forwardRef } from 'react';

const Skills = forwardRef(function Skills(props, ref) {
   return (
      <div className={styles.container} ref={ref}>
          <h1>Skills</h1>
      </div>
  );
})

export default Skills;