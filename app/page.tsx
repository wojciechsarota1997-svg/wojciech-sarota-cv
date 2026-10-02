import Image from "next/image";
import { PrintButton } from "@/components/PrintButton";
import { education, jobs, projects, site, skills } from "@/content/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#person`,
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: "Kraków", addressCountry: "PL" },
  worksFor: { "@type": "Organization", name: "Jaris Inc." },
  alumniOf: education.map((e) => ({ "@type": "CollegeOrUniversity", name: e.school })),
  knowsAbout: ["Java", "Spring Boot", "Microservices", "OAuth2", "Python", "FastAPI", "PostgreSQL", "AWS"],
  sameAs: [site.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <div className="wrap">
        <header className="top">
          <b>{site.name}</b>
          <nav aria-label="Sections">
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        <main>
          <div className="head">
            <h1>
              Wojciech
              <br />
              Sarota
            </h1>
            <p className="role">{site.headline}</p>
            <address className="contact not-italic">
              <div>
                <small>Location</small>
                {site.location}
              </div>
              <a href={`mailto:${site.email}`}>
                <small>Email</small>
                {site.email}
              </a>
              <a href={`tel:${site.phone}`}>
                <small>Phone</small>
                {site.phoneDisplay}
              </a>
              <a href={site.linkedin}>
                <small>LinkedIn</small>
                {site.linkedinHandle}
              </a>
            </address>
            <div className="actions">
              <PrintButton />
              <a className="btn btn-ghost" href="#contact">
                Get in touch
              </a>
            </div>
            <p className="about">{site.summary}</p>
          </div>

          <section className="section" id="experience">
            <h2 className="h2">Experience</h2>
            {jobs.map((j) => (
              <article key={j.when} className="job">
                <div className="when">
                  {j.when}
                  <small>{j.company}</small>
                </div>
                <div className="what">
                  <h3>
                    {j.title} <span>{j.at}</span>
                  </h3>
                  <ul className="wins">
                    {j.wins.map((w) => (
                      <li key={w}>{w}</li>
                    ))}
                  </ul>
                  <ul className="stack" aria-label="Technologies">
                    {j.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </section>

          <section className="section" id="education">
            <h2 className="h2">Education</h2>
            <div className="edu">
              {education.map((e) => (
                <div key={e.degree} className="card">
                  <span className="years">{e.years}</span>
                  <h3>{e.degree}</h3>
                  <p>
                    {e.school}, grade {e.grade}
                  </p>
                  <q>{e.thesis}</q>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="skills">
            <h2 className="h2">Skills</h2>
            <dl className="spec">
              {skills.map((s) => (
                <div key={s.group}>
                  <dt>{s.group}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="section" id="projects">
            <h2 className="h2">Side projects</h2>
            <p className="lead">
              Websites for local businesses, end to end: design, Next.js code, domain setup and Google Search Console.
            </p>
            <div className="projects">
              {projects.map((p) => (
                <article key={p.name} className="proj">
                  <Image src={p.image} alt={p.alt} sizes="(max-width: 900px) 100vw, 560px" />
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.text}</p>
                    <a href={p.url}>Visit the site</a>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>

      <footer className="end" id="contact">
        <div className="wrap">
          <h2 className="h2">Let&apos;s talk</h2>
          <div className="actions">
            <a className="btn" href={`mailto:${site.email}`}>
              Send an email
            </a>
            <a className="btn" href={site.linkedin}>
              Message me on LinkedIn
            </a>
          </div>
          <small>
            {site.name}, {site.location}
          </small>
        </div>
      </footer>
    </>
  );
}
