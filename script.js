// Meniu mobil
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
    navToggle.addEventListener("click", () => {
        mainNav.classList.toggle("open");
    });

    mainNav.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            mainNav.classList.remove("open");
        }
    });
}

// Scroll lin
document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (targetId.length > 1) {
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    });
});

// An dinamic în footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Formular demo mic (în HERO)
const demoForm = document.getElementById("demoBookingForm");
const demoMessage = document.getElementById("demoMessage");

if (demoForm && demoMessage) {
    demoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("demoName").value.trim();
        const service = document.getElementById("demoService").value;
        const date = document.getElementById("demoDate").value;
        const time = document.getElementById("demoTime").value;

        if (!name || !service || !date || !time) {
            demoMessage.textContent = "Completează toate câmpurile pentru a simula rezervarea.";
            demoMessage.style.color = "#fecaca"; // roșu deschis
            return;
        }

        demoMessage.style.color = "#bbf7d0";
        demoMessage.textContent =
            "Rezervare simulată pentru " +
            name +
            " la serviciul " +
            service +
            " pe data de " +
            date +
            " la ora " +
            time +
            ". În versiunea reală, cererea ar fi trimisă către pagina de programări Alteg.";
        demoForm.reset();
    });
}

// Formular de rezervare complet (secțiunea REZERVARE)
const fullForm = document.getElementById("fullBookingForm");
const fullStatus = document.getElementById("fullMessageStatus");

if (fullForm && fullStatus) {
    fullForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("fullName").value.trim();
        const phone = document.getElementById("fullPhone").value.trim();
        const service = document.getElementById("fullService").value;
        const message = document.getElementById("fullMessage").value.trim();

        if (!name || !phone || !service) {
            fullStatus.textContent = "Te rugăm să completezi numele, telefonul și serviciul.";
            fullStatus.style.color = "#fecaca";
            return;
        }

        fullStatus.style.color = "#bbf7d0";
        fullStatus.textContent =
            "Cererea ta de rezervare a fost înregistrată la nivel demonstrativ. " +
            "Într-un sistem real, datele ar fi trimise către serverul aplicației (Alteg / YClients).";

        fullForm.reset();
    });
}
