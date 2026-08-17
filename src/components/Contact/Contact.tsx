import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./Contact.module.css";

const LINKS = [
  { label: "Telegram", href: "#contact" },
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "#contact" },
  { label: "LinkedIn", href: "#contact" },
  { label: "Хабр", href: "#contact", accent: true },
];

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <Reveal as="h2" className={`${styles.title} gradient-text`}>
        Есть задача, которую нужно превратить в работающий продукт?
      </Reveal>
      <Reveal as="p" delay={0.05} className={styles.body}>
        Могу подключиться как frontend-разработчик, технический лидер или
        помочь команде выстроить эффективный процесс разработки.
      </Reveal>
      <Reveal delay={0.1}>
        <a href="mailto:hello@example.com" className={styles.cta}>
          Связаться
        </a>
      </Reveal>
      <Reveal delay={0.15} className={styles.links}>
        {LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`${styles.link} ${link.accent ? styles.linkAccent : ""}`}
          >
            {link.label}
          </a>
        ))}
      </Reveal>
    </section>
  );
}
