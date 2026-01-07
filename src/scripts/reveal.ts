export function initReveal() {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Apply stagger delays to children inside a stagger group
  const groups = document.querySelectorAll("[data-stagger]");
  groups.forEach((group) => {
    const step = Number(group.getAttribute("data-stagger")) || 80;
    const items = group.querySelectorAll(".reveal");

    items.forEach((el, i) => {
      el.style.setProperty("--reveal-delay", reduceMotion ? "0ms" : `${i * step}ms`);
    });
  });

  // Observe .reveal elements
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
  );

  els.forEach((el) => io.observe(el));
  }
  
  initReveal();
