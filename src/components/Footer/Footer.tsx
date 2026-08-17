import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>Имя Фамилия · FRONTEND / TEAM LEAD</span>
        <span>{year} · КОНТАКТЫ — PLACEHOLDER</span>
      </div>
    </footer>
  );
}
