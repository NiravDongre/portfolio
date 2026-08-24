/**
 * Portfolio — backend & full-stack developer
 * ------------------------------------------------------------
 * Customize everything in the PROFILE object below: name, bio,
 * photo, socials, tech stack, and projects.
 *
 * PHOTO SLOT: set PROFILE.photoUrl to fill the frame. Drop a
 * file in src/assets (e.g. photo.jpg) and do:
 *   import photo from './assets/photo.jpg';
 *   ... photoUrl: photo
 * or just paste a hosted image URL. Leave it empty to keep the
 * placeholder.
 *
 * Retheme colors/fonts from the CSS variables in `.nrv-root`
 * and `.nrv-root.dark` at the top of src/index.css.
 * ------------------------------------------------------------
 */

import { useState, Fragment } from 'react';
import { Sun, Moon, User } from 'lucide-react';
import backgroundurl from "../assets/my-photo.jpeg"

const EMAIL = 'nsd3284@gmail.com'; // ← replace with your real email

const PROFILE = {
  name: 'Nirav Dongre',
  eyebrow: 'B.Tech CSE · Backend & Full-Stack',
  tagline: 'Always trying to  build backend heavy application while also doing fullstack',
  bio: "B.Tech Computer Science & Engineering student focused on backend systems and full-stack development. ",
  photoUrl: backgroundurl, // ← add your photo here
  photoAlt: "Nirav's Photo",
  availability: { show: true, text: 'open to internships & collabs' },
  email: EMAIL,
  resumeUrl: '', // add a link to your resume PDF to show a "resume" link in the nav
  socials: [
    { label: 'GitHub', href: 'https://github.com/NiravDongre' },
    { label: 'Twitter', href: 'https://x.com/Nsd339775040772' },
    { label: 'Email', href: `mailto:${EMAIL}` },
  ],
  stack: [
    { label: 'Languages', tags: ['C++', 'JavaScript', 'TypeScript'] },
    { label: 'Backend', tags: ['Node.js', 'Express', 'Hono.js', 'REST APIs', 'WebSockets', 'and more'] },
    { label: 'Frontend', tags: ['Nextjs','React', 'Tailwind CSS', 'HTML/CSS'] },
    { label: 'Databases', tags: ['PostgresSQL', 'MongoDB', 'Redis'] },
    { label: 'Tools', tags: ['Git', 'Prisma ORM', 'Turborepo' , 'Docker', 'Postman', 'Linux'] },
  ],
  // Placeholders — replace with your real projects, links, and descriptions.
  projects: [
    {
      category: 'minSkribble',
      title: 'Skirbble like Game',
      description: 'A raw WebSocket application from Scratch with Redis as Databases for low latency with websocket authentication',
      tags: ['TypeScript', 'WebSockets', 'Redis', 'Express'],
      githubUrl: 'https://github.com/NiravDongre/minSkribble',
      demoUrl: 'https://minskribble-gamma.vercel.app/',
    },
  ],
};

function Photo({ src, alt }) {
  return (
    <div className="photo-frame">
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="photo-placeholder f-mono">
          <User size={22} strokeWidth={1.4} />
          <span>your photo here</span>
        </div>
      )}
    </div>
  );
}

function StackRow({ label, tags }) {
  return (
    <div className="stack-row">
      <span className="stack-label f-mono">{label}</span>
      <span className="stack-tags f-mono">{tags.join(' · ')}</span>
    </div>
  );
}

function SocialRow({ items }) {
  return (
    <div className="social-row f-mono">
      {items.map((s, i) => (
        <Fragment key={s.label}>
          <a
            href={s.href}
            target={s.label === 'Email' ? undefined : '_blank'}
            rel={s.label === 'Email' ? undefined : 'noreferrer'}
            onClick={(e) => { if (!s.href || s.href === '#') e.preventDefault(); }}
          >
            {s.label}
          </a>
          {i < items.length - 1 && <span className="dot-sep">·</span>}
        </Fragment>
      ))}
    </div>
  );
}

function ProjectRow({ project }) {
  const guard = (href) => (e) => { if (!href || href === '#') e.preventDefault(); };
  return (
    <div className="project-row">
      <div className="project-row-head">
        <h3 className="project-title f-display">{project.title}</h3>
        <span className="project-category f-mono">{project.category}</span>
      </div>
      <p className="project-desc f-body">{project.description}</p>
      <div className="project-meta">
        <span className="project-tags-text f-mono">{project.tags.join(' · ')}</span>
        <span className="project-links f-mono">
          <a href={project.githubUrl} target="_blank" rel="noreferrer" onClick={guard(project.githubUrl)}>Code</a>
          <span className="dot-sep">·</span>
          <a href={project.demoUrl} target="_blank" rel="noreferrer" onClick={guard(project.demoUrl)}>Live demo</a>
        </span>
      </div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className={`nrv-root f-body ${theme === 'dark' ? 'dark' : ''}`}>
      <header className="nav-bar">
        <div className="container nav-inner">
          <a href="#top" className="nav-logo f-mono">
            <span style={{ color: 'var(--accent)' }}>~/</span>{PROFILE.name.toLowerCase()}
          </a>
          <nav className="nav-links f-mono">
            <a href="#stack" className="nav-link">stack</a>
            <a href="#projects" className="nav-link">projects</a>
            <a href="#contact" className="nav-link">contact</a>
            {PROFILE.resumeUrl && (
              <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer" className="nav-link">resume</a>
            )}
          </nav>
          <button onClick={toggleTheme} aria-label="Toggle color theme" className="theme-toggle">
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        </div>
      </header>

      <section id="top" className="container hero-grid reveal">
        <div>
          <p className="f-mono" style={{ fontSize: '.72rem', letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 18 }}>
            {PROFILE.eyebrow}
          </p>
          <h1 className="f-display" style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3.75rem)', lineHeight: 1.08, marginBottom: 14, fontWeight: 600 }}>
           {PROFILE.name}
          </h1>
          <p className="f-display" style={{ fontStyle: 'italic', fontSize: 'clamp(1.05rem, 2.1vw, 1.3rem)', color: 'var(--ink-muted)', marginBottom: 22, lineHeight: 1.4 }}>
            {PROFILE.tagline}
          </p>
          <p className="f-body" style={{ fontSize: '1rem', lineHeight: 1.7, color: 'var(--ink-muted)', marginBottom: 26, maxWidth: 520 }}>
            {PROFILE.bio}
          </p>
          {PROFILE.availability.show && (
            <a href={`mailto:${PROFILE.email}`} className="availability f-mono">
              <span className="status-dot" /> {PROFILE.availability.text}
            </a>
          )}
          <SocialRow items={PROFILE.socials} />
        </div>
        <Photo src={PROFILE.photoUrl} alt={PROFILE.photoAlt} />
      </section>

      <section id="stack" className="section">
        <div className="container">
          <div className="section-eyebrow f-mono">Stack</div>
          <h2 className="section-title f-display">What I build with</h2>
          <div style={{ marginTop: 26 }}>
            {PROFILE.stack.map((row) => <StackRow key={row.label} {...row} />)}
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="section-eyebrow f-mono">Projects</div>
          <h2 className="section-title f-display">Things I've built</h2>
          <p className="section-sub f-body">A few things I've built while learning backend and full-stack development.</p>
          <div>
            {PROFILE.projects.map((p) => <ProjectRow key={p.title} project={p} />)}
          </div>
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="container footer-row">
          <span className="footer-text f-mono">© {new Date().getFullYear()} {PROFILE.name}...</span>
          <SocialRow items={PROFILE.socials} />
        </div>
      </footer>
    </div>
  );
}
