import { Reveal } from "@/components/ui/Reveal/Reveal";
import { posts } from "./writing.data";
import styles from "./Writing.module.css";

export function Writing() {
  return (
    <section id="writing" className={styles.section}>
      <div className="mono-label" style={{ fontSize: 11, marginBottom: 16 }}>
        06 / WRITING
      </div>
      <Reveal as="h2" className={styles.title}>
        Пишу о разработке
      </Reveal>

      <div className={`${styles.track} no-scrollbar`}>
        {posts.map((post, i) => (
          <a href="#writing" key={post.title + i} className={styles.card}>
            <div className={styles.cardTop}>
              <span>{post.topic}</span>
              <span>{post.date}</span>
            </div>
            <h3 className={styles.cardTitle}>{post.title}</h3>
            <p className={styles.cardDesc}>{post.desc}</p>
            <span className={styles.cardCta}>Читать статью →</span>
          </a>
        ))}
      </div>
    </section>
  );
}
