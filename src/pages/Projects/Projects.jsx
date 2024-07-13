import styles from './Projects.module.css';
import { forwardRef } from 'react';

const Projects = forwardRef(function Projects(props, ref) {
   return (
      <div className={styles.container} ref={ref}>
          <h1>Projects</h1>
      </div>
  );
})

export default Projects;