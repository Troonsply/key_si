import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./About.module.css";

const COMPANIES = [
  { name: "Газпромнефть", accent: false },
  { name: "Московская биржа", accent: false },
  { name: "ТПК", accent: false },
  { name: "Хабр", accent: true },
];

export function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.heading}>
          <div className="mono-label" style={{ fontSize: 11, marginBottom: 16 }}>
            01 / ABOUT
          </div>
          <Reveal as="h2" className={styles.title}>
            О специалисте
          </Reveal>
        </div>

        <div className={styles.content}>
          <Reveal as="p" className={styles.lead}>
            Опытная frontend-разработчица и Team Lead, которая умеет работать
            не только с кодом, но и с продуктом, бизнесом и командой.
          </Reveal>
          <Reveal as="p" delay={0.05} className={styles.body}>
            Работала над проектами для крупных компаний. Пишет технические
            статьи на Хабр. Хорошо ориентируется в бизнес-процессах и имеет
            опыт их выстраивания внутри команд. Отдельное направление опыта —
            внедрение Scrum с нуля и развитие инженерных процессов.
          </Reveal>
          <Reveal delay={0.1} className={styles.tags}>
            {COMPANIES.map((c) => (
              <span
                key={c.name}
                className={`${styles.tag} ${c.accent ? styles.tagAccent : ""}`}
              >
                {c.name}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
