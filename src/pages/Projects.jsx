import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <div className="section">
      <h2 className="section-title">Projects</h2>

      <ProjectCard
        title="Todo App"
        description="A checklist where you can add items and cross them off once completed."
        link="https://igicf.github.io/expo-todo/"
      />

      <ProjectCard
        title="Exercise App"
        description="A React app that allows you to track workouts with reps and timers."
        link="https://igicf.github.io/updated-exercise/"
      />

      <ProjectCard
        title="Universe in a Box"
        description="A creative project exploring space and motion through art."
        link="/image"
      />
    </div>
  );
}

export default Projects;