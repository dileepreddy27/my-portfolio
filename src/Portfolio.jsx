import { useEffect, useRef, useState } from "react";

const DATA = {
  name: "Dileep Reddy Battu",
  title: "Software Engineer",
  tagline:
    "I build scalable web applications and backend systems with a focus on performance, reliability, and clean code.",
  photo:
    "https://github.com/user-attachments/assets/a8d46040-9416-4039-90f7-dd67c9a07ba0",
  highlights: [
    { label: "Experience", value: "3+ years" },
    { label: "Focus", value: "Full-stack and APIs" },
    { label: "Industries", value: "Healthcare and enterprise" },
  ],
  signature: ["Python", "TypeScript", "React", "Node.js", "PostgreSQL", "GCP", "AWS", "FastAPI"],

  about: [
    "Software Engineer with 3+ years of experience building scalable web applications and backend systems for enterprise and healthcare domains. Strong expertise in Python, JavaScript, and full-stack development, with hands-on experience in Unix/Linux environments, API integrations, and Agile development.",
    "Proficient in cloud platforms (GCP, AWS), workflow automation, and full SDLC, with a focus on system performance, reliability, and scalability. Skilled in designing, developing, testing, and maintaining robust and efficient software solutions.",
    "I hold a Master's in Computer Science from Northern Arizona University (CGPA 3.5). I'm passionate about solving complex problems and delivering impactful software that makes a difference.",
  ],

  skills: [
    "Python",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "GCP",
    "AWS",
    "HTML and CSS",
    "Tailwind CSS",
    "REST APIs",
    "Git",
    "Supabase",
    "n8n",
  ],

  experience: [
    {
      period: "Aug 2024 - May 2025",
      role: "Software Engineer",
      company: "Vesta Teleradiology",
      companyUrl: "#",
      description:
        "Developed backend services using Python and Node.js for healthcare workflows. Designed and implemented REST APIs for system integration. Built reliable workflows with validation, logging, and error handling. Automated reporting and operational processes. Collaborated on production-ready features.",
      tech: ["Python", "Node.js", "REST APIs", "Healthcare"],
    },
    {
      period: "Aug 2024 - May 2025",
      role: "Software Engineering Intern",
      company: "Vesta Teleradiology",
      companyUrl: "#",
      description:
        "Developed backend components and API integrations. Improved application performance through debugging and optimization. Assisted in deployment pipelines and system monitoring.",
      tech: ["Python", "Node.js", "API Integration", "CI/CD"],
    },
    {
      period: "Aug 2023 - May 2024",
      role: "Teaching Assistant (Computer Science)",
      company: "Northern Arizona University",
      companyUrl: "https://nau.edu",
      description:
        "Assisted students in programming and software engineering concepts. Conducted lab sessions and supported projects. Improved problem-solving skills through hands-on guidance.",
      tech: ["Python", "Java", "C++", "Data Structures"],
    },
    {
      period: "2020 - 2022",
      role: "Software Engineer",
      company: "Calibridge Info Systems Pvt. Ltd",
      companyUrl: "#",
      description:
        "Developed full-stack applications using React.js, Node.js, MongoDB. Designed RESTful APIs for scalable backend systems. Built responsive UI components. Improved application performance through optimization. Integrated third-party APIs and supported deployments.",
      tech: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    },
  ],

  projects: [
    {
      title: "RadMapping+ (Radiology Management Platform)",
      description:
        "Developed a radiology workflow and KPI platform using n8n, JavaScript, Flask, and PostgreSQL. Supported operations for 300+ doctors and 1200+ healthcare facilities. Reduced workflow processing time by 37% through automation. Ensured HIPAA compliance with secure data handling and SHA-256 encryption. Built backend systems using Supabase and Python, improving data retrieval latency by 70%.",
      tech: ["n8n", "JavaScript", "Flask", "PostgreSQL", "Supabase", "Python"],
      github: "https://github.com/dileepreddy27",
      live: "",
      featured: true,
    },
    {
      title: "CredMapping+ (Credentialing and KPI Platform)",
      description:
        "Developed a credentialing workflow system using n8n, JavaScript, Flask, and PostgreSQL. Automated processes, reducing manual effort by 40%. Supported operations for 300+ healthcare providers and 1200+ facilities. Built scalable backend systems using Supabase and Python.",
      tech: ["n8n", "JavaScript", "Flask", "PostgreSQL", "Supabase"],
      github: "https://github.com/dileepreddy27",
      live: "",
      featured: true,
    },
    {
      title: "SmartLeads (CRM Platform)",
      description:
        "Developed CRM using Next.js, TypeScript, Node.js, PostgreSQL. Implemented lead tracking and analytics dashboards. Designed API-driven architecture with real-time updates. Integrated Highcharts for visualization.",
      tech: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Highcharts"],
      github: "https://github.com/dileepreddy27",
      live: "",
      featured: true,
    },
    {
      title: "SLKW E-Commerce Platform",
      description:
        "Developed application using React.js and Tailwind CSS. Built backend using Node.js, Express.js, PostgreSQL. Implemented authentication, cart, and filtering features. Improved customer engagement by 30%.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "PostgreSQL"],
      github: "https://github.com/dileepreddy27",
      live: "",
      featured: false,
    },
  ],

  certifications: [
    {
      title: "Python",
      issuer: "Certification",
      year: "",
      url: "#",
      badge: "PY",
    },
    {
      title: "SQL",
      issuer: "Certification",
      year: "",
      url: "#",
      badge: "SQL",
    },
    {
      title: "Generative AI",
      issuer: "Certification",
      year: "",
      url: "#",
      badge: "GAI",
    },
    {
      title: "JavaScript",
      issuer: "Certification",
      year: "",
      url: "#",
      badge: "JS",
    },
    {
      title: "Artificial Intelligence",
      issuer: "Certification",
      year: "",
      url: "#",
      badge: "AI",
    },
    {
      title: "Cloud Essentials",
      issuer: "Certification",
      year: "",
      url: "#",
      badge: "CLD",
    },
  ],

  social: {
    github: "https://github.com/dileepreddy27",
    linkedin: "https://www.linkedin.com/in/dileep-reddy-b-08491a219",
    email: "dileep151015@gmail.com",
  },
};

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "technologies", label: "Technologies" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const TECH_CATEGORIES = [
  {
    label: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "Java", "C++", "SQL", "Bash"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Vite"],
  },
  {
    label: "Backend and Runtime",
    items: ["Node.js", "Express.js", "Flask", "FastAPI", "REST APIs", "GraphQL"],
  },
  {
    label: "Machine Learning",
    items: ["TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy", "Jupyter"],
  },
  {
    label: "Databases and ORMs",
    items: ["PostgreSQL", "MongoDB", "Supabase", "Redis", "MySQL", "SQLAlchemy"],
  },
  {
    label: "Tools and DevOps",
    items: ["Docker", "Git", "CI/CD", "n8n", "Linux and Unix", "Nginx", "Webpack"],
  },
  {
    label: "Cloud and Hosting",
    items: [
      "Google Cloud Platform",
      "AWS",
      "Azure",
      "Netlify",
      "Heroku",
      "Render",
      "DigitalOcean",
      "Vercel",
    ],
  },
];

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const refs = useRef({});

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    NAV.forEach((item) => {
      const el = refs.current[item.id];
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const goTo = (id) => {
    refs.current[id]?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ firstName: "", lastName: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="app">
      <header className="top-nav">
        <div className="container nav-inner">
          <button className="logo" onClick={() => goTo("home")}>
            DRB
          </button>
          <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
            {NAV.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`nav-link ${activeSection === item.id ? "nav-link--active" : ""}`}
              >
                <span className="nav-index">0{idx + 1}</span>
                {item.label}
              </button>
            ))}
          </nav>
          <button
            className={`menu-btn ${menuOpen ? "menu-btn--open" : ""}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>
        <section id="home" ref={(el) => (refs.current.home = el)} className="section hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">{DATA.title}</p>
              <h1 className="hero-title">{DATA.name}</h1>
              <p className="hero-lead">{DATA.tagline}</p>
              <div className="cta-row">
                <button className="btn btn-primary" onClick={() => goTo("projects")}>
                  See My Work
                  <ArrowIcon />
                </button>
                <a className="btn btn-ghost" href="/resume.pdf">
                  Resume
                  <DownloadIcon />
                </a>
              </div>
              <div className="social-row">
                <SocialLink href={DATA.social.linkedin} label="LinkedIn">
                  <LinkedinIcon />
                </SocialLink>
                <SocialLink href={DATA.social.github} label="GitHub">
                  <GithubIcon />
                </SocialLink>
                <SocialLink href={`mailto:${DATA.social.email}`} label="Email">
                  <MailIcon />
                </SocialLink>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-photo">
                <img src={DATA.photo} alt={DATA.name} />
              </div>
              <div className="hero-stats">
                {DATA.highlights.map((item) => (
                  <div key={item.label} className="stat">
                    <span className="stat-label">{item.label}</span>
                    <span className="stat-value">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="hero-tags">
                {DATA.signature.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" ref={(el) => (refs.current.about = el)} className="section">
          <div className="container about-grid">
            <div>
              <SectionIntro
                kicker="More About Me"
                title="Building resilient systems with clarity and intention."
                description="A snapshot of the values and strengths that guide my work."
              />
              <div className="body-copy">
                {DATA.about.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="about-card">
              <p className="card-kicker">Core strengths</p>
              <ul className="strength-list">
                <li>Backend systems and API design</li>
                <li>Cloud automation and reliable delivery</li>
                <li>Cross-functional collaboration and mentorship</li>
              </ul>
              <div className="divider" />
              <p className="card-kicker">Toolbox</p>
              <div className="chip-row">
                {DATA.skills.map((skill) => (
                  <span key={skill} className="chip chip-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          ref={(el) => (refs.current.experience = el)}
          className="section section-alt"
        >
          <div className="container">
            <SectionIntro
              kicker="Experience"
              title="Leading with ownership and steady execution."
              description="Roles where I delivered measurable impact." 
            />
            <div className="timeline">
              {DATA.experience.map((job, idx) => (
                <ExperienceCard key={idx} job={job} />
              ))}
            </div>
          </div>
        </section>

        <section id="projects" ref={(el) => (refs.current.projects = el)} className="section">
          <div className="container">
            <SectionIntro
              kicker="Projects"
              title="Products, platforms, and experiments I am proud of."
              description="Selected work across healthcare, automation, and analytics." 
            />
            <div className="project-grid">
              {DATA.projects.map((project, idx) => (
                <ProjectCard key={idx} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="technologies"
          ref={(el) => (refs.current.technologies = el)}
          className="section section-alt"
        >
          <div className="container">
            <SectionIntro
              kicker="Technologies"
              title="Tools I use to deliver end-to-end solutions."
              description="Explore the stacks I lean on most." 
            />
            <TechSection />
          </div>
        </section>

        <section
          id="certifications"
          ref={(el) => (refs.current.certifications = el)}
          className="section"
        >
          <div className="container">
            <SectionIntro
              kicker="Certifications"
              title="Credentials that back up my craft."
              description="Continuous learning across software and AI." 
            />
            <div className="cert-grid">
              {DATA.certifications.map((cert, idx) => (
                <CertCard key={idx} cert={cert} />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" ref={(el) => (refs.current.contact = el)} className="section">
          <div className="container">
            <div className="contact-card">
              <div className="contact-head">
                <div>
                  <p className="eyebrow">Contact Me</p>
                  <h2>Let's build something memorable together.</h2>
                  <p className="section-lead">
                    I'm currently open to new opportunities. Whether it is a project, a question,
                    or just a quick hello, my inbox is always open.
                  </p>
                </div>
                <div className="contact-social">
                  <SocialLink href={DATA.social.linkedin} label="LinkedIn">
                    <LinkedinIcon />
                  </SocialLink>
                  <SocialLink href={`mailto:${DATA.social.email}`} label="Email">
                    <MailIcon />
                  </SocialLink>
                </div>
              </div>

              {sent ? (
                <div className="success">
                  Message sent. I will get back to you soon.
                </div>
              ) : (
                <form className="contact-form" onSubmit={submit}>
                  <div className="form-row">
                    <InputField
                      label="First Name"
                      value={form.firstName}
                      onChange={(value) => setForm({ ...form, firstName: value })}
                    />
                    <InputField
                      label="Last Name"
                      value={form.lastName}
                      onChange={(value) => setForm({ ...form, lastName: value })}
                    />
                  </div>
                  <div className="form-row">
                    <InputField
                      label="Subject"
                      value={form.subject}
                      onChange={(value) => setForm({ ...form, subject: value })}
                    />
                    <InputField
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(value) => setForm({ ...form, email: value })}
                    />
                  </div>
                  <TextAreaField
                    label="Message"
                    value={form.message}
                    onChange={(value) => setForm({ ...form, message: value })}
                  />
                  <button className="btn btn-primary" type="submit">
                    Send Message
                  </button>
                </form>
              )}
            </div>
            <p className="footer-note">Designed and built by {DATA.name}. {new Date().getFullYear()}</p>
          </div>
        </section>
      </main>
    </div>
  );
}

function SectionIntro({ kicker, title, description }) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{kicker}</p>
      <h2>{title}</h2>
      {description ? <p className="section-lead">{description}</p> : null}
    </div>
  );
}

function ExperienceCard({ job }) {
  return (
    <article className="experience-card">
      <div className="experience-period">{job.period}</div>
      <div className="experience-body">
        <h3>
          {job.role} -{" "}
          <a href={job.companyUrl} target="_blank" rel="noreferrer">
            {job.company}
          </a>
        </h3>
        <p>{job.description}</p>
        <div className="tag-row">
          {job.tech.map((tech) => (
            <span key={tech} className="chip chip-muted">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project }) {
  const label = project.featured ? "Featured" : "Project";
  return (
    <article className={`project-card ${project.featured ? "project-card--featured" : ""}`}>
      <div className="project-visual">
        <div className="project-glow" />
        <span className="project-label">{label}</span>
      </div>
      <div className="project-body">
        <div className="project-head">
          <h3>{project.title}</h3>
          <div className="project-links">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon />
              </a>
            ) : null}
            {project.live ? (
              <a href={project.live} target="_blank" rel="noreferrer" aria-label="Live site">
                <ExternalIcon />
              </a>
            ) : null}
          </div>
        </div>
        <p>{project.description}</p>
        <div className="tag-row">
          {project.tech.map((tech) => (
            <span key={tech} className="chip chip-outline">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function CertCard({ cert }) {
  return (
    <a className="cert-card" href={cert.url} target="_blank" rel="noreferrer">
      <div className="cert-badge">{cert.badge}</div>
      <div>
        <h3>{cert.title}</h3>
        <p>{cert.issuer}</p>
      </div>
      <span className="cert-year">{cert.year}</span>
    </a>
  );
}

function TechSection() {
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", ...TECH_CATEGORIES.map((cat) => cat.label)];
  const allItems = TECH_CATEGORIES.flatMap((cat) =>
    cat.items.map((item) => ({ item, category: cat.label }))
  );
  const filtered =
    activeTab === "All" ? allItems : allItems.filter((item) => item.category === activeTab);

  return (
    <div className="tech">
      <div className="tech-tabs" role="tablist" aria-label="Technology categories">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`chip ${activeTab === tab ? "chip-active" : "chip-muted"}`}
            onClick={() => setActiveTab(tab)}
            role="tab"
            aria-selected={activeTab === tab}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === "All" ? (
        <div className="tech-groups">
          {TECH_CATEGORIES.map((cat) => (
            <div key={cat.label} className="tech-group">
              <p className="eyebrow">{cat.label}</p>
              <div className="chip-row">
                {cat.items.map((item) => (
                  <span key={item} className="chip chip-outline">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="chip-row">
          {filtered.map(({ item }) => (
            <span key={item} className="chip chip-outline">
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function InputField({ label, value, onChange, type = "text" }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={label}
        required
      />
    </label>
  );
}

function TextAreaField({ label, value, onChange }) {
  return (
    <label className="field">
      <span>{label}</span>
      <textarea
        rows="5"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Tell me about your project"
        required
      />
    </label>
  );
}

function SocialLink({ href, label, children }) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer" aria-label={label}>
      {children}
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M5 12h12m0 0l-4-4m4 4l-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 3v12m0 0l4-4m-4 4l-4-4M4 19h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 3h7v7m0-7L10 14m-1 7H5a2 2 0 0 1-2-2V9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.5a3.2 3.2 0 0 0-.9-2.5c3-.3 6-1.5 6-6.3A4.8 4.8 0 0 0 18 4.7 4.5 4.5 0 0 0 17.9 1S16.6.6 14 2.4a11.2 11.2 0 0 0-6 0C5.4.6 4.1 1 4.1 1a4.5 4.5 0 0 0-.1 3.7A4.8 4.8 0 0 0 2.5 9c0 4.8 3 6 6 6.3a3.2 3.2 0 0 0-.8 2.2V22"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        points="22,6 12,13 2,6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
