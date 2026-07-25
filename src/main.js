const iconPaths = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  linkedin:
    '<path d="M7 10v8M7 7.5v.1M11 18v-4.5a3 3 0 0 1 6 0V18M11 10v8"/>',
  youtube:
    '<path d="M3.7 8.2a2.5 2.5 0 0 1 1.8-1.8C7.1 6 12 6 12 6s4.9 0 6.5.4a2.5 2.5 0 0 1 1.8 1.8c.4 1.1.4 3.8.4 3.8s0 2.7-.4 3.8a2.5 2.5 0 0 1-1.8 1.8C16.9 18 12 18 12 18s-4.9 0-6.5-.4a2.5 2.5 0 0 1-1.8-1.8C3.3 14.7 3.3 12 3.3 12s0-2.7.4-3.8Z"/><path d="m10 9 5 3-5 3Z"/>',
  mail: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
  up: '<path d="m6 14 6-6 6 6"/><path d="M12 8v11"/>',
  code: '<path d="m9 8-4 4 4 4M15 8l4 4-4 4M13 5l-2 14"/>',
  heart:
    '<path d="M3 12h4l2-5 3 10 2-5h7"/><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.9-8.6a5.5 5.5 0 0 0-.1-7.8Z"/>',
  image:
    '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-5-5L5 20"/>',
  brain:
    '<path d="M9.5 4.5A3 3 0 0 0 6 7.4a3.5 3.5 0 0 0-1 6.7A3 3 0 0 0 9.5 19M14.5 4.5A3 3 0 0 1 18 7.4a3.5 3.5 0 0 1 1 6.7 3 3 0 0 1-4.5 4.9M9.5 4.5v15M14.5 4.5v15M9.5 9H7M14.5 9H17M9.5 15H7M14.5 15H17"/>',
  network:
    '<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="3" y="16" width="6" height="5" rx="1"/><rect x="15" y="16" width="6" height="5" rx="1"/><path d="M12 8v4M6 16v-4h12v4"/>',
  lock:
    '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
  google:
    '<circle cx="12" cy="12" r="8"/><path d="M12 8a4 4 0 1 0 3.7 5.5H12v-3h7"/>',
  orcid:
    '<circle cx="12" cy="12" r="9"/><circle cx="9" cy="8.5" r=".8" fill="currentColor" stroke="none"/><path d="M9 11v5M12 11v5M12 11h1.5a2.5 2.5 0 0 1 0 5H12"/>',
  amazon:
    '<path d="M8 10.5c.3-2 1.6-3 3.8-3 2.5 0 3.7 1.1 3.7 3.4V17M15.5 12.5c-4-.2-6 .7-6 2.5 0 1.3 1 2.2 2.4 2.2 1.7 0 3.1-1.1 3.6-2.7"/><path d="M6 19c3.7 2 8 2 12-.2"/>',
  facebook:
    '<path d="M14 20v-7h2.7l.5-3H14V8.5c0-1 .4-1.5 1.6-1.5H18V4.2c-.8-.1-1.7-.2-2.6-.2C12.7 4 11 5.6 11 8.5V10H8v3h3v7"/>',
};

const getIconName = (element) => {
  const classes = [...element.classList];
  const has = (value) => classes.some((name) => name.includes(value));

  if (element.dataset.feather === "x" || has("feather-x")) return "x";
  if (has("feather-menu")) return "menu";
  if (has("feather-linkedin")) return "linkedin";
  if (has("youtube")) return "youtube";
  if (has("feather-mail")) return "mail";
  if (has("arrow-up")) return "up";
  if (has("fa-code")) return "code";
  if (has("heartbeat")) return "heart";
  if (has("fa-images")) return "image";
  if (has("fa-brain")) return "brain";
  if (has("network-wired")) return "network";
  if (has("fa-lock")) return "lock";
  if (has("fa-google")) return "google";
  if (has("fa-orcid")) return "orcid";
  if (has("fa-amazon")) return "amazon";
  if (has("facebook")) return "facebook";
  return null;
};

const replaceIcons = () => {
  document.querySelectorAll("i, [data-feather]").forEach((element) => {
    const iconName = getIconName(element);
    if (!iconName) return;

    const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    icon.setAttribute("viewBox", "0 0 24 24");
    icon.setAttribute("aria-hidden", "true");
    icon.setAttribute("class", `site-icon site-icon--${iconName}`);
    icon.innerHTML = iconPaths[iconName];
    element.replaceWith(icon);
  });
};

const setupRotatingTitle = () => {
  const words = [...document.querySelectorAll(".cd-words-wrapper b")];
  if (words.length < 2) return;

  let activeIndex = Math.max(
    0,
    words.findIndex((word) => word.classList.contains("is-visible")),
  );

  window.setInterval(() => {
    words[activeIndex].classList.remove("is-visible");
    words[activeIndex].classList.add("is-hidden");
    activeIndex = (activeIndex + 1) % words.length;
    words[activeIndex].classList.remove("is-hidden");
    words[activeIndex].classList.add("is-visible");
  }, 2600);
};

const setupMobileMenu = () => {
  const menu = document.querySelector(".popup-mobile-menu");
  const openButton = document.querySelector(".hamberger-menu");
  const closeButton = menu?.querySelector(".close-menu-activation");
  if (!menu || !openButton || !closeButton) return;

  openButton.setAttribute("role", "button");
  openButton.setAttribute("tabindex", "0");
  openButton.setAttribute("aria-label", "Open navigation");
  openButton.setAttribute("aria-expanded", "false");
  closeButton.setAttribute("aria-label", "Close navigation");

  const setOpen = (open) => {
    menu.classList.toggle("menu-open", open);
    document.body.classList.toggle("mobile-menu-open", open);
    openButton.setAttribute("aria-expanded", String(open));
    if (open) closeButton.focus();
  };

  openButton.addEventListener("click", () => setOpen(true));
  openButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setOpen(true);
    }
  });
  closeButton.addEventListener("click", () => setOpen(false));
  menu.addEventListener("click", (event) => {
    if (event.target === menu) setOpen(false);
  });
  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("menu-open")) {
      setOpen(false);
      openButton.focus();
    }
  });
};

