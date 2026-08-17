"use client";

import { Reveal } from "@/components/ui/Reveal/Reveal";
import { useDragCarousel } from "@/hooks/useDragCarousel";
import { skillCards } from "./skills.data";
import styles from "./Skills.module.css";

export function Skills() {
  const { trackRef, activeIndex, go, handleScroll } =
    useDragCarousel(skillCards);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className="mono-label" style={{ fontSize: 11, marginBottom: 16 }}>
            02 / CAPABILITIES
          </div>
          <Reveal as="h2" className={styles.title}>
            Чем могу быть полезна
          </Reveal>
        </div>
        <div className={styles.controls}>
          <button
            type="button"
            aria-label="Назад"
            className={styles.navBtn}
            onClick={() => go(-1)}
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Вперёд"
            className={styles.navBtn}
            onClick={() => go(1)}
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={handleScroll}
        className={`${styles.track} no-scrollbar`}
      >
        {skillCards.map((card) => (
          <article key={card.num} className={styles.card}>
            <div className={styles.cardTop}>
              <span className="mono-label" style={{ fontSize: 12 }}>
                {card.num}
              </span>
              <span className={styles.dot} />
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <div className={styles.divider} />
            <p className={styles.cardBody}>{card.body}</p>
            <p className={styles.cardMeta}>{card.meta}</p>
            <div className={styles.cardTag}>{card.tag}</div>
          </article>
        ))}
      </div>

      <div className={styles.pagination}>
        {skillCards.map((card, i) => (
          <span
            key={card.num}
            className={styles.pageDot}
            data-active={i === activeIndex}
          />
        ))}
        <span className={styles.counter}>
          {String(activeIndex + 1).padStart(2, "0")} / {String(skillCards.length).padStart(2, "0")}
        </span>
      </div>
    </section>
  );
}
