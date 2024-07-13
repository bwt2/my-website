import styles from './App.module.css'
import AboutMe from './pages/AboutMe/AboutMe'
import Experience from './pages/Experience/Experience'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
import Contact from './pages/Contact/Contact'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className={styles.layout}>
      <nav className={styles.nav}>
        <Navbar></Navbar>
      </nav>
      <main className={styles.main}>
        <AboutMe></AboutMe>
        <Experience></Experience>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </main>
    </div>
 );
}