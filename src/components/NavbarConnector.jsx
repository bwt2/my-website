import styles from './NavbarConnector.module.css'


const NavbarConnector = function ({ repeat }){
    const connectorSymbol = <div>⋅</div>

    return <div className={styles.connector}>
        {Array(repeat).fill(connectorSymbol)}    
    </div>
}

export default NavbarConnector;