import React from "react";

import uspnLogo from "./logo/uspn.png";
import pxLogo from "./logo/px.png";

import cityImg from "./projects/city-mapper.png";
import BarnesHut from "./projects/barnes-hut.png";
import SocialMedia from "./projects/social-media.png";
import osm from "./projects/osm.png";
import bataille from "./projects/bataille-navale.png";
import bibliotheque from "./projects/bibliotheque.png";
import sopra from "./projects/sopra.png";
import pleine from "./projects/pleine.png";

import cafeWayImg from "./projects/cafe-way-of-life.png";
import rootmeImg from "./projects/root-me.png";

const SECTIONS = [
  { id: "presentation", label: "Présentation" },
  { id: "skills", label: "Compétences" },
  { id: "education", label: "Diplômes & Certifs" },
  { id: "experience", label: "Expériences" },
  { id: "projects", label: "Mes Projets" },
  { id: "hackathons", label: "Hackathons" },
];

function App() {
  return (
    <div className="app">
      <StarsBackground />
      <Header />
      <Nav />

      <main className="main">
        <Section id="presentation" title="Présentation">
          <Intro />
        </Section>

        <Section id="skills" title="Compétences techniques">
          <Skills />
        </Section>

        <Section id="education" title="Diplômes & Certifications">
          <Education />
        </Section>

        <Section id="experience" title="Expériences professionnelles">
          <Experiences />
        </Section>

        <Section id="projects" title="Mes Projets">
          <Projects />
        </Section>

        <Section id="hackathons" title="Hackathons & Challenges">
          <Hackathons />
        </Section>

       
      </main>

      <Footer />
    </div>
  );
}

/* ===== GLOBAL UI ===== */

