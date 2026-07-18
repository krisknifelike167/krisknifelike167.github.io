import { useEffect, useRef } from "react";

/**
 * Adds "is-visible" to the ref'd element the first time it scrolls
 * into view, triggering the .reveal / .reveal-stagger CSS transitions.
 */
export default function useReveal({ threshold = 0.15 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
