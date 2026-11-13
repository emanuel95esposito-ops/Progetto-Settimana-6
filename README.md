# Atelier — Studio di Architettura

### EPICODE | Week Project — Settimana VI

Sito web responsive per **Atelier**, uno studio di architettura fittizio, sviluppato utilizzando **HTML5, Bootstrap 5, SASS (SCSS) e JavaScript**.

Il progetto riprende e amplia le competenze acquisite durante le prime cinque settimane del corso, con particolare attenzione alla modularità del codice, alla gestione dinamica dei contenuti e all'utilizzo dei componenti Bootstrap.

L'obiettivo è realizzare un sito aziendale moderno, accessibile e responsive, mantenendo un'identità visiva elegante e coerente con il settore dell'architettura.

---

## Tecnologie utilizzate

- **HTML5** — Struttura semantica delle pagine.
- **Bootstrap 5.3.9** — Grid System, componenti, utility responsive, modali e carousel.
- **Bootstrap Icons** — Iconografia minimale e coerente.
- **SASS / SCSS** — Variabili, nesting, mixin, partials e personalizzazione dei componenti Bootstrap.
- **JavaScript ES6+** — DOM, array di oggetti, eventi, filtri e rendering dinamico.
- **CSS Custom Properties** — Personalizzazione dei componenti e gestione dei temi.

---

## Struttura del sito

### Navbar

- Navbar Bootstrap responsive con `navbar-expand-md`.
- Posizionamento sticky durante lo scorrimento.
- Logo Atelier e navigazione interna.
- Menu hamburger per dispositivi mobili.
- Collegamenti alle sezioni Studio, Servizi e Lavori e apertura della modale Contatti.

### Hero — Studio

- Altezza minima di `80vh`.
- Titolo e sottotitolo centrati tramite utility Bootstrap.
- Sfondo personalizzato con colore brand.
- Call to Action "Inizia un progetto" collegata alla modale Contattaci.

### Servizi

Tre card dedicate alle principali attività dello studio:

1. Progettazione residenziale.
2. Interior design.
3. Ristrutturazioni.

Le card utilizzano il Grid System Bootstrap, il nesting SCSS e un mixin condiviso per gli effetti hover.

### Lavori

Portfolio composto da sei progetti architettonici:

1. Villa Mediterranea.
2. Loft Industriale.
3. Residenza Urbana.
4. Studio Creativo.
5. Boutique Hotel.
6. Caffetteria Design.

Ogni progetto presenta un'immagine, un titolo, un anno, una categoria e una descrizione.

### Team

Sezione responsive dedicata a tre figure professionali dello studio, con avatar, nominativi, ruoli e descrizioni.

### Contatti

Modulo di contatto realizzato con componenti Bootstrap:

- Nome.
- Email.
- Tipo di progetto.
- Messaggio.

### Footer

Footer responsive organizzato in tre colonne:

- Informazioni sullo studio.
- Collegamenti interni.
- Recapiti.

Copyright separato tramite una linea orizzontale.

---

## Funzionalità EXTRA — JavaScript e Bootstrap

Le seguenti funzionalità ampliano la versione Base del progetto.

### ⭐ 1. Portfolio generato dinamicamente

Le sei card della sezione Lavori non sono scritte manualmente nell'HTML.

I progetti sono definiti in un **array di oggetti JavaScript**, contenente tutti i dati necessari.

La funzione `renderLavori()` genera le card tramite DOM, utilizzando una funzione riutilizzabile `creaElemento()`.

**Vantaggi:**
- Separazione tra dati e presentazione.
- Maggiore manutenibilità.
- Possibilità di aggiungere nuovi progetti modificando soltanto l'array.

### ⭐ 2. Filtri dinamici con conteggio automatico

Il portfolio può essere filtrato per:

- Tutti.
- Residenziale.
- Interior design.
- Commerciale.

I filtri utilizzano i **Radio Toggle Button di Bootstrap**.

