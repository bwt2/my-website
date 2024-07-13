import styles from './Navbar.module.css'

export default function Navbar(){
    return <nav className={styles.nav}>
        <h1>About Me</h1>
        <h1>Experience</h1>
        <h1>Skills</h1>
        <h1>Projects</h1>
        <h1>Contact</h1>
    </nav>
}