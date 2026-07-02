export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3 className="project-card__name">{project.name}</h3>
      <p className="project-card__description">{project.description}</p>
      <p className="project-card__achievement">{project.achievement}</p>
      <div className="project-card__footer">
        <div className="stack-tags">
          {project.stack.map((tag) => (
            <span key={tag} className="stack-tag">{tag}</span>
          ))}
        </div>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub →
        </a>
      </div>
    </article>
  );
}
