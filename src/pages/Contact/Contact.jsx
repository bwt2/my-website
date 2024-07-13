import styles from './Contact.module.css';
import { forwardRef } from 'react';

const Contact = forwardRef(function Contact(props, ref) {
    return (
        <div className={styles.container} ref={ref}>
            <h1>Contact</h1>
        </div>
    );
})

export default Contact;