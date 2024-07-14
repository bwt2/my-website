import styles from './Navbar.module.css'
import NavbarConnector from './NavbarConnector'

export default function Navbar({ scrollToSection, refs }){
    return <nav className={styles.nav}>
      <h1 onClick={() => scrollToSection(refs.aboutMeRef)}>
        {"<"} About Me {">"}
      </h1>
      <NavbarConnector repeat={2}/>
      <h1 onClick={() => scrollToSection(refs.experienceRef)}>
        {"<"} Experience {">"}
      </h1>
      <NavbarConnector repeat={2}/>
      <h1 onClick={() => scrollToSection(refs.skillsRef)}>
        {"<"} Skills {">"}
      </h1>
      <NavbarConnector repeat={2}/>
      <h1 onClick={() => scrollToSection(refs.projectsRef)}>
        {"<"} Projects {">"}
      </h1>
      <NavbarConnector repeat={2}/>
      <h1 onClick={() => scrollToSection(refs.contactRef)}>
        {"<"} Contact {">"}
      </h1>
    </nav>
}