import { Reveal } from "@/components/ui/Reveal/Reveal";
import styles from "./BeyondCode.module.css";

const PILLARS = [
  { title: "People", desc: "Развитие команды, mentoring, коммуникация." },
  {
    title: "Process",
    desc: "Scrum, workflow, планирование, ретроспективы, улучшение процессов.",
  },
  {
    title: "Product",
    desc: "Понимание бизнес-задач и связь между продуктом и разработкой.",
  },
];

export function BeyondCode() {
  return (
    <section className={styles.section}>
      <div className="mono-label" style={{ fontSize: 11, marginBottom: 16 }}>
        05 / BEYOND CODE
      </div>
      <Reveal as="h2" className={styles.title}>
        Не только код
      </Reveal>

      <div className={styles.grid}>
        {PILLARS.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 0.05} className={styles.pillar}>
            <div className={`${styles.pillarTitle} gradient-text-soft`}>
              {pillar.title}
            </div>
            <div className={styles.divider} />
            <p className={styles.pillarDesc}>{pillar.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
