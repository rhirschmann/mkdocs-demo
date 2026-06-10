document.addEventListener("DOMContentLoaded", function () {

  // ===== 3D Card Tilt + Glow =====
  function init3DCards() {
    const cards = document.querySelectorAll(".md-typeset .grid.cards > ul > li");

    cards.forEach((card) => {
      // Voeg glow overlay toe
      if (!card.querySelector(".card-glow")) {
        const glow = document.createElement("div");
        glow.className = "card-glow";
        card.prepend(glow);
      }

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateX = (y - 0.5) * -14;
        const rotateY = (x - 0.5) * 14;

        card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.04)`;
        card.style.boxShadow = "0 8px 24px rgba(63,81,181,0.18)";
        card.style.transition = "transform 0.08s ease, box-shadow 0.08s ease";

        // Glow effect
        const glow = card.querySelector(".card-glow");
        if (glow) {
          glow.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(124,77,255,0.12) 0%, transparent 60%)`;
        }
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
        card.style.boxShadow = "";
        card.style.transition = "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease";

        const glow = card.querySelector(".card-glow");
        if (glow) glow.style.background = "none";
      });
    });
  }

  // ===== Counter animatie =====
  function animateCounter(el, target, suffix, duration = 1400) {
    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.querySelector(".hero-stats__value").textContent = current + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  function initCounters() {
    const items = document.querySelectorAll(".hero-stats__item");
    if (!items.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix || "";
            animateCounter(el, target, suffix);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.4 }
    );

    items.forEach((item) => observer.observe(item));
  }

  // ===== Entrance animaties voor cards =====
  function initEntranceAnimations() {
    const cards = document.querySelectorAll(".md-typeset .grid.cards > ul > li");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "perspective(800px) translateY(0)";
            }, i * 60);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card, i) => {
      card.style.opacity = "0";
      card.style.transform = "perspective(800px) translateY(24px)";
      card.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.05}s`;
      observer.observe(card);
    });
  }

  // ===== Init =====
  init3DCards();
  initCounters();
  initEntranceAnimations();

  // Herinitialiseer na navigatie (instant loading)
  document.addEventListener("DOMContentSwitch", () => {
    init3DCards();
    initCounters();
    initEntranceAnimations();
  });
});