const setupResumeTabs = () => {
  const tabList = document.querySelector(".rn-nav-list");
  if (!tabList) return;

  const tabs = [...tabList.querySelectorAll(".nav-link")];
  const panes = tabs
    .map((tab) => document.querySelector(tab.getAttribute("href")))
    .filter(Boolean);

  tabs.forEach((tab) => {
    const targetId = tab.getAttribute("href")?.slice(1);
    if (!targetId) return;

    const pane = document.getElementById(targetId);
    tab.setAttribute("aria-controls", targetId);
    if (pane) {
      pane.setAttribute("role", "tabpanel");
      pane.setAttribute("aria-labelledby", tab.id);
    }
  });

  const activate = (tab) => {
    const target = document.querySelector(tab.getAttribute("href"));
    if (!target) return;

    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle("active", selected);
      item.classList.toggle("no-active", !selected);
      item.setAttribute("aria-selected", String(selected));
      item.setAttribute("tabindex", selected ? "0" : "-1");
    });
    panes.forEach((pane) => {
      const selected = pane === target;
      pane.classList.toggle("active", selected);
      pane.classList.toggle("show", selected);
      pane.classList.toggle("no-active", !selected);
      pane.hidden = !selected;
      pane.setAttribute("aria-hidden", String(!selected));
    });
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", (event) => {
      event.preventDefault();
      activate(tab);
    });
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const offset = event.key === "ArrowRight" ? 1 : -1;
      const nextTab = tabs[(index + offset + tabs.length) % tabs.length];
      activate(nextTab);
      nextTab.focus();
    });
  });

  activate(tabs.find((tab) => tab.classList.contains("active")) || tabs[0]);
};

const setupTestimonials = () => {
  const carousel = document.querySelector(".testimonial-activation");
  if (!carousel) return;

  const slides = [...carousel.querySelectorAll(":scope > .testimonial")];
  if (slides.length < 2) return;

  let activeIndex = 0;
  let autoAdvance;

  const previousButton = document.createElement("button");
  previousButton.className = "slide-arrow prev-arrow";
  previousButton.type = "button";
  previousButton.setAttribute("aria-label", "Previous recommendation");
  previousButton.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>';

  const nextButton = document.createElement("button");
  nextButton.className = "slide-arrow next-arrow";
  nextButton.type = "button";
  nextButton.setAttribute("aria-label", "Next recommendation");
  nextButton.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';

  const dots = document.createElement("ul");
  dots.className = "slick-dots";
  dots.setAttribute("aria-label", "Choose recommendation");

  const dotButtons = slides.map((_, index) => {
    const item = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `Show recommendation ${index + 1}`);
    button.addEventListener("click", () => show(index));
    item.append(button);
    dots.append(item);
    return button;
  });

  const show = (index) => {
    activeIndex = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === activeIndex;
      slide.hidden = !active;
      slide.setAttribute("aria-hidden", String(!active));
    });
    dotButtons.forEach((button, dotIndex) => {
      const selected = dotIndex === activeIndex;
      button.parentElement.classList.toggle("slick-active", selected);
      button.setAttribute("aria-current", selected ? "true" : "false");
    });
  };

  const restartAutoAdvance = () => {
    window.clearInterval(autoAdvance);
    autoAdvance = window.setInterval(() => show(activeIndex + 1), 7000);
  };

  previousButton.addEventListener("click", () => {
    show(activeIndex - 1);
    restartAutoAdvance();
  });
  nextButton.addEventListener("click", () => {
    show(activeIndex + 1);
    restartAutoAdvance();
  });
  carousel.addEventListener("mouseenter", () => window.clearInterval(autoAdvance));
  carousel.addEventListener("mouseleave", restartAutoAdvance);

  carousel.append(previousButton, nextButton, dots);
  show(0);
  restartAutoAdvance();
};

const setupScrollBehavior = () => {
  const header = document.querySelector(".rn-header");
  const backToTop = document.querySelector(".backto-top");

  const onScroll = () => {
    const scrolled = window.scrollY > 120;
    header?.classList.toggle("sticky", scrolled);
    backToTop?.classList.toggle("show", window.scrollY > 500);
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  backToTop?.setAttribute("role", "button");
  backToTop?.setAttribute("tabindex", "0");
  backToTop?.setAttribute("aria-label", "Back to top");
  const goToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  backToTop?.addEventListener("click", goToTop);
  backToTop?.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      goToTop();
    }
  });

  document
    .querySelectorAll('a[href^="#"]:not([data-toggle="tab"])')
    .forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
    });
};

const setupRevealMotion = () => {
  if (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    !("IntersectionObserver" in window)
  ) {
    document.querySelectorAll("[data-aos]").forEach((item) => {
      item.classList.add("is-revealed");
    });
    return;
  }

  document.body.classList.add("motion-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  document.querySelectorAll("[data-aos]").forEach((item) => observer.observe(item));
};

replaceIcons();
setupRotatingTitle();
setupMobileMenu();
setupResumeTabs();
setupTestimonials();
setupScrollBehavior();
setupRevealMotion();
