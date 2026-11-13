// Atelier — Week Project Settimana VI
//
// Aggiungi qui il codice JavaScript se serve.
// Per la Versione Base spesso non serve niente: tutto si fa in HTML+SCSS.
// Per le versioni Intermedia e Avanzata: filtri lavori, toggle tema, validazione form.

function creaElemento(tag, classe, genitore, testo, id) {
    const elemento = document.createElement(tag);

    elemento.className = classe;

    if (testo !== undefined) {
        elemento.textContent = testo;
    }

    if (id !== undefined) {
        elemento.id = id;
    }

    if (genitore !== undefined) {
        genitore.appendChild(elemento);
    }

    return elemento;
}

const lavori = [
    {
        id: 1,
        titolo: "Villa Mediterranea",
        anno: 2026,
        categoria: "residenziale",
        immagine: "assets/img/villa-mediterranea.jpg",
        descrizione: "Villa moderna progettata per valorizzare luce naturale e spazi esterni.",
        novita: true
    },
    {
        id: 2,
        titolo: "Loft Industriale",
        anno: 2025,
        categoria: "interior",
        immagine: "assets/img/loft-industriale.jpg",
        descrizione: "Recupero di uno spazio industriale con materiali contemporanei."
    },
    {
        id: 3,
        titolo: "Residenza Urbana",
        anno: 2026,
        categoria: "residenziale",
        immagine: "assets/img/residenza-urbana.jpg",
        descrizione: "Complesso residenziale dal design moderno e funzionale."
    },
    {
        id: 4,
        titolo: "Studio Creativo",
        anno: 2025,
        categoria: "commerciale",
        immagine: "assets/img/studio-creativo.jpg",
        descrizione: "Ambiente lavorativo flessibile con spazi condivisi."
    },
    {
        id: 5,
        titolo: "Boutique Hotel",
        anno: 2024,
        categoria: "commerciale",
        immagine: "assets/img/boutique-hotel.jpg",
        descrizione: "Progetto di ospitalità con ambienti eleganti e accoglienti."
    },
    {
        id: 6,
        titolo: "Caffetteria Design",
        anno: 2026,
        categoria: "interior",
        immagine: "assets/img/caffetteria-design.jpg",
        descrizione: "Interior design di un locale contemporaneo.",
        novita: true
    }
];

const header = document.getElementById("site-header");
const hero = document.querySelector(".hero");
const grigliaLavori = document.getElementById("lavori-grid");
const filtriLavori = document.getElementById("filtri-lavori");
const modalLavoro = document.getElementById("modalLavoro");
const modalTitolo = document.getElementById("modalLavoroTitolo");
const modalImmagine = document.getElementById("modalLavoroImmagine");
const modalCategoria = document.getElementById("modalLavoroCategoria");
const modalDescrizione = document.getElementById("modalLavoroDescrizione");
const modalContatti = document.getElementById("contatti");
const formContatti = document.getElementById("formContatti");
const successoContatti = document.getElementById("successoContatti");
let timerChiusura;
const themeToggle = document.getElementById("theme-toggle");
const carouselEvidenzaInner = document.getElementById("carouselEvidenzaInner");

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY >= hero.offsetHeight);
});

function renderLavori(lista = lavori) {
    grigliaLavori.replaceChildren();

    lista.forEach((lavoro) => {
        const colonna = creaElemento("div", "col-12 col-sm-6 col-lg-4", grigliaLavori);
        const card = creaElemento("a", "card work-card h-100 w-100 text-start text-decoration-none text-reset position-relative", colonna);
        card.href = "#modalLavoro";
        card.dataset.id = lavoro.id;
        card.dataset.bsToggle = "modal";
        card.dataset.bsTarget = "#modalLavoro";

        const immagine = creaElemento("img", "card-img-top", card);
        immagine.src = lavoro.immagine;
        immagine.alt = lavoro.titolo;

        if (lavoro.novita) {
            creaElemento("span", "badge badge-new position-absolute top-0 end-0 m-3", card, "NEW");
        }

        const cardBody = creaElemento("div", "card-body", card);
        creaElemento("h3", "card-title h5", cardBody, lavoro.titolo);
        creaElemento("p", "card-text text-muted small", cardBody, `${lavoro.categoria} · ${lavoro.anno}`);
        creaElemento("p", "card-text", cardBody, lavoro.descrizione);
    });
}