function StarsBackground() {
  return (
    <div className="stars-wrapper" aria-hidden="true">
      <div className="stars-layer stars-layer-1" />
      <div className="stars-layer stars-layer-2" />
      <div className="stars-glow" />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-left">
          <div className="avatar-orbit">
            <div className="avatar-circle">
              <span className="avatar-initials">GC</span>
            </div>
            <span className="avatar-orbit-ring" />
          </div>

          <div>
            <h1 className="name">Ghiles CHEKIR</h1>
            <p className="role">Ingénieur full stack - 2 ans d&apos;xp</p>
          </div>
        </div>

        
      </div>
    </header>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        {SECTIONS.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="nav-pill">
            <span className="nav-dot" />
            {section.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="section">
      <div className="section-header">
        <h2>{title}</h2>
        <span className="section-subline" />
      </div>
      {children}
    </section>
  );
}

function Chip({ children }) {
  return <span className="chip">{children}</span>;
}

function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

/* ===== PRESENTATION ===== */

function Intro() {
  return (
    <div className="card hero-card">
      <div className="hero-grid">
        <div>
          <p className="hero-eyebrow">À propos</p>

          <p className="hero-text">
            Moi, c’est Ghiles. Ingénieur informatique polyvalent, j’interviens
            sur tout le cycle d’un projet : développement web, bases de données,
            développement de l&apos;applications, sécurité et automatisation
            d’infrastructures. Véritable couteau suisse du digital, j’aime
            transformer des défis techniques en solutions fiables, performantes
            et taillées sur mesure. Ce qui me passionne : comprendre un besoin
            concret et créer une solution qui simplifie la vie, optimise le
            système et fait vraiment la différence.
          </p>

          <div className="chips hero-chips">
            <Chip>Full-Stack</Chip>
            <Chip>Architecture REST</Chip>
            <Chip>CI/CD & automatisation</Chip>
            <Chip>Sécurité & Réseaux</Chip>
          </div>
        </div>

        <aside className="side-panel">
          <p className="side-title">Snapshot</p>
          <ul className="side-list">
            <li>
              <span className="side-label">Langues</span>
              <span className="side-value">
                Français (natif), Anglais (B2)
              </span>
            </li>
            <li>
              <span className="side-label">Mobilité</span>
              <span className="side-value">Île-de-France, permis B</span>
            </li>
            <li>
              <span className="side-label">Passions</span>
              <span className="side-value">
                Robotique, hackathons, athlétisme
              </span>
            </li>
            <li>
              <span className="side-label">Disponibilité</span>
              <span className="side-value">À partir d&apos;octobre 2025</span>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

/* ===== SKILLS ===== */

const SKILLS_GROUPS = [
  {
    title: "Front-end",
    items: [
      { name: "React", icon: "react" },
      { name: "Vue.js", icon: "vuejs" },
      { name: "Electron", icon: "electron" },
      { name: "JavaScript", icon: "javascript" },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Java / Spring Boot", icon: "spring" },
      { name: "Node.js / Express", icon: "nodejs" },
      { name: "Python (Flask / Numpy / jinja)", icon: "python" },
      { name: "REST API", icon: "api" },
    ],
  },
  {
    title: "Data & Bases",
    items: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    title: "DevOps & Cloud",
    items: [
      { name: "Docker", icon: "docker" },
      { name: "GitLab CI/CD", icon: "gitlab" },
      { name: "Git / GitHub", icon: "git" },
      { name: "Proxmox / VMware", icon: "server" },
    ],
  },
  {
    title: "Réseaux & Systèmes",
    items: [
      { name: "Linux", icon: "linux" },
      { name: "Wireshark", icon: "" },
      { name: "DNS / TCP / UDP", icon: "network" },
      { name: "Nginx / Apache", icon: "nginx" },
    ],
  },
];

function Skills() {
  return (
    <div className="skills-layout">
      {SKILLS_GROUPS.map((group) => (
        <div key={group.title} className="card skills-card">
          <div className="skills-card-header">
            <span className="skills-orbit-dot" />
            <h3 className="skills-title">{group.title}</h3>
          </div>
          <div className="skills-grid">
            {group.items.map((item) => (
              <SkillBadge key={item.name} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function SkillBadge({ name, icon }) {
  const deviconBase = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

  const iconMap = {
    react: `${deviconBase}/react/react-original.svg`,
    vuejs: `${deviconBase}/vuejs/vuejs-original.svg`,
    electron: `${deviconBase}/electron/electron-original.svg`,
    javascript: `${deviconBase}/javascript/javascript-original.svg`,
    typescript: `${deviconBase}/typescript/typescript-original.svg`,
    spring: `${deviconBase}/spring/spring-original.svg`,
    nodejs: `${deviconBase}/nodejs/nodejs-original.svg`,
    python: `${deviconBase}/python/python-original.svg`,
    mysql: `${deviconBase}/mysql/mysql-original.svg`,
    postgresql: `${deviconBase}/postgresql/postgresql-original.svg`,
    mongodb: `${deviconBase}/mongodb/mongodb-original.svg`,
    docker: `${deviconBase}/docker/docker-original.svg`,
    gitlab: `${deviconBase}/gitlab/gitlab-original.svg`,
    git: `${deviconBase}/git/git-original.svg`,
    linux: `${deviconBase}/linux/linux-original.svg`,
    wireshark: `${deviconBase}/wireshark/wireshark-original.svg`,
    nginx: `${deviconBase}/nginx/nginx-original.svg`,
    api: `${deviconBase}/dotnetcore/dotnetcore-original.svg`,
    server: `${deviconBase}/redis/redis-original.svg`,
    network: `${deviconBase}/linux/linux-original.svg`,
  };

  const src = iconMap[icon];

  return (
    <div className="skill-badge">
      {src && (
        <img src={src} alt={name} className="skill-icon" loading="lazy" />
      )}
      <span className="skill-label">{name}</span>
    </div>
  );
}

/* ===== EDUCATION ===== */

function Education() {
  return (
    <div className="edu-layout">
      <div className="edu-column">
        <h3 className="section-subtitle">Formations</h3>
        <div className="edu-timeline">
          <EduItem
            degree="Master Programmation Sûreté Sécurité"
            school="Université Sorbonne Paris Nord"
            period="2023 – 2025"
            type="master"
          />
          <EduItem
            degree="Licence Informatique"
            school="Université Sorbonne Paris Nord"
            period="2019 – 2023"
            type="license"
          />
        </div>
      </div>

      <div className="edu-column">
        <h3 className="section-subtitle">Certifications</h3>
        <div className="edu-cards">
          <EduCert
            title="MOOC SecNumacadémie"
            org="ANSSI"
            year="2025"
            level="Sécurité"
          />
          <EduCert
            title="AWS Certified Cloud Practitioner"
            org="AWS"
            year="En cours"
            level="Cloud"
          />
        </div>
      </div>
    </div>
  );
}

function EduItem({ degree, school, period, type }) {
  return (
    <article className="edu-item card">
      <div className="edu-badge-wrapper">
        <span className={`edu-badge edu-badge-${type}`} />
      </div>
      <div className="edu-content">
        <p className="edu-degree">{degree}</p>
        <p className="edu-school">{school}</p>
        <p className="edu-period">{period}</p>
      </div>
    </article>
  );
}

function EduCert({ title, org, year, level }) {
  return (
    <article className="edu-cert card">
      <div className="edu-cert-header">
        <div>
          <p className="edu-cert-title">{title}</p>
          <p className="edu-cert-org">{org}</p>
        </div>
        <span className="edu-cert-year">{year}</span>
      </div>
      <span className="edu-cert-tag">{level}</span>
    </article>
  );
}

/* ===== EXPERIENCES ===== */

function Experiences() {
  return (
    <div className="exp-timeline">
      <ExperienceCard
        companyShort="CS"
        company="Sopra Steria"
        role="Ingénieur logiciels"
        period="Avril 2025 – Septembre 2025"
        description={`Envoyé en tant que consultant chez CS GROUP qui est une entreprise française spécialisée dans les systèmes critiques, la défense, la cybersécurité et l’aérospatial.
Au sein de la Business Unit Défense & Sécurité, j’ai participé au développement d’un outil stratégique permettant la génération automatique de scénarios de tests pour la validation du sous-système radio.`}
        bullets={[
          "Développement d’un outil en Python pour automatiser des scénarios complexes",
          "Automatisation de scénarios et lancement du logiciel à l'aide de Gherkins",
          "Analyse réseau avec Wireshark",
          "Containerisation de l’outil avec Docker",
          "Collaboration régulière avec des équipes techniques basées en Roumanie",
        ]}
        impact="Résultats : Amélioration d’environ 40 % de la productivité sur les scénarios automatisés."
        logo={sopra}
      />

      <ExperienceCard
        companyShort="USPN"
        company="Université Sorbonne Paris Nord"
        role="Mentor technique Programmation & Réseaux"
        period="Septembre 2023 – Février 2025"
        description={`Dans le cadre du département informatique de l’Université Sorbonne Paris Nord, j’ai assuré un rôle de mentor auprès d’étudiants de différentes promotions.
L’objectif du programme était de renforcer leurs compétences techniques en programmation, systèmes et réseaux, en les accompagnant sur leurs travaux pratiques et projets.`}
        bullets={[
          "Assistance personnalisée aux étudiants sur des projets et exercices pratiques en C, Python et Java",
          "Explication des architectures et configuration des protocoles de communication (TCP/IP, UDP, modèle OSI)",
          "Vulgarisation des concepts complexes (automates et complexité algorithmique)",
          "Aide individualisée et suivi des étudiants pour favoriser la montée en compétences",
        ]}
        impact="Résultats : 100 % de réussite des étudiants suivis sur les modules concernés."
        logo={uspnLogo}
      />




        <ExperienceCard
        companyShort="USPN"
        company=" Pleine commune"
        role="Administrateur Système et réseau - Jeux Olympiques Paris 2024"
        period="Juillet 2024 – Septembre 2024"
        description={`Expérience en administration systèmes au sein de Plaine Commune lors des
        Jeux Olympiques Paris 2024, avec participation à la gestion des
        infrastructures IT, au support utilisateurs et à la sécurisation des postes de
        travail pendant un événement d’envergure internationale.`}
        bullets={[
          "Administration des systèmes et des infrastructures",
          "Gestion des utilisateurs, groupes et permissions via Active Directory",
          "Configuration et maintenance des postes Windows 10 / 11",
          "Bases en réseaux : TCP/IP, DNS, DHCP",
          "Assister et former les utilisateurs",
          "Automatisation simple et scripts : PowerShel et Bash",
          "Travail en environnement critique et sous contrainte événementiele"
        ]}
        impact="réduction d’environ 30 % du temps de résolution des incidents
        grâce au support utilisateurs et à l’administration des systèmes"
        logo={pleine}
      />







      <ExperienceCard
        companyShort="PX"
        company="PyxiScience"
        role="Stagiaire Développeur Full-Stack"
        period="Mai 2023 – Août 2023"
        description={`PyxiScience est une startup française fondée en 2023, spécialisée dans le développement d’une plateforme d’apprentissage des mathématiques basée sur l’IA.
Elle automatise la correction des devoirs manuscrits, génère des exercices adaptés au niveau des étudiants et fournit aux enseignants des outils de création et d’évaluation de contenus pédagogiques.
Au sein de cette startup, j’ai participé à la création d’une plateforme web interactive destinée aux étudiants de la Sorbonne et de New York University.
L’objectif était de proposer des énoncés générés automatiquement, afin de renforcer l’apprentissage autonome des étudiants tout en limitant les risques de triche.`}
        bullets={[
          "Développement des scripts en Python (Flask, Pandas, NumPy, Jinja2)",
          "Développement du site web en Node.js (Express.js, React.js, EJS)",
          "Test de serveurs en local avec WAMP et MAMP",
          "Création et gestion de la base de données en MySQL",
          "Travail en équipe de 5 personnes, méthode Agile",
        ]}
        impact={`Résultats : Participation, aux côtés de l’équipe et du CEO, au développement d’un projet accepté par BPI France et déployé à La Sorbonne, à New York University et prochainement dans d’autres universités françaises.`}
        logo={pxLogo}
      />
    </div>
  );
}

function ExperienceCard({
  companyShort,
  company,
  role,
  period,
  bullets,
  impact,
  logo,
  description,
}) {
  return (
    <article className="card exp-card">
      <div className="exp-header">
        {logo ? (
          <div className="company-logo-img-wrapper">
            <img
              src={logo}
              alt={company}
              className="company-logo-img"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            className={`company-logo company-logo-${companyShort.toLowerCase()}`}
          >
            <span>{companyShort}</span>
          </div>
        )}

        <div className="exp-main">
          <h3 className="exp-role">{role}</h3>
          <p className="exp-company">{company}</p>
        </div>

        <span className="exp-period">{period}</span>
      </div>

      {description && <p className="exp-description">{description}</p>}

      <ul className="list exp-list">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>

      <p className="highlight">{impact}</p>
    </article>
  );
}

/* ===== PROJECTS ===== */

function Projects() {
  return (
    <div className="projects-layout">
      <ProjectCard
        title="Site web e-commerce (en cours)"
        date="Octobre 2025"
        description="Application e-commerce développée avec Spring Boot offrant gestion complète des produits, panier, commandes et expérience utilisateur moderne."
        stacks={["Spring Boot", "Hibernate", "React", "SQL"]}
        github="#"
      />

      <ProjectCard
        title="Application de gestion de bibliothèque"
        date="Février 2025"
        description="Application web et desktop pour gérer les emprunts, retours et inventaires d’une bibliothèque avec une architecture modulaire et orientée services."
        stacks={["Node.js", "Express", "Vue.js", "Electron", "Nginx", "GitLab CI/CD"]}
        github="#"
        image={bibliotheque}
      />

      <ProjectCard
        title="Bataille Navale – Plateforme multi-joueurs"
        date="Novembre 2024"
        description={`Backend d’un jeu de bataille navale développé par une équipe de 30 personnes, avec API REST, logique de parties et persistance des scores. Cette partie du projet correspond à l’équipe back-end.`}
        stacks={["Java", "Spring Boot", "Hibernate", "MySQL", "REST"]}
        github="https://github.com/LeTigrep/Backender-challenge"
        image={bataille}
      />

      <ProjectCard
        title="OpenStreetMap"
        date="Octobre 2024"
        description={`Application en Kotlin permettant de gérer et servir des tuiles cartographiques. Utilisation de données géospatiales et mise à disposition d’API pour l’accès aux informations.`}
        stacks={["Kotlin", "JavaScript", "HTML", "CSS", "Dockerfile"]}
        github="https://github.com/LeTigrep/Openstreetmap"
        image={osm}
      />

      <ProjectCard
        title="Social Media – Simulation de polarisation"
        date="Juin 2024"
        description={`Simulation d’un système d’interaction sociale où des utilisateurs partagent et mettent à jour leurs opinions sur différents sujets pour étudier les phénomènes de polarisation. Utilisation de modèles dynamiques et d’un système distribué pour analyser l’évolution des opinions dans le temps.`}
        stacks={["Java", "Linux", "Multi-threading"]}
        github="https://github.com/LeTigrep/Social-Media"
        image={SocialMedia}
      />

      <ProjectCard
        title="Barnes Hut (info / astronomie)"
        date="Février 2024"
        description={`Simulateur de collisions de particules dans l’espace, avec prise en compte des forces gravitationnelles. Implémentation de l’algorithme de Barnes-Hut pour optimiser les calculs.`}
        stacks={["Python"]}
        github="#"
        image={BarnesHut}
      />

      <ProjectCard
        title="City Mapper"
        date="Décembre 2023"
        description={`Application de planification de trajets en transports en commun. L’utilisateur renseigne un point de départ et un point d’arrivée, et l’outil propose plusieurs itinéraires en fonction de préférences (temps, correspondances, etc.).`}
        stacks={["Python", "SQL", "Linux"]}
        github="https://github.com/LeTigrep/CityMapper"
        image={cityImg}
      />
    </div>
  );
}

function ProjectCard({ title, date, description, stacks, github, image }) {
  return (
    <article className="card project-card">
      <div className="project-thumb">
        {image && (
          <img
            src={image}
            alt={title}
            className="project-img"
            loading="lazy"
          />
        )}
      </div>

      <div className="project-body">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <span className="project-date">{date}</span>
        </div>

        <p className="project-text">{description}</p>

        <div className="project-footer">
          <div className="project-stacks">
            {stacks.map((stack) => (
              <span key={stack} className="stack-dot">
                {stack}
              </span>
            ))}
          </div>

          <a
            href={github}
            className="project-link"
            target="_blank"
            rel="noreferrer"
          >
            Voir sur GitHub
          </a>
        </div>
      </div>
    </article>
  );
}

/* ===== HACKATHONS ===== */

function Hackathons() {
  return (
    <div className="projects-layout">
      <HackathonCard
  title="Amélioration de la visibilité du site Café Way of Life"
  date="Hackathon - Février 2025"
  image={cafeWayImg}
  description="Café Way of Life est un concept store en ligne dédié à l’univers du café, proposant accessoires, produits bien-être et objets de décoration autour de ce thème."
  bulletsTitle="Principales améliorations réalisées :"
  bullets={[
    "Analyse du marché et étude de la concurrence",
    "Audit complet du site existant : design, UX, navigation, SEO",
    "Refonte visuelle pour un design moderne et cohérent avec la marque",
    "Ajout d’un moteur de recherche interne",
    "Mise en place de filtres produits avancés",
    "Ajout d’avis clients + section best-sellers",
    "Optimisation mobile et amélioration des performances",
    "Optimisations SEO structurelles et éditoriales",
  ]}
  results="Augmentation de la visibilité estimée à +60 %, avec deux demandes d’achat dans les 48h après mise en ligne."
/>


      <HackathonCard
  title="Participation aux challenges Root-Me"
  date="Plateforme CTF – 2025"
  image={rootmeImg} 
  description="Participation régulière à des challenges de cybersécurité sur Root-Me afin de développer mes compétences en hacking éthique, analyse de vulnérabilités et sécurité applicative. Travail en autonomie mais aussi en binôme avec d’autres étudiants en sécurité."
  bulletsTitle="Compétences techniques mises en pratique :"
  bullets={[
    "Web Client & Web Server : injections, XSS, contrôle d’accès",
    "Cryptanalyse : identification et décryptage d’algorithmes faibles",
    "Réseau : analyse de paquets et exploitation de protocoles",
    "Forensic : extraction et interprétation de preuves numériques",
    "Reverse engineering & cracking : compréhension d’exécutables",
    "Gestion du stress et méthodologie d’attaque"
  ]}
  results="Actuellement plus de 550 points acquis sur plusieurs catégories. Progression continue en cybersécurité offensive."
/>

    </div>
  );
}

function HackathonCard({ title, date, description, image, bullets, results }) {
  return (
    <article className="card project-card hackathon-card">
      <div className="project-thumb">
        {image && (
          <img
            src={image}
            alt={title}
            className="project-img"
            loading="lazy"
          />
        )}
      </div>

      <div className="project-body">
        <div className="project-header">
          <h3 className="project-title">{title}</h3>
          <span className="project-date">{date}</span>
        </div>

        {/* Intro */}
        <p className="project-text">{description}</p>

        {/* Réalisations → LISTE À PUCES */}
        {bullets && (
          <ul className="list project-list">
            {bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        )}

        {/* Résultats */}
        {results && (
          <p className="highlight" style={{ marginTop: "8px" }}>{results}</p>
        )}
      </div>
    </article>
  );
}


/* ===== NETWORK ===== */

function Network() {
  return (
    <div className="network-card card">
      <div className="network-grid">
        <div>
          <h3 className="section-subtitle">Réseaux</h3>
          <p className="network-text">
            Disponible pour échanges, collaborations et opportunités en
            développement logiciel, full-stack et infrastructures.
          </p>
        </div>
        <div className="network-links">
          <NetworkItem
            label="Téléphone"
            value="+33 6 18 56 39 19"
            href="tel:+33618563919"
            type="phone"
          />
          <NetworkItem
            label="Email"
            value="ghiles.chekir@gmail.com"
            href="mailto:ghiles.chekir@gmail.com"
            type="mail"
          />
          <NetworkItem
            label="GitHub"
            value="github.com/LeTigrep"
            href="https://github.com/LeTigrep"
            type="github"
          />
  
        </div>
      </div>
    </div>
  );
}

function NetworkItem({ label, value, href, type }) {
  return (
    <a href={href} className="network-item" target="_blank" rel="noreferrer">
      <span className={`network-icon network-icon-${type}`} />
      <div className="network-meta">
        <span className="network-label">{label}</span>
        <span className="network-value">{value}</span>
      </div>
    </a>
  );
}

/* ===== FOOTER ===== */

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Ghiles CHEKIR – Portfolio</p>
    </footer>
  );
}

export default App;
