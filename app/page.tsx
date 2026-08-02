"use client";

import { useEffect, useState } from "react";
import SceneGallery from "./SceneGallery";

type Language = "en" | "fr";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const copy = {
  en: {
    documentTitle: "Research Rail Diorama | Available for Transfer",
    homeLabel: "Research Rail Diorama home",
    navigationLabel: "Primary navigation",
    nav: ["Overview", "Technology", "Transfer"],
    heroAlt: "Detailed mountain and tunnel section of the HO-scale train diorama",
    eyebrow: "Digital Technologies demonstration platform",
    heroTitle: "A research platform, ready for its next chapter.",
    heroLede: "A highly detailed, modular HO-scale Canadian railway diorama created to bring research in data, AI, industrial IoT and automation to life.",
    explore: "Explore the diorama",
    transferDetails: "View transfer details",
    audience: "For museums, academia and model railway organizations",
    factsLabel: "Key diorama characteristics",
    facts: [["≈30", "Modular sections"], ["HO", "Scale railway"], ["DCC", "Digitrax control"], ["Included", "Crates and custom table"]],
    builtLink: "See how the platform was built",
    platformKicker: "The platform",
    platformTitle: "A five-minute story about the breadth of digital research.",
    platformLarge: "The diorama was conceived as a physical storytelling environment: a familiar railway world where complex research could be made visible, tangible and memorable.",
    platformBody1: "Its landscapes connect passenger travel, freight logistics, cities, natural environments and industrial operations. The result is a flexible foundation for demonstrations, teaching, exhibitions or a fully developed model railway experience.",
    platformBody2: "The original concept was to communicate the breadth of Digital Technologies research in about five minutes, using a working physical system that visitors could immediately understand.",
    researchKicker: "Original research vision",
    researchTitle: <>One physical platform.<br />Many digital narratives.</>,
    researchIntro: "These themes describe the platform's intended demonstration potential. The research stories were design concepts. The computers, cameras, networking and sensors needed to implement them are not part of the current transfer package.",
    researchThemes: [
      { number: "01", title: "Observe the environment", text: "A small train-mounted camera and edge computer could support OpenCV demonstrations such as vegetation and trackside object detection.", tags: ["Computer vision", "Edge computing", "OpenCV"] },
      { number: "02", title: "Understand passengers", text: "Passenger comments about delays and service events create an intuitive story for natural language processing and sentiment analysis.", tags: ["NLP", "Sentiment analysis", "Data visualization"] },
      { number: "03", title: "Monitor comfort and safety", text: "Inertial and wireless sensors can translate movement, vibration and other time-series signals into live indicators and analytics.", tags: ["Industrial IoT", "Sensor data", "Time series"] },
      { number: "04", title: "Predict and automate", text: "A controlled railway environment supports train logistics, predictive maintenance, automated management and AI-assisted decisions.", tags: ["Artificial intelligence", "Predictive analytics", "Automation"] },
    ],
    topicsSuffix: "topics",
    academicKicker: "Academic collaboration",
    academicTitle: "Developed through student learning and applied research.",
    academicLarge: "Multiple undergraduate students contributed to different aspects of the platform over successive academic terms, turning the diorama into a shared environment for hands-on development and demonstration.",
    academicBody: "Students could develop, integrate and test ideas spanning Industrial IoT, data analytics, artificial intelligence, computer vision, automation and train logistics. Their work also included communicating term results in a conference format, connecting practical engineering with presentation, discussion and knowledge sharing.",
    academicAlt: "An undergraduate student presenting term results about an Industrial IoT platform in a conference setting",
    academicLabel: "Student-led development",
    academicCaption: "Undergraduate term results shared in a conference format",
    scenesKicker: "A Canadian landscape in miniature",
    scenesTitle: "From mountain tunnels to the port.",
    scenesIntro: "Detailed, interconnected scenes create a varied setting for passenger operations, freight movements and technology demonstrations.",
    mountainAlt: "Mountain, tunnels, bridge and autumn forest details on the diorama",
    actualDiorama: "Actual diorama",
    mountainCaption: "Mountain and tunnel zone",
    scenes: [
      { number: "01", title: "Capital station", text: "An Ottawa-inspired passenger station and passenger rail setting.", image: "/images/scene-capital-station.jpg", alt: "Ottawa-inspired Capital Station behind a landscaped rail curve and stone bridge" },
      { number: "02", title: "Mountain passage", text: "Tunnels, bridge, forest, winter and autumn terrain, plus a ski lift and chalet.", image: "/images/scene-mountain-passage.jpg", alt: "Freight train crossing the bridge between two mountain tunnels" },
      { number: "03", title: "Urban corridor", text: "A Montréal-inspired city scene with a station running beneath the hotel.", image: "/images/scene-urban-corridor.jpg", alt: "Montréal-inspired urban corridor with buildings, curved track and street scene" },
      { number: "04", title: "Port and rail yard", text: "Container handling, switching tracks and a port setting recalling Montréal.", image: "/images/scene-port-rail-yard.jpg", alt: "Yellow container gantry spanning the switching tracks beside the port" },
      { number: "05", title: "Prairie industry", text: "A grain elevator, wheat field and agricultural buildings linked to the railway.", image: "/images/scene-prairie-industry.jpg", alt: "Grain elevator beside railway tracks and the surrounding miniature landscape" },
      { number: "06", title: "Industrial district", text: "Liquid storage tanks, roads, a level crossing and freight infrastructure.", image: "/images/scene-industrial-district.jpg", alt: "Industrial district with storage tanks, roads, railway tracks and city buildings" },
    ],
    gallery: {
      open: "Open full-size image",
      view: "View",
      dialog: "Diorama scene gallery",
      close: "Close image gallery",
      previous: "Previous image",
      next: "Next image",
      routeKicker: "Railway operation",
      routeTitle: "A two-level route built for varied movement.",
      routeText: "The network follows a figure-eight-like arrangement with a large loop, passing tracks near the passenger station and grain elevator, a descent beneath the hotel, and a switching yard beside the port. Its last verified operation supported both trains across the layout.",
    },
    transfer: {
      mainAlt: "Two-section aluminum support table showing its wheeled legs and additional supports beneath the centre span",
      mainLabel: "Support structure",
      mainCaption: "Actual two-section table without the diorama modules",
      levelAlt: "Adjustable levelling screws beneath a numbered diorama module attached to the aluminum support frame",
      levelLabel: "Adjustable",
      levelCaption: "Module levelling points",
      idAlt: "Cropped underside view showing an embossed identifier on a diorama module",
      idLabel: "Identified",
      idCaption: "Embossed module numbering",
      crateAlt: "Custom transport crates containing modular diorama sections",
      crateLabel: "Protected",
      crateCaption: "Matching transport crates",
      kicker: "Built to relocate",
      title: "The entire environment was engineered for transfer.",
      text: "Each landscape section is numbered and paired with a custom wooden transport crate. A massive, purpose-built table provides the flat, rigid foundation required to align the complete railway. The table separates into two main sections for relocation. Adjustable supports beneath the numbered modules make it possible to establish a continuous, level surface, which is pivotal to precise track and scenery alignment at every module boundary.",
      specs: [["Modular", "Sections pass through standard doors"], ["Protected", "Dedicated crates simplify handling"], ["Mobile", "Each table section has four corner legs on casters and a fifth wheeled leg at its centre"], ["Reinforced", "Three additional legs support the central span where the two sections meet"], ["Levelled", "Individual adjustment points establish a common plane across all numbered modules"]],
    },
    packageKicker: "Transfer package",
    packageTitle: "What is ready now, and where a new owner can take it.",
    includedTitle: "Included",
    included: ["Approximately 30 numbered modular landscape sections", "A matching transport crate for every section", "A custom two-section support table with ten wheeled legs, three additional centre-span supports and adjustable module-levelling points", "Digitrax DCC railway control system", "VIA Rail passenger and CN freight locomotives with lights and sound", "Passenger and freight rolling stock, including 3D-printed containers"],
    futureTitle: "Opportunity for continuation",
    future: ["Computers, networking equipment and research sensors are not included", "Turnouts are installed; Tortoise motor programming remains to be completed", "A new owner can define and integrate its own digital demonstration stack", "The ski lift is the most fragile scenic element and requires careful handling"],
    verifiedLabel: "Last verified state",
    verifiedText: "The locomotives operated across the complete layout, with two-train operation available through the DCC system. Both locomotives include lights and sound. Only the locomotives are illuminated.",
    processKicker: "Designed, fabricated and detailed",
    processTitle: "A serious piece of exhibition infrastructure.",
    process: ["Terrain development", "Digital design", "Modular fabrication", "Structural foundation"],
    processAlt: ["Large terrain profile being fabricated for the diorama", "Digital terrain model used in the diorama design process", "A modular terrain section during fabrication", "Actual aluminum table structure supporting the modular diorama"],
    ctaKicker: "Available for transfer",
    ctaTitle: "Give this platform its next chapter.",
    ctaText: "The diorama could become a museum exhibit, an academic teaching and research platform, or the centrepiece of a model railway organization. Its modular construction preserves the option to reinterpret the digital stories while keeping the completed Canadian landscape intact.",
    highlights: "Review the diorama highlights",
    comingSoon: "Detailed one-pager · Coming soon",
    footerStatement: "Originally created to demonstrate research capabilities in Digital Technologies.",
    backToTop: "Back to top ↑",
    aiTitle: "AI-assisted production",
    aiNotice: "Generative AI tools supported the production of this website. All published content was reviewed and validated by a human for accuracy, clarity and relevance.",
    switchLanguage: "Français",
    switchLabel: "Afficher le site en français",
  },
  fr: {
    documentTitle: "Diorama ferroviaire de recherche | Offert pour transfert",
    homeLabel: "Accueil du diorama ferroviaire de recherche",
    navigationLabel: "Navigation principale",
    nav: ["Aperçu", "Technologies", "Transfert"],
    heroAlt: "Section détaillée avec montagne et tunnel du diorama ferroviaire à l'échelle HO",
    eyebrow: "Plateforme de démonstration en technologies numériques",
    heroTitle: "Une plateforme de recherche prête pour son prochain chapitre.",
    heroLede: "Un diorama ferroviaire canadien à l'échelle HO, modulaire et très détaillé, conçu pour donner vie à la recherche en données, en IA, en IIoT et en automatisation.",
    explore: "Explorer le diorama",
    transferDetails: "Voir les détails du transfert",
    audience: "Pour les musées, le milieu universitaire et les organisations de modélisme ferroviaire",
    factsLabel: "Principales caractéristiques du diorama",
    facts: [["≈30", "Sections modulaires"], ["HO", "Échelle ferroviaire"], ["DCC", "Commande Digitrax"], ["Inclus", "Caisses et table sur mesure"]],
    builtLink: "Voir comment la plateforme a été construite",
    platformKicker: "La plateforme",
    platformTitle: "Un récit de cinq minutes sur l'étendue de la recherche numérique.",
    platformLarge: "Le diorama a été conçu comme un environnement physique de mise en récit, soit un univers ferroviaire familier où la recherche complexe pouvait devenir visible, tangible et mémorable.",
    platformBody1: "Ses paysages relient le transport de passagers, la logistique du fret, les villes, les milieux naturels et les activités industrielles. Il constitue ainsi une base souple pour les démonstrations, l'enseignement, les expositions ou une expérience complète de modélisme ferroviaire.",
    platformBody2: "Le concept initial visait à présenter l'étendue de la recherche en technologies numériques en environ cinq minutes, au moyen d'un système physique fonctionnel que les visiteurs pouvaient comprendre immédiatement.",
    researchKicker: "Vision de recherche initiale",
    researchTitle: <>Une plateforme physique.<br />Plusieurs récits numériques.</>,
    researchIntro: "Ces thèmes décrivent le potentiel de démonstration prévu de la plateforme. Les scénarios de recherche étaient des concepts de conception. Les ordinateurs, caméras, équipements réseau et capteurs nécessaires à leur mise en œuvre ne font pas partie de l'ensemble offert pour transfert.",
    researchThemes: [
      { number: "01", title: "Observer l'environnement", text: "Une petite caméra installée sur un train et un ordinateur en périphérie pourraient soutenir des démonstrations OpenCV, notamment la détection de végétation et d'objets en bordure de voie.", tags: ["Vision par ordinateur", "Informatique en périphérie", "OpenCV"] },
      { number: "02", title: "Comprendre les passagers", text: "Les commentaires de passagers sur les retards et les incidents de service offrent un scénario intuitif pour le traitement du langage naturel et l'analyse des sentiments.", tags: ["TLN", "Analyse des sentiments", "Visualisation de données"] },
      { number: "03", title: "Surveiller le confort et la sécurité", text: "Des capteurs inertiels et sans fil peuvent transformer le mouvement, les vibrations et d'autres signaux chronologiques en indicateurs et analyses en temps réel.", tags: ["IIoT", "Données de capteurs", "Séries chronologiques"] },
      { number: "04", title: "Prédire et automatiser", text: "Un environnement ferroviaire contrôlé soutient la logistique des trains, l'entretien prédictif, la gestion automatisée et les décisions assistées par l'IA.", tags: ["Intelligence artificielle", "Analyse prédictive", "Automatisation"] },
    ],
    topicsSuffix: "sujets",
    academicKicker: "Collaboration universitaire",
    academicTitle: "Développée par l'apprentissage étudiant et la recherche appliquée.",
    academicLarge: "Plusieurs étudiants de premier cycle ont contribué à différents aspects de la plateforme au fil de leurs trimestres universitaires, faisant du diorama un environnement commun de développement pratique et de démonstration.",
    academicBody: "Les étudiants pouvaient développer, intégrer et tester des idées en IIoT, en analyse de données, en intelligence artificielle, en vision par ordinateur, en automatisation et en logistique ferroviaire. Ils ont aussi présenté les résultats de leur trimestre dans un contexte de type conférence, reliant l'ingénierie pratique à la présentation, à la discussion et au partage des connaissances.",
    academicAlt: "Un étudiant de premier cycle présente les résultats de son trimestre sur une plateforme IIoT dans un contexte de conférence",
    academicLabel: "Développement dirigé par les étudiants",
    academicCaption: "Résultats d'un trimestre de premier cycle présentés dans un contexte de conférence",
    scenesKicker: "Un paysage canadien en miniature",
    scenesTitle: "Des tunnels en montagne jusqu'au port.",
    scenesIntro: "Des scènes détaillées et interreliées créent un décor varié pour les activités voyageurs, les mouvements de marchandises et les démonstrations technologiques.",
    mountainAlt: "Détails de montagne, de tunnels, de pont et de forêt automnale sur le diorama",
    actualDiorama: "Diorama réel",
    mountainCaption: "Zone de montagne et de tunnels",
    scenes: [
      { number: "01", title: "Gare de la capitale", text: "Une gare de passagers inspirée d'Ottawa dans un environnement ferroviaire voyageurs.", image: "/images/scene-capital-station.jpg", alt: "Gare de la capitale inspirée d'Ottawa derrière une courbe ferroviaire paysagée et un pont de pierre" },
      { number: "02", title: "Passage en montagne", text: "Des tunnels, un pont, une forêt, des paysages d'hiver et d'automne, ainsi qu'une remontée mécanique et un chalet.", image: "/images/scene-mountain-passage.jpg", alt: "Train de marchandises traversant le pont entre deux tunnels en montagne" },
      { number: "03", title: "Corridor urbain", text: "Une scène urbaine inspirée de Montréal avec une gare sous l'hôtel.", image: "/images/scene-urban-corridor.jpg", alt: "Corridor urbain inspiré de Montréal avec immeubles, voie courbe et scène de rue" },
      { number: "04", title: "Port et cour de triage", text: "Manutention de conteneurs, voies de triage et environnement portuaire évoquant Montréal.", image: "/images/scene-port-rail-yard.jpg", alt: "Portique jaune de manutention de conteneurs au-dessus des voies de triage près du port" },
      { number: "05", title: "Industrie des Prairies", text: "Un élévateur à grain, un champ de blé et des bâtiments agricoles reliés au chemin de fer.", image: "/images/scene-prairie-industry.jpg", alt: "Élévateur à grain près des voies ferrées et du paysage miniature environnant" },
      { number: "06", title: "Secteur industriel", text: "Des réservoirs de liquides, des routes, un passage à niveau et des infrastructures de fret.", image: "/images/scene-industrial-district.jpg", alt: "Secteur industriel avec réservoirs, routes, voies ferrées et immeubles urbains" },
    ],
    gallery: {
      open: "Ouvrir l'image en pleine grandeur",
      view: "Voir",
      dialog: "Galerie des scènes du diorama",
      close: "Fermer la galerie d'images",
      previous: "Image précédente",
      next: "Image suivante",
      routeKicker: "Exploitation ferroviaire",
      routeTitle: "Un parcours sur deux niveaux conçu pour varier les mouvements.",
      routeText: "Le réseau adopte une configuration rappelant un huit, avec une grande boucle, des voies d'évitement près de la gare voyageurs et de l'élévateur à grain, une descente sous l'hôtel et une cour de triage près du port. Lors de la dernière vérification, les deux trains pouvaient circuler sur l'ensemble du réseau.",
    },
    transfer: {
      mainAlt: "Table de soutien en aluminium en deux sections montrant les pattes sur roulettes et les supports supplémentaires sous la portée centrale",
      mainLabel: "Structure de soutien",
      mainCaption: "Table réelle en deux sections sans les modules du diorama",
      levelAlt: "Vis de mise à niveau réglables sous un module numéroté fixé au cadre de soutien en aluminium",
      levelLabel: "Réglable",
      levelCaption: "Points de mise à niveau des modules",
      idAlt: "Vue rapprochée du dessous montrant un identifiant en relief sur un module du diorama",
      idLabel: "Identifié",
      idCaption: "Numérotation en relief des modules",
      crateAlt: "Caisses de transport sur mesure contenant des sections modulaires du diorama",
      crateLabel: "Protégé",
      crateCaption: "Caisses de transport correspondantes",
      kicker: "Conçu pour être déplacé",
      title: "L'ensemble de l'environnement a été conçu pour le transfert.",
      text: "Chaque section de paysage est numérotée et jumelée à une caisse de transport en bois sur mesure. Une table massive conçue spécialement fournit la base plane et rigide nécessaire à l'alignement de tout le réseau. La table se sépare en deux sections principales pour le déplacement. Des supports réglables sous les modules numérotés permettent d'établir une surface continue et de niveau, ce qui est essentiel à l'alignement précis des voies et des décors à chaque jonction.",
      specs: [["Modulaire", "Les sections passent par des portes standards"], ["Protégé", "Les caisses dédiées simplifient la manutention"], ["Mobile", "Chaque section de table compte quatre pattes d'angle sur roulettes et une cinquième patte centrale sur roulettes"], ["Renforcé", "Trois pattes supplémentaires soutiennent la portée centrale où les deux sections se rejoignent"], ["Mis à niveau", "Des points de réglage individuels établissent un plan commun pour tous les modules numérotés"]],
    },
    packageKicker: "Ensemble offert pour transfert",
    packageTitle: "Ce qui est prêt maintenant et les possibilités pour un nouveau propriétaire.",
    includedTitle: "Inclus",
    included: ["Environ 30 sections de paysage modulaires numérotées", "Une caisse de transport correspondante pour chaque section", "Une table de soutien sur mesure en deux sections avec dix pattes sur roulettes, trois supports supplémentaires sous la portée centrale et des points réglables de mise à niveau", "Système de commande ferroviaire DCC Digitrax", "Locomotives voyageurs VIA Rail et de marchandises CN avec éclairage et son", "Voitures voyageurs et wagons de marchandises, y compris des conteneurs imprimés en 3D"],
    futureTitle: "Possibilités de continuation",
    future: ["Les ordinateurs, équipements réseau et capteurs de recherche ne sont pas inclus", "Les aiguillages sont installés, mais la programmation des moteurs Tortoise reste à terminer", "Un nouveau propriétaire peut définir et intégrer sa propre plateforme de démonstration numérique", "La remontée mécanique est l'élément de décor le plus fragile et exige une manutention soignée"],
    verifiedLabel: "Dernier état vérifié",
    verifiedText: "Les locomotives circulaient sur l'ensemble du réseau, et le système DCC permettait l'exploitation de deux trains. Les deux locomotives sont dotées d'éclairage et de son. Seules les locomotives sont éclairées.",
    processKicker: "Conçu, fabriqué et détaillé",
    processTitle: "Une véritable infrastructure d'exposition.",
    process: ["Développement du terrain", "Conception numérique", "Fabrication modulaire", "Fondation structurelle"],
    processAlt: ["Grand profil de terrain en cours de fabrication pour le diorama", "Modèle numérique du terrain utilisé durant la conception du diorama", "Section de terrain modulaire pendant la fabrication", "Structure réelle de la table en aluminium soutenant le diorama modulaire"],
    ctaKicker: "Offert pour transfert",
    ctaTitle: "Donnez un nouveau chapitre à cette plateforme.",
    ctaText: "Le diorama pourrait devenir une exposition muséale, une plateforme universitaire d'enseignement et de recherche ou la pièce maîtresse d'une organisation de modélisme ferroviaire. Sa construction modulaire permet de réinterpréter les récits numériques tout en préservant le paysage canadien achevé.",
    highlights: "Voir les points saillants du diorama",
    comingSoon: "Document détaillé · À venir",
    footerStatement: "Créé à l'origine pour démontrer des capacités de recherche en technologies numériques.",
    backToTop: "Retour en haut ↑",
    aiTitle: "Production assistée par l'IA",
    aiNotice: "Des outils d'intelligence artificielle générative ont contribué à la production de ce site Web. Tout le contenu publié a été révisé et validé par une personne afin d'en assurer l'exactitude, la clarté et la pertinence.",
    switchLanguage: "English",
    switchLabel: "Display the site in English",
  },
} as const;

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [languageReady, setLanguageReady] = useState(false);
  const content = copy[language];

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem("diorama-language");
    const timer = window.setTimeout(() => {
      if (savedLanguage === "fr") setLanguage("fr");
      setLanguageReady(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!languageReady) return;
    document.documentElement.lang = language;
    document.title = content.documentTitle;
    window.localStorage.setItem("diorama-language", language);
  }, [content.documentTitle, language, languageReady]);

  const toggleLanguage = () => {
    setLanguageReady(true);
    setLanguage((current) => current === "en" ? "fr" : "en");
  };

  return (
    <main>
      <section className="hero" id="overview">
        <header className="site-header">
          <a className="wordmark" href="#overview" aria-label={content.homeLabel}><span className="signal-dot" />Research Rail Diorama</a>
          <div className="header-actions">
            <nav aria-label={content.navigationLabel}>
              <a className="active" href="#overview">{content.nav[0]}</a>
              <a href="#technology">{content.nav[1]}</a>
              <a href="#transfer">{content.nav[2]}</a>
            </nav>
            <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={content.switchLabel}><span aria-hidden="true">文/A</span>{content.switchLanguage}</button>
          </div>
        </header>

        <img className="hero-image" src="/images/diorama-mountain.jpg" alt={content.heroAlt} />
        <div className="hero-shade" />
        <div className="data-grid data-grid-one" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">{content.eyebrow}</p>
          <h1>{content.heroTitle}</h1>
          <p className="hero-lede">{content.heroLede}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#diorama">{content.explore} <ArrowIcon /></a>
            <a className="button button-quiet" href="#transfer">{content.transferDetails} <ArrowIcon /></a>
          </div>
          <p className="audience-note"><span aria-hidden="true">◉</span>{content.audience}</p>
        </div>

        <div className="hero-facts" aria-label={content.factsLabel}>
          {content.facts.map(([value, label]) => <div key={label}><strong>{value}</strong><span>{label}</span></div>)}
        </div>
        <a className="photo-link" href="#process">{content.builtLink} <ArrowIcon /></a>
      </section>

      <section className="intro section" id="diorama">
        <div className="section-heading"><p className="section-kicker">{content.platformKicker}</p><h2>{content.platformTitle}</h2></div>
        <div className="intro-copy"><p className="large-copy">{content.platformLarge}</p><p>{content.platformBody1}</p><p>{content.platformBody2}</p></div>
      </section>

      <section className="technology section" id="technology">
        <div className="tech-heading">
          <div><p className="section-kicker">{content.researchKicker}</p><h2>{content.researchTitle}</h2></div>
          <p>{content.researchIntro}</p>
        </div>
        <div className="theme-grid">
          {content.researchThemes.map((theme) => (
            <article className="theme-card" key={theme.number}>
              <span className="card-number">{theme.number}</span><h3>{theme.title}</h3><p>{theme.text}</p>
              <ul aria-label={`${theme.title} ${content.topicsSuffix}`}>{theme.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="academic section" id="academic">
        <div className="academic-copy"><p className="section-kicker">{content.academicKicker}</p><h2>{content.academicTitle}</h2><p className="large-copy">{content.academicLarge}</p><p>{content.academicBody}</p></div>
        <figure className="academic-visual"><img src="/images/student-conference-presentation.jpg" alt={content.academicAlt} /><figcaption><span>{content.academicLabel}</span>{content.academicCaption}</figcaption></figure>
      </section>

      <section className="scenes section" id="scenes">
        <div className="section-heading scenes-heading"><p className="section-kicker">{content.scenesKicker}</p><h2>{content.scenesTitle}</h2><p>{content.scenesIntro}</p></div>
        <div className="scene-layout">
          <figure className="scene-image-wrap"><img src="/images/diorama-mountain.jpg" alt={content.mountainAlt} /><figcaption><span>{content.actualDiorama}</span>{content.mountainCaption}</figcaption></figure>
          <SceneGallery scenes={[...content.scenes]} labels={content.gallery} />
        </div>
      </section>

      <section className="transfer section" id="transfer">
        <div className="transfer-visual">
          <figure className="transfer-main"><img src="/images/table-support-system.png" alt={content.transfer.mainAlt} /><figcaption className="image-label"><span>{content.transfer.mainLabel}</span>{content.transfer.mainCaption}</figcaption></figure>
          <div className="transfer-details">
            <figure><img src="/images/table-leveling-detail.jpg" alt={content.transfer.levelAlt} /><figcaption><span>{content.transfer.levelLabel}</span>{content.transfer.levelCaption}</figcaption></figure>
            <figure><img src="/images/module-identification-evidence.jpg" alt={content.transfer.idAlt} /><figcaption><span>{content.transfer.idLabel}</span>{content.transfer.idCaption}</figcaption></figure>
            <figure><img src="/images/transport-crates.jpg" alt={content.transfer.crateAlt} /><figcaption><span>{content.transfer.crateLabel}</span>{content.transfer.crateCaption}</figcaption></figure>
          </div>
        </div>
        <div className="transfer-copy">
          <p className="section-kicker">{content.transfer.kicker}</p><h2>{content.transfer.title}</h2><p className="large-copy">{content.transfer.text}</p>
          <div className="transfer-specs">{content.transfer.specs.map(([label, text]) => <div key={label}><strong>{label}</strong><span>{text}</span></div>)}</div>
        </div>
      </section>

      <section className="package section">
        <div className="section-heading package-heading"><p className="section-kicker">{content.packageKicker}</p><h2>{content.packageTitle}</h2></div>
        <div className="package-columns">
          <article><div className="package-title"><span className="status status-ready" /><h3>{content.includedTitle}</h3></div><ul>{content.included.map((item) => <li key={item}>{item}</li>)}</ul></article>
          <article><div className="package-title"><span className="status status-open" /><h3>{content.futureTitle}</h3></div><ul>{content.future.map((item) => <li key={item}>{item}</li>)}</ul></article>
        </div>
        <p className="operating-note"><span>{content.verifiedLabel}</span>{content.verifiedText}</p>
      </section>

      <section className="process section" id="process">
        <div className="section-heading process-heading"><p className="section-kicker">{content.processKicker}</p><h2>{content.processTitle}</h2></div>
        <div className="process-grid">
          <figure className="process-large"><img src="/images/terrain-fabrication.jpg" alt={content.processAlt[0]} /><figcaption><span>01</span>{content.process[0]}</figcaption></figure>
          <figure><img src="/images/terrain-cad.jpg" alt={content.processAlt[1]} /><figcaption><span>02</span>{content.process[1]}</figcaption></figure>
          <figure className="crop-person"><img src="/images/module-fabrication.jpg" alt={content.processAlt[2]} /><figcaption><span>03</span>{content.process[2]}</figcaption></figure>
          <figure><img src="/images/table-support-system.png" alt={content.processAlt[3]} /><figcaption><span>04</span>{content.process[3]}</figcaption></figure>
        </div>
      </section>

      <section className="cta section">
        <div className="cta-grid" aria-hidden="true" /><p className="section-kicker">{content.ctaKicker}</p><h2>{content.ctaTitle}</h2><p>{content.ctaText}</p>
        <div className="cta-actions"><a className="button button-primary" href="#scenes">{content.highlights} <ArrowIcon /></a><span className="coming-soon">{content.comingSoon}</span></div>
      </section>

      <footer>
        <div className="footer-brand"><a className="wordmark" href="#overview"><span className="signal-dot" />Research Rail Diorama</a><p>{content.footerStatement}</p></div>
        <aside className="ai-notice" aria-labelledby="ai-notice-title"><span className="ai-mark" aria-hidden="true">AI</span><div><strong id="ai-notice-title">{content.aiTitle}</strong><p>{content.aiNotice}</p></div></aside>
        <div className="footer-actions">
          <a href="#overview">{content.backToTop}</a>
        </div>
      </footer>
    </main>
  );
}
