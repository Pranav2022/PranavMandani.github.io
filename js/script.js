const certificateAssets = [
    {
        file: "Certificate/springBoot.jpg",
        title: "Spring Boot Certificate",
        issuer: null,
        date: null,
        category: "backend",
        featured: true
    },
    {
        file: "Certificate/JavaProgramming.PNG",
        title: "Java Programming Certificate",
        issuer: null,
        date: null,
        category: "backend"
    },
    {
        file: "Certificate/PythonT.JPG",
        title: "Python Training Certificate",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/MySQL.JPG",
        title: "MySQL Certificate",
        issuer: null,
        date: null,
        category: "data"
    },
    {
        file: "Certificate/PostgreSQL.JPG",
        title: "PostgreSQL Certificate",
        issuer: null,
        date: null,
        category: "data"
    },
    {
        file: "Certificate/PRANAV-MANDANI_PHPANDMYSQL.pdf",
        title: "PHP and MySQL Certificate",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/PythonTrainingCertificate.pdf",
        title: "Python Training Certificate (PDF)",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/PranavMandani-Cybersecurity Es-certificate.pdf",
        title: "Cybersecurity Certificate",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/CyberSecurity.JPG",
        title: "Cyber Security Certificate",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/PostSql_certificate_PranavMandani.pdf",
        title: "PostgreSQL Certificate (PDF)",
        issuer: null,
        date: null,
        category: "data"
    },
    {
        file: "Certificate/advance_cpp.PNG",
        title: "Advanced C++ Certificate",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/Ruby.JPG",
        title: "Ruby Certificate",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/PRANAV-MANDANI_Ruby.pdf",
        title: "Ruby Certificate (PDF)",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/RTraining.JPG",
        title: "R Training Certificate",
        issuer: null,
        date: null,
        category: "data"
    },
    {
        file: "Certificate/RTraining.pdf",
        title: "R Training Certificate (PDF)",
        issuer: null,
        date: null,
        category: "data"
    },
    {
        file: "Certificate/DB_operation_usingPython.PNG",
        title: "DB Operation Using Python Certificate",
        issuer: null,
        date: null,
        category: "data"
    },
    {
        file: "Certificate/googleCloud.PNG",
        title: "Google Cloud Certificate",
        issuer: null,
        date: null,
        category: "cloud"
    },
    {
        file: "Certificate/Introduction_To_Ai.PNG",
        title: "Introduction to AI Certificate",
        issuer: null,
        date: null,
        category: "data"
    },
    {
        file: "Certificate/Introduction_to_ds.PNG",
        title: "Introduction to Data Science Certificate",
        issuer: null,
        date: null,
        category: "data"
    },
    {
        file: "Certificate/Latex_certificate.PNG",
        title: "Latex Certificate",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/matlab_certificate.PNG",
        title: "Matlab Certificate",
        issuer: null,
        date: null,
        category: "data"
    },
    {
        file: "Certificate/MLandIP.PNG",
        title: "Machine Learning and Image Processing Certificate",
        issuer: null,
        date: null,
        category: "data"
    },
    {
        file: "Certificate/Programming_fundamentals.PNG",
        title: "Programming Fundamentals Certificate",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/train_india.PNG",
        title: "Train India Certificate",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/Capture.PNG",
        title: "Programming for Everybody (Python)",
        issuer: null,
        date: null,
        category: "programming"
    },
    {
        file: "Certificate/PersistentSystemInternshipCertificate.pdf",
        title: "Persistent Systems Internship Certificate",
        issuer: null,
        date: null,
        category: "backend"
    }
];

let activeCertFilter = "all";
let lightboxItems = [];
let lightboxIndex = -1;
let lightboxBound = false;

window.myFunction = function myFunction() {
    const nav = document.getElementById("myNavbar");
    if (!nav) {
        return;
    }

    if (nav.className === "navbar") {
        nav.className += " responsive";
    } else {
        nav.className = "navbar";
    }
};