Il numero di progetti disponibili per ogni categoria viene calcolato automaticamente attraverso i metodi JavaScript `filter()` e `length`.

La selezione di un filtro aggiorna le card visualizzate senza ricaricare la pagina.

### ⭐ 3. Carousel dei progetti in evidenza

È stato aggiunto un carousel Bootstrap dedicato ai progetti in evidenza.

Le slide vengono generate dinamicamente recuperando dall'array i progetti contrassegnati dalla proprietà `novita`.

Il carousel dispone di:

- Scorrimento automatico.
- Transizioni Bootstrap.
- Navigazione tramite frecce.
- Pausa al passaggio del mouse.
- Pulsante per visualizzare i dettagli del progetto.

Per ottimizzare la visualizzazione mobile, il carousel viene nascosto sotto i 576 px.

### ⭐ 4. Badge NEW dinamici

I progetti aggiunti recentemente al portfolio vengono identificati attraverso la proprietà booleana `novita`.

JavaScript genera automaticamente un badge **NEW** sulle card interessate.

Il badge è personalizzato con una tonalità sabbia, coerente con l'identità grafica del sito.

### ⭐ 5. Modale dettagli progetto

Cliccando su una card o sul relativo pulsante del carousel, viene aperta una modale Bootstrap.

Il contenuto viene aggiornato dinamicamente in base al progetto selezionato e comprende:

- Immagine ingrandita.
- Titolo.
- Categoria e anno.
- Descrizione.

Una sola modale viene riutilizzata per tutti i progetti.

### ⭐ 6. Modale Contattaci con validazione

Il modulo Contattaci è stato trasformato in una modale Bootstrap, accessibile dalla navbar, dalla Hero e dal footer.

La validazione sfrutta i vincoli HTML5 e le classi Bootstrap:

- Verifica dei campi obbligatori.
- Controllo del formato email.
- Messaggio di almeno 20 caratteri.
- Evidenziazione dei campi non validi.
- Messaggi specifici tramite `invalid-feedback`.

Dopo un invio valido:

1. Viene mostrato un messaggio di conferma.
2. I campi e il pulsante Invia vengono temporaneamente disabilitati.
3. La modale si chiude automaticamente dopo 2 secondi.
4. Alla chiusura, il form viene ripristinato.

**Nota:** l'invio è simulato lato frontend. Non è presente un backend per l'invio effettivo delle email.

### ⭐ 7. Dark Mode

È stato implementato un sistema di cambio tema utilizzando il supporto nativo di Bootstrap 5.3:

`data-bs-theme="light"` / `data-bs-theme="dark"`

Il pulsante della navbar permette di alternare i due temi tramite JavaScript.

L'icona cambia dinamicamente tra luna e sole utilizzando Bootstrap Icons.

Le personalizzazioni SCSS mantengono coerenti colori, card, pulsanti e modali in entrambe le modalità.

---

## Personalizzazioni grafiche EXTRA

Oltre ai componenti previsti dalla consegna, il sito comprende ulteriori interventi di UX/UI.

### 🎨 Identità visiva personalizzata

- Palette marrone e sabbia ispirata a materiali naturali e architettura contemporanea.
- Colori centralizzati tramite variabili SCSS.
- Card con angoli arrotondati.
- Fotografie architettoniche ottimizzate e proporzioni uniformi.
- Icone Bootstrap al posto delle emoji per uno stile più professionale.

### 🎨 Animazioni e microinterazioni

- Animazione `fadeInUp` nella Hero.
- Ingresso sequenziale di titolo, sottotitolo e CTA.
- Hover personalizzato sulla Call to Action.
- Card con movimento verticale e ombre dinamiche.
- Transizioni leggere sui componenti.
- Cambio di colore e ombra della navbar dopo lo scorrimento della Hero.
- Personalizzazione degli stati hover e focus.

### 🎨 Componenti Bootstrap personalizzati

Sono stati personalizzati diversi componenti attraverso SCSS:

- `.btn-primary`
- `.btn-outline-primary`
- `.bg-primary`
- `.text-primary`
- `.card`
- `.modal`
- `.badge`

