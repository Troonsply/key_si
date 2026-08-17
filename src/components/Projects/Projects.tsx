import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import { projects } from "./projects.data";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="mono-label" style={{ fontSize: 11, marginBottom: 16 }}>
        03 / SELECTED WORK
      </div>
      <Reveal as="h2" className={styles.title}>
        Избранные проекты
      </Reveal>

      {projects.map((project) => (
        <Reveal key={project.num} className={styles.row}>
          <div className={styles.mediaWrap}>
            <ImagePlaceholder
              label={project.slotHint}
              className={styles.media}
            />
          </div>

          <div className={styles.info}>
            <div className={styles.infoTop}>
              <h3 className={styles.name}>{project.name}</h3>
              <span className="mono-label" style={{ fontSize: 11 }}>
                {project.num}
              </span>
            </div>
            <p className={styles.desc}>{project.desc}</p>

            <div className={styles.metaRow}>
              <div className={styles.metaCol}>
                <div className="mono-label" style={{ fontSize: 10, marginBottom: 8 }}>
                  РОЛЬ
                </div>
                <div className={styles.metaValue}>{project.role}</div>
              </div>
              <div className={styles.metaCol}>
                <div className="mono-label" style={{ fontSize: 10, marginBottom: 8 }}>
                  НАПРАВЛЕНИЯ
                </div>
                <div className={styles.metaValue}>{project.stack}</div>
              </div>
            </div>

            <div className={styles.detail}>
              <div className={styles.metaRow}>
                <div className={styles.metaCol}>
                  <div className="mono-label" style={{ fontSize: 10, marginBottom: 8 }}>
                    ЗОНА ОТВЕТСТВЕННОСТИ
                  </div>
                  <div className={styles.metaValueMuted}>{project.scope}</div>
                </div>
                <div className={styles.metaCol}>
                  <div className="mono-label" style={{ fontSize: 10, marginBottom: 8 }}>
                    РЕЗУЛЬТАТ
                  </div>
                  <div className={styles.metaValueMuted}>{project.result}</div>
                </div>
              </div>
            </div>

            <div className={styles.hint}>HOVER — ПОДРОБНЕЕ</div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