renderLavori();


function renderCarouselEvidenza() {
    const lavoriEvidenza = lavori.filter((lavoro) => lavoro.novita);

    carouselEvidenzaInner.replaceChildren();

    lavoriEvidenza.forEach((lavoro, indice) => {

        const slide = creaElemento("div", `carousel-item ${indice === 0 ? "active" : ""}`, carouselEvidenzaInner);

        const immagine = creaElemento("img", "d-block w-100 featured-image", slide);
        immagine.src = lavoro.immagine;
        immagine.alt = lavoro.titolo;

        const contenuto = creaElemento("div", "featured-info p-3 text-center", slide);

        creaElemento("h4", "h5 fw-bold", contenuto, lavoro.titolo);
        creaElemento("p", "small", contenuto, `${lavoro.categoria} · ${lavoro.anno}`);

        const dettaglio = creaElemento("button", "btn btn-primary", contenuto, "Scopri il progetto");
        dettaglio.type = "button";
        dettaglio.dataset.id = lavoro.id;
        dettaglio.dataset.bsToggle = "modal";
        dettaglio.dataset.bsTarget = "#modalLavoro";

    });
}

renderCarouselEvidenza();


filtriLavori.querySelectorAll("input[data-filter]").forEach((radio) => {
    const categoria = radio.dataset.filter;

    const totale = categoria === "tutti"
        ? lavori.length
        : lavori.filter((lavoro) => lavoro.categoria === categoria).length;

    const count = filtriLavori.querySelector(`label[for="${radio.id}"] .count`);
    count.textContent = `(${totale})`;
});

filtriLavori.addEventListener("change", (e) => {
    const categoria = e.target.dataset.filter;
    if (!categoria) return;

    const lavoriFiltrati = categoria === "tutti"
        ? lavori
        : lavori.filter((lavoro) => lavoro.categoria === categoria);

    renderLavori(lavoriFiltrati);
});

modalLavoro.addEventListener("show.bs.modal", (e) => {

    const card = e.relatedTarget;
    const idLavoro = Number(card.dataset.id);
    const lavoro = lavori.find((elemento) => elemento.id === idLavoro);

    if (!lavoro) return;

    modalTitolo.textContent = lavoro.titolo;
    modalImmagine.src = lavoro.immagine;
    modalImmagine.alt = lavoro.titolo;
    modalCategoria.textContent = `${lavoro.categoria} · ${lavoro.anno}`;
    modalDescrizione.textContent = lavoro.descrizione;

});

// Evento Submit modale

formContatti.addEventListener("submit", (e) => {
    e.preventDefault();

    formContatti.classList.add("was-validated");

    if (!formContatti.checkValidity()) return;

    successoContatti.textContent = "Grazie! Richiesta inviata con successo!";
    successoContatti.classList.remove("d-none");

    formContatti.querySelectorAll("input, select, textarea, button").forEach((elemento) => {
        elemento.disabled = true;
    });

    timerChiusura = setTimeout(() => {
        modalContatti.querySelector(".btn-close").click();
    }, 2000);
});

// Evento hidden bs modale

modalContatti.addEventListener("hidden.bs.modal", () => {
    clearTimeout(timerChiusura);
    formContatti.reset();
    formContatti.classList.remove("was-validated");
    successoContatti.classList.add("d-none");

    formContatti.querySelectorAll("input, select, textarea, button").forEach((elemento) => {
        elemento.disabled = false;
    });
});

themeToggle.addEventListener("click", () => {
    const darkMode = document.documentElement.dataset.bsTheme === "dark";

    document.documentElement.dataset.bsTheme = darkMode ? "light" : "dark";

    themeToggle.querySelector("i").className = darkMode ? "bi bi-moon" : "bi bi-sun";
});