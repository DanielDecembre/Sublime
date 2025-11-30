import Image from "next/image";
import NavBar from "./components/nav-bar";
import ProjectCard from "./components/project-cards";
import Footer from "./components/footer";
import "./globals.css";



/* const projectData =[
  { id: 1, title: "E-Commerce Site", description: "Built a robust e-commerce platform.", imageUrl: "via.placeholder.com" },
  { id: 2, title: "Portfolio Website", description: "Created a personal portfolio site.", imageUrl: "via.placeholder.com" },
] */

const Home = () => {
  return (
    <main>
      <NavBar/>
    <section id="hero">
      <h1>Sublime</h1>
      <h3> Software Agency</h3>
    </section>
    <section id="about-me">

    </section>
    <section id="services">
      <h2>Case Studies & Client Work</h2>
      <div className="project-cards">
        {/* {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
            />
        ))} */}

      </div>
    </section>
    <section id="contact">

    </section>
    <Footer/>
    </main>
  );
};

export default Home;
