import { useState, useEffect, useRef } from "react";

/* ═══════════════════════════════════════════════════════
   DATA  —  Replace all of this with YOUR own information
═══════════════════════════════════════════════════════ */
const DATA = {
  name: "Dileep Reddy Battu",
  title: "Frontend Engineer",
  tagline: "I build accessible, pixel-perfect digital experiences for the web.",

  about: [
    "I'm a frontend engineer with a specialty in web accessibility, focused on building pixel-perfect, intuitive user interfaces. I enjoy working at the intersection of design and engineering, where great user experience meets robust, clean, and scalable code.",
    "Currently, I'm a senior frontend engineer at Klaviyo, where I work on the component library team to help maintain and evolve our design system. In this role, I lead accessibility efforts across components, tooling, and patterns, partnering closely with designers and engineers.",
    "Previously, I've worked across a wide range of environments — from product studios to startups and large tech companies, including Apple, Starry Internet, and Upstatement. Outside of work, you can usually find me climbing, playing tennis, or running around Hyrule searching for Korok seeds.",
  ],

  skills: [
    "JavaScript", "TypeScript", "React", "Next.js",
    "Node.js", "HTML & CSS", "SCSS", "Storybook",
    "WordPress", "Contentful", "React Native", "Accessibility (a11y)",
  ],

  experience: [
    {
      period: "2024 — Present",
      role: "Senior Frontend Engineer, Accessibility",
      company: "Klaviyo",
      companyUrl: "https://www.klaviyo.com",
      description:
        "Build and maintain critical components used to construct Klaviyo's frontend, across the whole product. Work closely with cross-functional teams, including developers, designers, and product managers, to implement and advocate for best practices in web accessibility.",
      tech: ["JavaScript", "TypeScript", "React", "Storybook"],
    },
    {
      period: "2018 — 2024",
      role: "Lead Engineer",
      company: "Upstatement",
      companyUrl: "https://upstatement.com",
      description:
        "Built, styled, and shipped high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, and more. Provided leadership within engineering through knowledge shares and internal tooling.",
      tech: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "WordPress"],
    },
    {
      period: "Jul — Dec 2017",
      role: "UI Engineer Co-op",
      company: "Apple",
      companyUrl: "https://www.apple.com/apple-music/",
      description:
        "Developed and styled interactive web apps for Apple Music, including the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback.",
      tech: ["JavaScript", "Ember", "SCSS", "MusicKit.js"],
    },
    {
      period: "2016 — 2017",
      role: "Developer",
      company: "Scout Studio",
      companyUrl: "https://scout.camd.northeastern.edu/",
      description:
        "Collaborated with student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community.",
      tech: ["Jekyll", "SCSS", "JavaScript", "WordPress"],
    },
    {
      period: "Jul — Dec 2016",
      role: "Software Engineer Co-op",
      company: "Starry",
      companyUrl: "https://starry.com/",
      description:
        "Worked with the UI team to engineer and improve major features of Starry's customer-facing Android app.",
      tech: ["Cordova", "Backbone", "JavaScript", "CSS"],
    },
  ],

  projects: [
    {
      title: "Build a Spotify Connected App",
      description:
        "Video course that teaches how to build a web app with the Spotify Web API. Topics covered include REST APIs, user auth flows, Node, Express, React, Styled Components, and more.",
      tech: ["React", "Node.js", "Express", "Spotify API"],
      github: "https://github.com/bchiang7",
      live: "https://www.newline.co/courses/build-a-spotify-connected-app",
      featured: true,
    },
    {
      title: "Spotify Profile",
      description:
        "Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information. Create and save new playlists based on your existing ones.",
      tech: ["React", "Express", "Spotify API", "Heroku"],
      github: "https://github.com/bchiang7",
      live: "https://spotify-profile.herokuapp.com/",
      featured: true,
    },
    {
      title: "Halcyon Theme",
      description:
        "Minimal dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Has 100k+ installs on the VS Code marketplace.",
      tech: ["VS Code", "Sublime Text", "iTerm2", "Atom"],
      github: "https://github.com/bchiang7",
      live: "https://halcyon-theme.netlify.app/",
      featured: false,
    },
    {
      title: "brittanychiang.com v4",
      description:
        "An older iteration of this portfolio site built with Gatsby. Has accumulated 6k+ GitHub stars and 3k+ forks.",
      tech: ["Gatsby", "Styled Components", "Netlify"],
      github: "https://github.com/bchiang7",
      live: "https://v4.brittanychiang.com/",
      featured: false,
    },
  ],

  blog: [
    {
      year: "2026",
      title: "Welcome to the AI Parade",
      url: "https://medium.com/@bchiang7/welcome-to-the-ai-parade-765f79b00c30",
      description: "Thoughts on the rapid shift in how we build software in the age of AI tools and what it means for engineers.",
      tag: "Opinion",
    },
    {
      year: "2024",
      title: "5 Common Accessibility Pitfalls and How to Avoid Them",
      url: "https://klaviyo.tech/5-common-accessibility-pitfalls-and-how-to-avoid-them-e316dfc55ff0",
      description: "A practical guide to the most frequent a11y mistakes in modern web apps and actionable ways to fix them.",
      tag: "Accessibility",
    },
    {
      year: "2020",
      title: "Integrating Algolia Search with WordPress Multisite",
      url: "https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c",
      description: "Step-by-step walkthrough of setting up Algolia-powered search across a complex WordPress multisite network.",
      tag: "Tutorial",
    },
    {
      year: "2019",
      title: "Building a Headless Mobile App CMS From Scratch",
      url: "https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9",
      description: "How we designed and built a fully custom headless CMS to power a React Native mobile application.",
      tag: "Engineering",
    },
  ],

  certifications: [
    {
      title: "AWS Certified Developer – Associate",
      issuer: "Amazon Web Services",
      year: "2024",
      url: "#",
      badge: "AWS",
    },
    {
      title: "Meta Frontend Developer Certificate",
      issuer: "Meta / Coursera",
      year: "2023",
      url: "#",
      badge: "META",
    },
    {
      title: "Google UX Design Certificate",
      issuer: "Google / Coursera",
      year: "2022",
      url: "#",
      badge: "GGL",
    },
    {
      title: "TypeScript for Professionals",
      issuer: "Udemy",
      year: "2023",
      url: "#",
      badge: "TS",
    },
  ],

  social: {
    github: "https://github.com/bchiang7",
    linkedin: "https://www.linkedin.com/in/bchiang7/",
    email: "your@email.com",
  },
};

