import SceneGallery from "./SceneGallery";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const researchThemes = [
  {
    number: "01",
    title: "Observe the environment",
    text: "A small train-mounted camera and edge computer could support OpenCV demonstrations such as vegetation and trackside object detection.",
    tags: ["Computer vision", "Edge computing", "OpenCV"],
  },
  {
    number: "02",
    title: "Understand passengers",
    text: "Passenger comments about delays and service events create an intuitive story for natural language processing and sentiment analysis.",
    tags: ["NLP", "Sentiment analysis", "Data visualization"],
  },
  {
    number: "03",
    title: "Monitor comfort and safety",
    text: "Inertial and wireless sensors can translate movement, vibration and other time-series signals into live indicators and analytics.",
    tags: ["Industrial IoT", "Sensor data", "Time series"],
  },
  {
    number: "04",
    title: "Predict and automate",
    text: "A controlled railway environment supports train logistics, predictive maintenance, automated management and AI-assisted decisions.",
    tags: ["Artificial intelligence", "Predictive analytics", "Automation"],
  },
];

const scenes = [
  {
    number: "01",
    title: "Capital station",
    text: "An Ottawa-inspired passenger station and passenger rail setting.",
    image: "/images/scene-capital-station.jpg",
    alt: "Ottawa-inspired Capital Station behind a landscaped rail curve and stone bridge",
  },
  {
    number: "02",
    title: "Mountain passage",
    text: "Tunnels, bridge, forest, winter and autumn terrain, plus a ski lift and chalet.",
    image: "/images/scene-mountain-passage.jpg",
    alt: "Freight train crossing the bridge between two mountain tunnels",
  },
  {
    number: "03",
    title: "Urban corridor",
    text: "A Montréal-inspired city scene with a station running beneath the hotel.",
    image: "/images/scene-urban-corridor.jpg",
    alt: "Montréal-inspired urban corridor with buildings, curved track and street scene",
  },
  {
    number: "04",
    title: "Port and rail yard",
    text: "Container handling, switching tracks and a port setting recalling Montréal.",
    image: "/images/scene-port-rail-yard.jpg",
    alt: "Yellow container gantry spanning the switching tracks beside the port",
  },
  {
    number: "05",
    title: "Prairie industry",
    text: "A grain elevator, wheat field and agricultural buildings linked to the railway.",
    image: "/images/scene-prairie-industry.jpg",
    alt: "Grain elevator beside railway tracks and the surrounding miniature landscape",
  },
  {
    number: "06",
    title: "Industrial district",
    text: "Liquid storage tanks, roads, a level crossing and freight infrastructure.",
    image: "/images/scene-industrial-district.jpg",
    alt: "Industrial district with storage tanks, roads, railway tracks and city buildings",
  },
];

const included = [
  "Approximately 30 numbered modular landscape sections",
  "A matching transport crate for every section",
  "A custom two-section support table with ten wheeled legs, three additional centre-span supports and adjustable module-levelling points",
  "Digitrax DCC railway control system",
  "VIA Rail passenger and CN freight locomotives with lights and sound",
  "Passenger and freight rolling stock, including 3D-printed containers",
];

