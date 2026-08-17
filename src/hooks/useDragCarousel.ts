"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Native scroll-snap carousel: tracks the active index from scroll position,
 * exposes prev/next helpers, and adds desktop pointer-drag scrolling on top
 * of the browser's own touch scrolling.
 */
export function useDragCarousel<T>(items: T[]) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 1;
    const card = track.firstElementChild as HTMLElement | null;
    return card ? card.getBoundingClientRect().width + 20 : track.clientWidth * 0.8;
  }, []);

  const go = useCallback(
    (dir: 1 | -1) => {
      trackRef.current?.scrollBy({ left: dir * step(), behavior: "smooth" });
    },
    [step]
  );

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const i = Math.round(track.scrollLeft / step());
    setActiveIndex((prev) =>
      prev === i ? prev : Math.max(0, Math.min(items.length - 1, i))
    );
  }, [step, items.length]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let x0 = 0;
    let l0 = 0;
    let dragging = false;

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      dragging = true;
      x0 = e.clientX;
      l0 = track.scrollLeft;
      track.style.cursor = "grabbing";
      track.style.scrollSnapType = "none";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      track.scrollLeft = l0 - (e.clientX - x0);
    };
    const onPointerUp = () => {
      if (!dragging) return;
      dragging = false;
      track.style.cursor = "grab";
      track.style.scrollSnapType = "x mandatory";
    };

    track.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      track.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return { trackRef, activeIndex, go, handleScroll };
}