function setupNavigation() {
    const toggle = document.getElementById("menu-toggle");
    const navLinksContainer = document.getElementById("nav-links");

    if (!toggle || !navLinksContainer) {
        return;
    }

    toggle.addEventListener("click", () => {
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", String(!isExpanded));
        navLinksContainer.classList.toggle("is-open");
    });

    navLinksContainer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinksContainer.classList.remove("is-open");
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

function setupActiveSection() {
    const links = Array.from(document.querySelectorAll("[data-nav-link]"));
    const railLinks = Array.from(document.querySelectorAll("[data-rail-link]"));
    if (!links.length) {
        return;
    }

    const sectionMap = new Map();
    links.forEach((link) => {
        const href = link.getAttribute("href");
        if (!href || !href.startsWith("#")) {
            return;
        }
        const section = document.querySelector(href);
        if (section) {
            sectionMap.set(section, link);
        }
    });

    if (!sectionMap.size) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const link = sectionMap.get(entry.target);
                if (!link) {
                    return;
                }
                if (entry.isIntersecting) {
                    links.forEach((node) => node.classList.remove("is-active"));
                    link.classList.add("is-active");

                    const href = link.getAttribute("href");
                    railLinks.forEach((node) => {
                        const isCurrent = node.getAttribute("href") === href;
                        node.classList.toggle("is-active", isCurrent);
                    });
                }
            });
        },
        {
            rootMargin: "-35% 0px -55% 0px",
            threshold: 0.01
        }
    );

    sectionMap.forEach((_link, section) => observer.observe(section));
}

function setupReveal() {
    const revealItems = document.querySelectorAll(".reveal-item");
    if (!revealItems.length) {
        return;
    }

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18
        }
    );

    revealItems.forEach((item) => observer.observe(item));
}

function setupTimelineAccordion() {
    const items = document.querySelectorAll(".timeline-item");
    if (!items.length) {
        return;
    }

    items.forEach((item, index) => {
        const button = item.querySelector(".timeline-head");
        if (!button) {
            return;
        }

        if (index === 0) {
            item.classList.add("is-open");
            button.setAttribute("aria-expanded", "true");
        }

        button.addEventListener("click", () => {
            const isOpen = item.classList.contains("is-open");
            items.forEach((node) => {
                node.classList.remove("is-open");
                const nodeButton = node.querySelector(".timeline-head");
                if (nodeButton) {
                    nodeButton.setAttribute("aria-expanded", "false");
                }
            });

            if (!isOpen) {
                item.classList.add("is-open");
                button.setAttribute("aria-expanded", "true");
            }
        });
    });
}

function renderCertificates() {
    const container = document.getElementById("cert-grid");
    if (!container) {
        return;
    }

    const sorted = [...certificateAssets].sort((a, b) => {
        if (a.featured) {
            return -1;
        }
        if (b.featured) {
            return 1;
        }
        return a.title.localeCompare(b.title);
    });

    const filtered = sorted.filter((cert) => activeCertFilter === "all" || cert.category === activeCertFilter);

    const cards = filtered.map((cert) => {
        const isPdf = cert.file.toLowerCase().endsWith(".pdf");
        const preview = isPdf
            ? '<button class="cert-preview-trigger" type="button" data-lightbox-src="' + cert.file + '" data-lightbox-type="pdf">Open PDF Preview</button>'
            : '<button class="cert-preview-trigger" type="button" data-lightbox-src="' + cert.file + '" data-lightbox-type="image"><img src="' + cert.file + '" alt="' + cert.title + '" loading="lazy" /></button>';

        const issuerText = cert.issuer ? cert.issuer : "Not visible in repository asset";
        const dateText = cert.date ? cert.date : "Not visible in repository asset";

        return (
            '<article class="cert-card reveal-item">' +
            '<div class="cert-preview">' + preview + "</div>" +
            '<div class="cert-content">' +
            '<h3>' + cert.title + "</h3>" +
            "<p>Issuer: " + issuerText + "</p>" +
            "<p>Date: " + dateText + "</p>" +
            "<p>Category: " + cert.category + "</p>" +
            '<p>Verification link: Not available in repository metadata</p>' +
            '<a class="cert-open" href="' + cert.file + '" target="_blank" rel="noopener">View Certificate</a>' +
            "</div>" +
            "</article>"
        );
    });

    container.innerHTML = cards.join("");
}

function setupCertificateFilters() {
    const filters = document.querySelectorAll(".cert-filter");
    if (!filters.length) {
        return;
    }

    filters.forEach((filterBtn) => {
        filterBtn.addEventListener("click", () => {
            activeCertFilter = filterBtn.getAttribute("data-cert-filter") || "all";
            filters.forEach((node) => {
                const isActive = node === filterBtn;
                node.classList.toggle("is-active", isActive);
                node.setAttribute("aria-selected", String(isActive));
            });
            renderCertificates();
            setupReveal();
            setupLightbox();
        });
    });
}