La personalizzazione mantiene il comportamento nativo di Bootstrap, evitando di ricostruire manualmente componenti già disponibili.

---

## Architettura SCSS

Il progetto utilizza un'organizzazione modulare tramite partials SASS.

```text
assets/
├── css/
│   └── style.css
├── img/
│   └── immagini dei progetti
├── js/
│   └── script.js
└── sass/
    ├── _colors.scss
    ├── _variables.scss
    ├── _mixins.scss
    ├── _components.scss
    └── style.scss

index.html
README.md
```

### Responsabilità dei file

| File | Contenuto |
|---|---|
| `_colors.scss` | Palette, colori dei componenti e tema scuro |
| `_variables.scss` | Border-radius, transizioni e valori di animazione |
| `_mixins.scss` | Mixin riutilizzabili e responsive |
| `_components.scss` | Personalizzazioni dei componenti Bootstrap |
| `style.scss` | Stili delle sezioni, nesting e animazioni |

### Mixin utilizzati

**`card-elevata`**

Mixin riutilizzato nelle sezioni Servizi, Lavori e Team per applicare ombre, transizioni ed effetti hover uniformi.

**`solo-su($bp)`**

Mixin parametrico per generare media query responsive, utilizzato in più punti dello SCSS.

Il collegamento tra i partials avviene tramite `@use`, mantenendo separati gli ambiti delle variabili.

---

## Responsive Design

Il progetto segue l'approccio mobile-first di Bootstrap.

| Breakpoint | Larghezza |
|---|---|
| XS | Inferiore a 576 px |
| SM | Da 576 px |
| MD | Da 768 px |
| LG | Da 992 px |
| XL | Da 1200 px |

Le sezioni sfruttano il Grid System Bootstrap per adattarsi ai diversi dispositivi.

In particolare:

- Navbar con menu hamburger sotto i 768 px.
- Card dei Lavori disposte su 1, 2 o 3 colonne.
- Filtri responsive con Radio Toggle Button.
- Carousel nascosto sui dispositivi più piccoli.
- Modali adattabili allo spazio disponibile.
- Footer a una colonna su mobile e tre colonne da MD.

---

## Accessibilità e usabilità

Il progetto integra diversi accorgimenti:

- Utilizzo di tag HTML semantici.
- Attributi `alt` per le immagini.
- Etichette associate ai campi del form.
- Attributi ARIA nei componenti interattivi.
- Navigazione tramite elementi HTML appropriati.
- Feedback visivi per la validazione.
- Stati focus e hover.
- Supporto a `prefers-reduced-motion` per ridurre le animazioni.
- Personalizzazioni del contrasto in Dark Mode.

---

## Avvio del progetto

Il sito può essere avviato localmente utilizzando Visual Studio Code e Live Server.

Per compilare automaticamente i file SASS, eseguire dalla cartella principale del progetto:

```bash
npx sass assets/sass/style.scss assets/css/style.css --watch
```

Il compilatore aggiorna `style.css` a ogni modifica dei file SCSS.

Bootstrap e Bootstrap Icons vengono caricati tramite CDN.

---

## Conclusioni

Atelier rappresenta l'evoluzione del progetto **Bloom — Studio di Design**, realizzato durante la Settimana V.

La nuova versione introduce Bootstrap e SASS, mantenendo una struttura semantica ordinata e ampliando le funzionalità con JavaScript.

Particolare attenzione è stata dedicata a:

- Riutilizzo e modularità del codice.
- Gestione dinamica dei contenuti.
- Utilizzo dei componenti Bootstrap.
- Responsive design.
- Coerenza grafica tra Light Mode e Dark Mode.
- Esperienza utente attraverso animazioni e interazioni.

**Obiettivo raggiunto:** integrare HTML, Bootstrap, SASS e JavaScript in un progetto aziendale completo, personalizzato e facilmente ampliabile.

---

**Progetto realizzato per EPICODE — Week Project, Settimana VI.**
