"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { navLinks } from "./navLinks";
import styles from "./Header.module.css";

const NAME = "Имя Фамилия";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
      >
        <div className={styles.inner}>
          <a href="#top" className={styles.logo}>
            <span className={styles.logoMark}>ИФ</span>
            <span className={styles.logoName}>{NAME}</span>
          </a>

          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className={styles.navCta}>
              Контакты
            </a>
          </nav>

          <button
            type="button"
            aria-label="Меню"
            className={styles.burger}
            onClick={() => setMenuOpen(true)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <div className={styles.overlayTop}>
              <span className="mono-label" style={{ fontSize: 12 }}>
                МЕНЮ
              </span>
              <button
                type="button"
                aria-label="Закрыть"
                className={styles.closeBtn}
                onClick={closeMenu}
              >
                ✕
              </button>
            </div>
            <nav className={styles.overlayNav}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={styles.overlayLink}
                >
                  {link.label}
                </a>
              ))}
              <a href="#contact" onClick={closeMenu} className={styles.overlayCta}>
                Связаться
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
