import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoPlaceholder}>
          <span className={styles.logoText}>Santos & Oliveira</span>
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><a href="#cardapio" className={styles.navLink}>Cardápio</a></li>
            <li><a href="#contato" className={styles.navLink}>Contato</a></li>
            <li><a href="#login" className={styles.navLink}>Login</a></li>
          </ul>
        </nav>

        <button className={styles.mobileMenuButton} aria-label="Menu">
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
          <span className={styles.menuIcon}></span>
        </button>
      </div>
    </header>
  );
}
