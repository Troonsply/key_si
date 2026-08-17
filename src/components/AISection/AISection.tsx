import { Reveal } from "@/components/ui/Reveal/Reveal";
import { aiTools } from "./aiTools.data";
import styles from "./AISection.module.css";

export function AISection() {
  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className="mono-label" style={{ fontSize: 11, marginBottom: 16 }}>
          04 / AI
        </div>
        <Reveal as="h2" className={`${styles.title} gradient-text`}>
          AI как усилитель команды
        </Reveal>
        <Reveal as="p" delay={0.05} className={styles.body}>
          Настройка AI-инструментов для разработки, тестирования, анализа
          кода, документации и автоматизации рутинных процессов. AI
          используется не ради самого AI, а для улучшения процессов
          разработки.
        </Reveal>

        <Reveal delay={0.1} className={styles.grid}>
          {aiTools.map((tool) => (
            <div key={tool.label} className={styles.cell}>
              <span className={styles.marker} />
              <div className={styles.label}>{tool.label}</div>
              <div className={styles.desc}>{tool.desc}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