const NAV = ["About", "Experience", "Projects", "Blog", "Certifications", "Contact"];

/* ══════════════  ICONS  ══════════════ */
const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
  </svg>
);
const MailIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const ExternalIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);
const FolderIcon = ({ accent }) => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none"
    stroke={accent ? "#64ffda" : "#495670"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
    style={{ transition: "stroke 200ms", flexShrink: 0 }}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
  </svg>
);

/* ══════════════  ROOT  ══════════════ */
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [mouse, setMouse]       = useState({ x: -999, y: -999 });
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm]         = useState({ name: "", email: "", message: "" });
  const [sent, setSent]         = useState(false);
  const refs = useRef({});

  useEffect(() => {
    const h = (e) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: "-30% 0px -60% 0px" }
    );
    NAV.forEach((n) => { const el = refs.current[n.toLowerCase()]; if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const l = document.createElement("link");
    l.rel  = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap";
    document.head.appendChild(l);
    return () => document.head.removeChild(l);
  }, []);

  const goto   = (id) => { refs.current[id]?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const submit = (e) => {
    e.preventDefault();
    // 👉 Wire to your Node.js API later:
    // fetch("/api/contact", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form) })
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  const S = {
    bg:        "#0a192f",
    bgCard:    "rgba(255,255,255,0.025)",
    bgHover:   "rgba(100,255,218,0.05)",
    border:    "rgba(255,255,255,0.06)",
    borderHov: "rgba(100,255,218,0.18)",
    accent:    "#64ffda",
    textPri:   "#ccd6f6",
    textSec:   "#8892b0",
    textMute:  "#495670",
    mono:      "'Fira Code', monospace",
    sans:      "'Raleway', sans-serif",
  };

  return (
    <div style={{ backgroundColor: S.bg, color: S.textSec, fontFamily: S.sans, minHeight: "100vh", overflowX: "hidden" }}>

      {/* Cursor spotlight */}
      <div className="pointer-events-none fixed inset-0 z-20"
        style={{ background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(100,255,218,0.055) 0%, transparent 75%)` }} />

      {/* ── Mobile nav ── */}
      <header className="lg:hidden fixed inset-x-0 top-0 z-50 flex justify-between items-center px-6 py-4"
        style={{ background: "rgba(10,25,47,0.93)", backdropFilter: "blur(12px)", borderBottom: `1px solid ${S.border}` }}>
        <span style={{ fontFamily: S.mono, fontSize: 13, color: S.accent, letterSpacing: "0.2em" }}>BC.</span>
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ color: S.textPri, background: "none", border: "none", cursor: "pointer" }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
        {menuOpen && (
          <nav className="absolute inset-x-0 top-full flex flex-col items-center gap-6 py-8"
            style={{ background: "#0d2240", borderBottom: `1px solid ${S.border}` }}>
            {NAV.map((n, i) => (
              <button key={n} onClick={() => goto(n.toLowerCase())}
                style={{ fontFamily: S.mono, fontSize: 12, letterSpacing: "0.08em",
                  color: activeSection === n.toLowerCase() ? S.accent : S.textMute,
                  background: "none", border: "none", cursor: "pointer" }}>
                <span style={{ color: S.accent, marginRight: 8 }}>0{i + 1}.</span>{n}
              </button>
            ))}
          </nav>
        )}
      </header>

      <div className="mx-auto max-w-screen-xl px-6 md:px-12 lg:px-20 xl:px-24 lg:flex lg:gap-10 xl:gap-16">

        {/* ════  SIDEBAR  ════ */}
        <aside className="hidden lg:flex lg:flex-col lg:justify-between lg:sticky lg:top-0 lg:h-screen lg:w-[42%] lg:shrink-0 lg:py-24">
          <div>
            <h1 style={{ fontFamily: S.sans, fontSize: "clamp(2.2rem,3.5vw,3rem)", fontWeight: 700,
              color: S.textPri, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 12 }}>
              {DATA.name}
            </h1>
            <h2 style={{ fontFamily: S.sans, fontSize: "1.1rem", fontWeight: 500, color: S.textPri, marginBottom: 18 }}>
              {DATA.title}
            </h2>
            <p style={{ maxWidth: 300, lineHeight: 1.7, fontSize: 14.5, color: S.textSec }}>
              {DATA.tagline}
            </p>
            <nav style={{ marginTop: 52, display: "flex", flexDirection: "column", gap: 20 }}>
              {NAV.map((n) => {
                const active = activeSection === n.toLowerCase();
                return (
                  <button key={n} onClick={() => goto(n.toLowerCase())}
                    style={{ display: "flex", alignItems: "center", gap: 16, textAlign: "left",
                      cursor: "pointer", background: "none", border: "none", padding: 0 }}>
                    <span style={{ display: "block", height: 1,
                      width: active ? 60 : 28,
                      background: active ? S.accent : S.textMute,
                      transition: "width 300ms ease, background 250ms ease" }} />
                    <span style={{ fontFamily: S.mono, fontSize: 11.5,
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      color: active ? S.textPri : S.textMute,
                      transition: "color 200ms" }}>
                      {n}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            {[
              { href: DATA.social.github,   Icon: GithubIcon,   label: "GitHub"   },
              { href: DATA.social.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              { href: `mailto:${DATA.social.email}`, Icon: MailIcon, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                style={{ color: S.textMute, transition: "color 200ms, transform 200ms" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = S.accent; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = S.textMute; e.currentTarget.style.transform = "none"; }}>
                <Icon />
              </a>
            ))}
          </div>
        </aside>

        {/* ════  MAIN CONTENT  ════ */}
        <main style={{ flex: 1, paddingTop: "6rem", paddingBottom: "6rem" }}
          className="lg:pt-24 lg:pb-24 flex flex-col gap-36">

          {/* ABOUT */}
          <section id="about" ref={(el) => (refs.current["about"] = el)}>
            <MobileHeading num="01">About</MobileHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, lineHeight: 1.72, fontSize: 15 }}>
              {DATA.about.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div style={{ marginTop: 28 }}>
              <p style={{ fontFamily: S.mono, fontSize: 11.5, color: S.accent,
                letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>
                Technologies I use
              </p>
              <ul style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px 0" }}>
                {DATA.skills.map((s) => (
                  <li key={s} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                    <span style={{ color: S.accent, fontFamily: S.mono, fontSize: 11 }}>▹</span>{s}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" ref={(el) => (refs.current["experience"] = el)}>
            <MobileHeading num="02">Experience</MobileHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {DATA.experience.map((job, i) => <ExpCard key={i} job={job} S={S} />)}
            </div>
            <a href="/resume.pdf" download
              onMouseEnter={(e) => { e.currentTarget.style.color = S.accent; e.currentTarget.style.borderBottomColor = S.accent; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = S.textPri; e.currentTarget.style.borderBottomColor = "rgba(100,255,218,0.3)"; }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, marginTop: 28,
                fontFamily: S.mono, fontSize: 13, color: S.textPri, textDecoration: "none",
                letterSpacing: "0.06em", borderBottom: "1px solid rgba(100,255,218,0.3)",
                paddingBottom: 2, transition: "all 200ms" }}>
              View Full Résumé
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </section>

          {/* PROJECTS */}
          <section id="projects" ref={(el) => (refs.current["projects"] = el)}>
            <MobileHeading num="03">Projects</MobileHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
              {DATA.projects.filter((p) => p.featured).map((p, i) => <ProjCard key={i} proj={p} S={S} />)}
            </div>
            <p style={{ fontFamily: S.mono, fontSize: 11.5, color: S.accent,
              letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>
              Other noteworthy projects
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }}>
              {DATA.projects.filter((p) => !p.featured).map((p, i) => <SmallCard key={i} proj={p} S={S} />)}
            </div>
          </section>

          {/* BLOG */}
          <section id="blog" ref={(el) => (refs.current["blog"] = el)}>
            <MobileHeading num="04">Blog</MobileHeading>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {DATA.blog.map((post, i) => <BlogCard key={i} post={post} S={S} />)}
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section id="certifications" ref={(el) => (refs.current["certifications"] = el)}>
            <MobileHeading num="05">Certifications</MobileHeading>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(220px,1fr))", gap: 12 }}>
              {DATA.certifications.map((cert, i) => <CertCard key={i} cert={cert} S={S} />)}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" ref={(el) => (refs.current["contact"] = el)}>
            <MobileHeading num="06">Contact</MobileHeading>
            <p style={{ lineHeight: 1.72, fontSize: 15, maxWidth: 480, marginBottom: 32 }}>
              I'm currently open to new opportunities. Whether it's a project, a question, or just want to say hello — my inbox is always open.
            </p>
            {sent ? (
              <div style={{ padding: "18px 22px", borderRadius: 6,
                border: "1px solid rgba(100,255,218,0.3)", background: "rgba(100,255,218,0.04)",
                color: S.accent, fontFamily: S.mono, fontSize: 13 }}>
                ✓ Message sent — I'll get back to you soon.
              </div>
            ) : (
              <div style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <FormInput label="Name"  value={form.name}  onChange={(v) => setForm({ ...form, name: v })}  S={S} />
                  <FormInput label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} S={S} />
                </div>
                <div>
                  <label style={{ display: "block", marginBottom: 8, fontFamily: S.mono, fontSize: 11,
                    color: S.accent, letterSpacing: "0.18em", textTransform: "uppercase" }}>Message</label>
                  <textarea rows={5} value={form.message} placeholder="What's on your mind?"
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(100,255,218,0.45)")}
                    onBlur={(e)  => (e.target.style.borderColor = "rgba(100,255,218,0.12)")}
                    style={{ width: "100%", background: "rgba(255,255,255,0.025)",
                      border: "1px solid rgba(100,255,218,0.12)", borderRadius: 6,
                      padding: "12px 14px", fontSize: 14, color: S.textPri,
                      fontFamily: S.sans, outline: "none", resize: "none",
                      transition: "border-color 200ms", boxSizing: "border-box" }} />
                </div>
                <button onClick={submit}
                  onMouseEnter={(e) => (e.target.style.background = "rgba(100,255,218,0.1)")}
                  onMouseLeave={(e) => (e.target.style.background = "transparent")}
                  style={{ alignSelf: "flex-start", padding: "14px 28px",
                    border: `1px solid ${S.accent}`, borderRadius: 4,
                    background: "transparent", color: S.accent,
                    fontFamily: S.mono, fontSize: 13, letterSpacing: "0.08em",
                    cursor: "pointer", transition: "background 200ms" }}>
                  Send Message
                </button>
              </div>
            )}
            <p style={{ marginTop: 80, fontFamily: S.mono, fontSize: 12, color: S.textMute, letterSpacing: "0.04em" }}>
              Designed &amp; Built by {DATA.name} · {new Date().getFullYear()}
            </p>
          </section>

        </main>
      </div>
    </div>
  );
}

/* ── Mobile section heading ── */
function MobileHeading({ children, num }) {
  return (
    <div className="lg:hidden" style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
      <span style={{ fontFamily: "'Fira Code',monospace", fontSize: 12, color: "#64ffda" }}>{num}.</span>
      <h2 style={{ fontFamily: "'Raleway',sans-serif", fontSize: 18, fontWeight: 700, color: "#ccd6f6", whiteSpace: "nowrap" }}>
        {children}
      </h2>
      <span style={{ flex: 1, height: 1, background: "rgba(100,255,218,0.12)" }} />
    </div>
  );
}

/* ── Experience card ── */
function ExpCard({ job, S }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ padding: "18px 20px", borderRadius: 6, cursor: "default",
        background: hov ? S.bgHover : "transparent",
        border: `1px solid ${hov ? S.borderHov : "transparent"}`,
        transition: "all 200ms" }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0 24px", alignItems: "baseline", marginBottom: 6 }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, color: S.textPri, margin: 0 }}>
          {job.role} ·{" "}
          <a href={job.companyUrl} target="_blank" rel="noreferrer"
            style={{ color: S.accent, textDecoration: "none" }}>{job.company}</a>
        </h3>
        <span style={{ fontFamily: S.mono, fontSize: 12, color: S.textMute }}>{job.period}</span>
      </div>
      <p style={{ fontSize: 14, lineHeight: 1.68, marginBottom: 12 }}>{job.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {job.tech.map((t) => (
          <span key={t} style={{ padding: "3px 12px", borderRadius: 99,
            background: "rgba(100,255,218,0.08)", color: S.accent,
            fontFamily: S.mono, fontSize: 11.5 }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Featured project card ── */
function ProjCard({ proj, S }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ padding: 24, borderRadius: 6, cursor: "default",
        background: hov ? S.bgHover : S.bgCard,
        border: `1px solid ${hov ? S.borderHov : S.border}`,
        transition: "all 220ms" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <FolderIcon accent={hov} />
        <div style={{ display: "flex", gap: 14 }}>
          {proj.github && (
            <a href={proj.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              style={{ color: hov ? S.textPri : S.textMute, transition: "color 200ms" }}>
              <GithubIcon size={18} />
            </a>
          )}
          {proj.live && (
            <a href={proj.live} target="_blank" rel="noreferrer" aria-label="Live"
              style={{ color: hov ? S.textPri : S.textMute, transition: "color 200ms" }}>
              <ExternalIcon size={18} />
            </a>
          )}
        </div>
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 600, color: hov ? S.accent : S.textPri,
        marginBottom: 10, transition: "color 200ms" }}>{proj.title}</h3>
      <p style={{ fontSize: 14, lineHeight: 1.68, marginBottom: 18 }}>{proj.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 16px" }}>
        {proj.tech.map((t) => (
          <span key={t} style={{ fontFamily: S.mono, fontSize: 11, color: S.accent, letterSpacing: "0.04em" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Small project card ── */
function SmallCard({ proj, S }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ padding: 20, borderRadius: 6, cursor: "default",
        background: hov ? S.bgHover : S.bgCard,
        border: `1px solid ${hov ? S.borderHov : S.border}`,
        transition: "all 220ms", display: "flex", flexDirection: "column",
        justifyContent: "space-between", minHeight: 170 }}>
      <div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <FolderIcon accent={hov} />
          <div style={{ display: "flex", gap: 12 }}>
            {proj.github && (
              <a href={proj.github} aria-label="GitHub"
                style={{ color: hov ? S.textPri : S.textMute, transition: "color 200ms" }}>
                <GithubIcon size={16} />
              </a>
            )}
            {proj.live && (
              <a href={proj.live} aria-label="Live"
                style={{ color: hov ? S.textPri : S.textMute, transition: "color 200ms" }}>
                <ExternalIcon />
              </a>
            )}
          </div>
        </div>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: hov ? S.accent : S.textPri,
          marginBottom: 8, transition: "color 200ms" }}>{proj.title}</h3>
        <p style={{ fontSize: 13, lineHeight: 1.65 }}>{proj.description}</p>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 14px", marginTop: 14 }}>
        {proj.tech.map((t) => (
          <span key={t} style={{ fontFamily: S.mono, fontSize: 11, color: S.accent, letterSpacing: "0.04em" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ── Blog card ── */
function BlogCard({ post, S }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={post.url} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "block", padding: "18px 20px", borderRadius: 6,
        background: hov ? S.bgHover : "transparent",
        border: `1px solid ${hov ? S.borderHov : "transparent"}`,
        textDecoration: "none", transition: "all 200ms", cursor: "pointer" }}>
      <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 16px", marginBottom: 6 }}>
        <span style={{ fontFamily: S.mono, fontSize: 11.5, color: S.textMute }}>{post.year}</span>
        <span style={{ padding: "2px 10px", borderRadius: 99,
          background: "rgba(100,255,218,0.08)", color: S.accent,
          fontFamily: S.mono, fontSize: 11 }}>{post.tag}</span>
      </div>
      <h3 style={{ fontSize: 15, fontWeight: 600,
        color: hov ? S.accent : S.textPri, marginBottom: 6, transition: "color 200ms" }}>
        {post.title}
        <span style={{ display: "inline-block", marginLeft: 6, opacity: hov ? 1 : 0,
          transition: "opacity 200ms", verticalAlign: "middle" }}>
          <ExternalIcon size={14} />
        </span>
      </h3>
      <p style={{ fontSize: 14, lineHeight: 1.65 }}>{post.description}</p>
    </a>
  );
}

/* ── Certification card ── */
function CertCard({ cert, S }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={cert.url} target="_blank" rel="noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: "flex", flexDirection: "column", justifyContent: "space-between",
        padding: 20, borderRadius: 6, minHeight: 140,
        background: hov ? S.bgHover : S.bgCard,
        border: `1px solid ${hov ? S.borderHov : S.border}`,
        textDecoration: "none", transition: "all 220ms", cursor: "pointer" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div style={{ width: 44, height: 44, borderRadius: 8,
          background: "rgba(100,255,218,0.1)", border: "1px solid rgba(100,255,218,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: S.mono, fontSize: 11, fontWeight: 600, color: S.accent,
          letterSpacing: "0.05em" }}>
          {cert.badge}
        </div>
        <span style={{ fontFamily: S.mono, fontSize: 11, color: S.textMute }}>{cert.year}</span>
      </div>
      <div>
        <h3 style={{ fontSize: 13.5, fontWeight: 600,
          color: hov ? S.accent : S.textPri, marginBottom: 4, transition: "color 200ms",
          lineHeight: 1.4 }}>{cert.title}</h3>
        <p style={{ fontSize: 12, color: S.textMute, fontFamily: S.mono }}>{cert.issuer}</p>
      </div>
    </a>
  );
}

/* ── Form input ── */
function FormInput({ label, type = "text", value, onChange, S }) {
  return (
    <div>
      <label style={{ display: "block", marginBottom: 8, fontFamily: S.mono, fontSize: 11,
        color: S.accent, letterSpacing: "0.18em", textTransform: "uppercase" }}>{label}</label>
      <input type={type} value={value} placeholder={label}
        onChange={(e) => onChange(e.target.value)}
        onFocus={(e) => (e.target.style.borderColor = "rgba(100,255,218,0.45)")}
        onBlur={(e)  => (e.target.style.borderColor = "rgba(100,255,218,0.12)")}
        style={{ width: "100%", background: "rgba(255,255,255,0.025)",
          border: "1px solid rgba(100,255,218,0.12)", borderRadius: 6,
          padding: "11px 14px", fontSize: 14, color: S.textPri,
          fontFamily: S.sans, outline: "none", transition: "border-color 200ms",
          boxSizing: "border-box" }} />
    </div>
  );
}