const futureWork = [
  "Computers, networking equipment and research sensors are not included",
  "Turnouts are installed; Tortoise motor programming remains to be completed",
  "A new owner can define and integrate its own digital demonstration stack",
  "The ski lift is the most fragile scenic element and requires careful handling",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="overview">
        <header className="site-header">
          <a className="wordmark" href="#overview" aria-label="Research Rail Diorama home">
            <span className="signal-dot" />
            Research Rail Diorama
          </a>
          <nav aria-label="Primary navigation">
            <a className="active" href="#overview">Overview</a>
            <a href="#technology">Technology</a>
            <a href="#transfer">Transfer</a>
          </nav>
        </header>

        <img
          className="hero-image"
          src="/images/diorama-mountain.jpg"
          alt="Detailed mountain and tunnel section of the HO-scale train diorama"
        />
        <div className="hero-shade" />
        <div className="data-grid data-grid-one" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Digital Technologies demonstration platform</p>
          <h1>A research platform, ready for its next chapter.</h1>
          <p className="hero-lede">
            A highly detailed, modular HO-scale Canadian railway diorama created
            to bring research in data, AI, industrial IoT and automation to life.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#diorama">
              Explore the diorama <ArrowIcon />
            </a>
            <a className="button button-quiet" href="#transfer">
              View transfer details <ArrowIcon />
            </a>
          </div>
          <p className="audience-note">
            <span aria-hidden="true">◉</span>
            For museums, academia and model railway organizations
          </p>
        </div>

        <div className="hero-facts" aria-label="Key diorama characteristics">
          <div><strong>≈30</strong><span>Modular sections</span></div>
          <div><strong>HO</strong><span>Scale railway</span></div>
          <div><strong>DCC</strong><span>Digitrax control</span></div>
          <div><strong>Included</strong><span>Crates and custom table</span></div>
        </div>

        <a className="photo-link" href="#process">
          See how the platform was built <ArrowIcon />
        </a>
      </section>

      <section className="intro section" id="diorama">
        <div className="section-heading">
          <p className="section-kicker">The platform</p>
          <h2>A five-minute story about the breadth of digital research.</h2>
        </div>
        <div className="intro-copy">
          <p className="large-copy">
            The diorama was conceived as a physical storytelling environment: a
            familiar railway world where complex research could be made visible,
            tangible and memorable.
          </p>
          <p>
            Its landscapes connect passenger travel, freight logistics, cities,
            natural environments and industrial operations. The result is a
            flexible foundation for demonstrations, teaching, exhibitions or a
            fully developed model railway experience.
          </p>
          <p>
            The original concept was to communicate the breadth of Digital
            Technologies research in about five minutes, using a working physical
            system that visitors could immediately understand.
          </p>
        </div>
      </section>

      <section className="technology section" id="technology">
        <div className="tech-heading">
          <div>
            <p className="section-kicker">Original research vision</p>
            <h2>One physical platform.<br />Many digital narratives.</h2>
          </div>
          <p>
            These themes describe the platform&apos;s intended demonstration potential.
            The research stories were design concepts. The computers, cameras,
            networking and sensors needed to implement them are not part of the
            current transfer package.
          </p>
        </div>
        <div className="theme-grid">
          {researchThemes.map((theme) => (
            <article className="theme-card" key={theme.number}>
              <span className="card-number">{theme.number}</span>
              <h3>{theme.title}</h3>
              <p>{theme.text}</p>
              <ul aria-label={`${theme.title} topics`}>
                {theme.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="scenes section" id="scenes">
        <div className="section-heading scenes-heading">
          <p className="section-kicker">A Canadian landscape in miniature</p>
          <h2>From mountain tunnels to the port.</h2>
          <p>
            Detailed, interconnected scenes create a varied setting for passenger
            operations, freight movements and technology demonstrations.
          </p>
        </div>
        <div className="scene-layout">
          <figure className="scene-image-wrap">
            <img src="/images/diorama-mountain.jpg" alt="Mountain, tunnels, bridge and autumn forest details on the diorama" />
            <figcaption><span>Actual diorama</span> Mountain and tunnel zone</figcaption>
          </figure>
          <SceneGallery scenes={scenes} />
        </div>
      </section>

      <section className="transfer section" id="transfer">
        <div className="transfer-visual">
          <figure className="transfer-main">
            <img
              src="/images/table-support-system.png"
              alt="Two-section aluminum support table showing its wheeled legs and additional supports beneath the centre span"
            />
            <figcaption className="image-label"><span>Support structure</span> Actual two-section table without the diorama modules</figcaption>
          </figure>
          <div className="transfer-details">
            <figure>
              <img src="/images/table-leveling-detail.jpg" alt="Adjustable levelling screws beneath a numbered diorama module attached to the aluminum support frame" />
              <figcaption><span>Adjustable</span> Module 29 and its levelling points</figcaption>
            </figure>
            <figure>
              <img src="/images/module-identification-evidence.jpg" alt="Cropped underside view showing the embossed number 29 on a diorama module" />
              <figcaption><span>Identified</span> Embossed module numbering</figcaption>
            </figure>
            <figure>
              <img src="/images/transport-crates.jpg" alt="Custom transport crates containing modular diorama sections" />
              <figcaption><span>Protected</span> Matching transport crates</figcaption>
            </figure>
          </div>
        </div>
        <div className="transfer-copy">
          <p className="section-kicker">Built to relocate</p>
          <h2>The entire environment was engineered for transfer.</h2>
          <p className="large-copy">
            Each landscape section is numbered and paired with a custom wooden
            transport crate. A massive, purpose-built table provides the flat,
            rigid foundation required to align the complete railway. The table
            separates into two main sections for relocation. Adjustable supports
            beneath the numbered modules make it possible to establish a continuous,
            level surface, which is pivotal to precise track and scenery alignment
            at every module boundary.
          </p>
          <div className="transfer-specs">
            <div><strong>Modular</strong><span>Sections pass through standard doors</span></div>
            <div><strong>Protected</strong><span>Dedicated crates simplify handling</span></div>
            <div><strong>Mobile</strong><span>Each table section has four corner legs on casters and a fifth wheeled leg at its centre</span></div>
            <div><strong>Reinforced</strong><span>Three additional legs support the central span where the two sections meet</span></div>
            <div><strong>Levelled</strong><span>Individual adjustment points establish a common plane across all numbered modules</span></div>
          </div>
        </div>
      </section>

      <section className="package section">
        <div className="section-heading package-heading">
          <p className="section-kicker">Transfer package</p>
          <h2>What is ready now, and where a new owner can take it.</h2>
        </div>
        <div className="package-columns">
          <article>
            <div className="package-title"><span className="status status-ready" /> <h3>Included</h3></div>
            <ul>{included.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
          <article>
            <div className="package-title"><span className="status status-open" /> <h3>Opportunity for continuation</h3></div>
            <ul>{futureWork.map((item) => <li key={item}>{item}</li>)}</ul>
          </article>
        </div>
        <p className="operating-note">
          <span>Last verified state</span>
          The locomotives operated across the complete layout, with two-train
          operation available through the DCC system. Both locomotives include
          lights and sound. Only the locomotives are illuminated.
        </p>
      </section>

      <section className="process section" id="process">
        <div className="section-heading process-heading">
          <p className="section-kicker">Designed, fabricated and detailed</p>
          <h2>A serious piece of exhibition infrastructure.</h2>
        </div>
        <div className="process-grid">
          <figure className="process-large">
            <img src="/images/terrain-fabrication.jpg" alt="Large terrain profile being fabricated for the diorama" />
            <figcaption><span>01</span> Terrain development</figcaption>
          </figure>
          <figure>
            <img src="/images/terrain-cad.jpg" alt="Digital terrain model used in the diorama design process" />
            <figcaption><span>02</span> Digital design</figcaption>
          </figure>
          <figure className="crop-person">
            <img src="/images/module-fabrication.jpg" alt="A modular terrain section during fabrication" />
            <figcaption><span>03</span> Modular fabrication</figcaption>
          </figure>
          <figure>
            <img src="/images/table-support-system.png" alt="Actual aluminum table structure supporting the modular diorama" />
            <figcaption><span>04</span> Structural foundation</figcaption>
          </figure>
        </div>
      </section>

      <section className="cta section">
        <div className="cta-grid" aria-hidden="true" />
        <p className="section-kicker">Available for transfer</p>
        <h2>Give this platform its next chapter.</h2>
        <p>
          The diorama could become a museum exhibit, an academic teaching and
          research platform, or the centrepiece of a model railway organization.
          Its modular construction preserves the option to reinterpret the digital
          stories while keeping the completed Canadian landscape intact.
        </p>
        <div className="cta-actions">
          <a className="button button-primary" href="#scenes">
            Review the diorama highlights <ArrowIcon />
          </a>
          <span className="coming-soon">Detailed one-pager · Coming soon</span>
        </div>
      </section>

      <footer>
        <a className="wordmark" href="#overview"><span className="signal-dot" />Research Rail Diorama</a>
        <p>Originally created to demonstrate research capabilities in Digital Technologies.</p>
        <a href="#overview">Back to top ↑</a>
      </footer>
    </main>
  );
}
