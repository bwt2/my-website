import styles from './App.module.css'
import AboutMe from './pages/AboutMe/AboutMe'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar'
import { useRef } from 'react';

export default function App() {
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Navbar scrollToSection={scrollToSection} 
                refs={{ aboutMeRef, 
                        experienceRef, 
                        skillsRef, 
                        projectsRef, 
                        contactRef }} 
        />      
      </nav>
      <main className={styles.main}>
        <AboutMe ref={aboutMeRef} />
        <Experience ref={experienceRef} />
        <Skills ref={skillsRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
      </main>
    </div>
 );
}