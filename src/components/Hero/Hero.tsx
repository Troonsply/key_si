import { Button } from "@/components/ui/Button/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder/ImagePlaceholder";
import { Reveal } from "@/components/ui/Reveal/Reveal";
import heroImage from "./hero.jpeg";
import styles from "./Hero.module.css";

const META_TAGS = ["DEVELOPMENT", "TEAM LEAD", "AI", "SCRUM"];

export function Hero() {
  return (
    <section id="top" className={styles.section}>
      <div className={styles.copy}>
        <Reveal className={styles.kicker}>
          <span className={styles.kickerLine} />
          <span className="mono-label" style={{ fontSize: 11 }}>
            TEAM LEAD · AI
          </span>
        </Reveal>

        <Reveal as="h1" delay={0.05} className={`${styles.title} gradient-text`}>
         Developer
          <br />
          &amp; Team Lead
        </Reveal>

        <Reveal as="p" delay={0.1} className={styles.lead}>
          Разрабатываю интерфейсы, выстраиваю процессы и помогаю командам
          создавать продукты эффективнее.
        </Reveal>

        <Reveal as="p" delay={0.15} className={styles.body}>
          От архитектуры frontend-приложений до технического лидерства и
          внедрения AI в процессы разработки.
        </Reveal>

        <Reveal delay={0.2} className={styles.actions}>
          <Button href="#contact" variant="primary">
            Обсудить проект
          </Button>
          <a href="#projects" className={styles.link}>
            Посмотреть проекты ↓
          </a>
        </Reveal>
      </div>

      <Reveal delay={0.1} className={styles.portraitWrap}>
        <div className={styles.portraitAccent} aria-hidden />
        <div className={styles.portraitFrame}>
          <ImagePlaceholder
              src={heroImage}
              label="Портрет — вертикальный кадр, естественный свет"
              className={styles.portraitImage}
          />
        </div>
        <div className={styles.metaLabels}>
          {META_TAGS.map((tag) => (
            <span key={tag} className={styles.metaTag}>
              {tag}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
