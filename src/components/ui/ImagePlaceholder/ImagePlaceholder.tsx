import Image, { type StaticImageData } from "next/image";
import styles from "./ImagePlaceholder.module.css";

type ImagePlaceholderProps = {
  label: string;
  src?: string | StaticImageData;
  alt?: string;
  className?: string;
};

/**
 * Standalone stand-in for a real photo. Pass `src` once real imagery is
 * available — until then it renders the design system's dashed-frame
 * placeholder so the layout ships without depending on stock assets.
 */
export function ImagePlaceholder({
  label,
  src,
  alt = "",
  className,
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`${styles.frame} ${className ?? ""}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 640px, 100vw"
          className={styles.image}
        />
      </div>
    );
  }

  return (
    <div className={`${styles.frame} ${styles.empty} ${className ?? ""}`}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={styles.icon}
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <span className={styles.caption}>{label}</span>
    </div>
  );
}
