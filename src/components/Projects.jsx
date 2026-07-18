import projects from "../data/projects.json";
import useReveal from "../hooks/useReveal";
import "./Projects.css";

function ProjectCard({ project }) {
  const ref = useReveal();

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="project-card reveal"
      ref={ref}
    >
      <div className="project-card-top">
        <span className="project-date">{project.date}</span>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="project-tags">
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </a>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const titleRef = useReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="reveal" ref={titleRef}>
          <p className="eyebrow">Work</p>
          <h2 className="section-title">Projects</h2>
        </div>

        {featured.length > 0 && (
          <div className="project-grid project-grid-featured">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}

        {rest.length > 0 && (
          <div className="project-grid">
            {rest.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
