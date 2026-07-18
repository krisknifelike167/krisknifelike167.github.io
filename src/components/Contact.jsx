import profile from "../data/profile.json";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

export default function Contact() {
  const ref = useReveal();

  return (
    <section id="contact" className="section">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">Get in touch</p>
        <h2 className="section-title">Let's talk</h2>
        <p className="contact-lead">
          Open to internships, collaborations, and interesting problems. Reach out any of these ways.
        </p>
        <div className="contact-links">
          <a className="contact-link" href={`mailto:${profile.email}`}>
            Email
            <span>{profile.email}</span>
          </a>
          <a className="contact-link" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
            <span>{profile.github.replace("https://", "")}</span>
          </a>
          <a className="contact-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
            <span>{profile.linkedin.replace("https://", "")}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
