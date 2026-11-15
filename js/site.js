// Apparition douce des éléments au défilement.
const cibles = document.querySelectorAll(".apparait");
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver((entrees) => {
    for (const e of entrees) if (e.isIntersecting) { e.target.classList.add("vu"); obs.unobserve(e.target); }
  }, { threshold: 0.12 });
  cibles.forEach((c) => obs.observe(c));
} else {
  cibles.forEach((c) => c.classList.add("vu"));
}
