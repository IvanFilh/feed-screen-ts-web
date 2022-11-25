import styles from './Header.module.css'

import wsLogo from '../assets/ws-logo.png';

export function Header() {
    return(
        <header className={styles.header}>
            <img src={wsLogo} alt="" />
            <strong>Social World</strong>
        </header>
    );
} 

export default Header
