import Image from "next/image";


interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;

}

 const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <Image 
      src={imageUrl}
      alt="Frank Made It" 
      width={100}
      height={75}/>
      <h2 className="project-title">{title}</h2>
      <p className="project-description">{description}</p>
    </div>
  );
};

export default ProjectCard;