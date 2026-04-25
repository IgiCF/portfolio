function ProjectCard({ title, description, link }) {
  return (
    <div style={{ border: "1px solid #000000", borderRadius: "50px", padding: "1rem", margin: "1rem",  }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <h2>View Project</h2>
      </a>
    </div>
  );
}

export default ProjectCard;