function setupQuickContactBar() {
    const quickbar = document.getElementById("contact-quickbar");
    if (!quickbar) {
        return;
    }

    const onScroll = () => {
        quickbar.classList.toggle("is-visible", window.scrollY > 420);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
}

function setupLightbox() {
    const lightbox = document.getElementById("lightbox");
    const stage = document.getElementById("lightbox-stage");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");
    if (!lightbox || !stage || !closeBtn || !prevBtn || !nextBtn) {
        return;
    }

    const triggers = Array.from(document.querySelectorAll("[data-lightbox-src], .about-media img"));
    lightboxItems = triggers.map((node) => {
        if (node.matches(".about-media img")) {
            return {
                src: node.getAttribute("src") || "",
                type: "image"
            };
        }

        return {
            src: node.getAttribute("data-lightbox-src") || "",
            type: node.getAttribute("data-lightbox-type") || "image"
        };
    }).filter((item) => item.src);

    const openAt = (index) => {
        if (!lightboxItems.length) {
            return;
        }

        lightboxIndex = index;
        const item = lightboxItems[lightboxIndex];
        if (!item) {
            return;
        }

        if (item.type === "pdf") {
            stage.innerHTML = '<iframe src="' + item.src + '" title="Certificate PDF Preview"></iframe>';
        } else {
            stage.innerHTML = '<img src="' + item.src + '" alt="Certificate preview" />';
        }

        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    };

    const close = () => {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
        stage.innerHTML = "";
        document.body.style.overflow = "";
        lightboxIndex = -1;
    };

    const go = (step) => {
        if (!lightbox.classList.contains("is-open") || !lightboxItems.length) {
            return;
        }
        lightboxIndex = (lightboxIndex + step + lightboxItems.length) % lightboxItems.length;
        openAt(lightboxIndex);
    };

    if (lightboxBound) {
        lightbox.dataset.ready = "true";
        return;
    }

    document.addEventListener("click", (event) => {
        const target = event.target.closest("[data-lightbox-src], .about-media img");
        if (!target) {
            return;
        }

        event.preventDefault();

        const src = target.matches(".about-media img")
            ? target.getAttribute("src")
            : target.getAttribute("data-lightbox-src");
        const type = target.matches(".about-media img")
            ? "image"
            : (target.getAttribute("data-lightbox-type") || "image");

        const itemIndex = lightboxItems.findIndex((item) => item.src === src && item.type === type);
        openAt(itemIndex >= 0 ? itemIndex : 0);
    });

    closeBtn.addEventListener("click", close);
    prevBtn.addEventListener("click", () => go(-1));
    nextBtn.addEventListener("click", () => go(1));

    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            close();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (!lightbox.classList.contains("is-open")) {
            return;
        }

        if (event.key === "Escape") {
            close();
        } else if (event.key === "ArrowRight") {
            go(1);
        } else if (event.key === "ArrowLeft") {
            go(-1);
        }
    });

    lightboxBound = true;
}

function setupInfraFlowAnimation() {
    const flow = document.getElementById("infra-flow");
    if (!flow || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
    }

    const nodes = Array.from(flow.querySelectorAll("div"));
    let index = 0;

    setInterval(() => {
        nodes.forEach((node) => node.classList.remove("is-pulse"));
        nodes[index].classList.add("is-pulse");
        index = (index + 1) % nodes.length;
    }, 1300);
}

function setFooterYear() {
    const yearNode = document.getElementById("year");
    if (yearNode) {
        yearNode.textContent = String(new Date().getFullYear());
    }
}

function setupHomeFab() {
    const homeFab = document.getElementById("home-fab");
    if (!homeFab) {
        return;
    }
}

function setupProjectSliderCompatibility() {
    const slides = document.getElementsByClassName("slide");
    if (!slides.length) {
        return;
    }

    let currentSlide = 1;

    function showSlide(index) {
        if (index > slides.length) {
            currentSlide = 1;
        }
        if (index < 1) {
            currentSlide = slides.length;
        }

        for (let i = 0; i < slides.length; i += 1) {
            slides[i].style.display = "none";
        }

        slides[currentSlide - 1].style.display = "block";
    }

    window.changeSlide = function changeSlide(step) {
        currentSlide += step;
        showSlide(currentSlide);
    };

    showSlide(currentSlide);
}

document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupActiveSection();
    renderCertificates();
    setupCertificateFilters();
    setupReveal();
    setupTimelineAccordion();
    setupInfraFlowAnimation();
    setupHomeFab();
    setupQuickContactBar();
    setupLightbox();
    setFooterYear();
    setupProjectSliderCompatibility();
});
