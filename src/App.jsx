import { useState } from "react";
import "./App.css";

const projects = [
  {
    title: "SnapClass",
    category: "AI / ML",
    description:
      "AI-based attendance management system using face recognition and machine learning to automate student attendance.",
    tech: [
      "Python",
      "SVM",
      "Face Recognition",
      "Streamlit",
      "Supabase"
    ],
    link: "https://smart-snapclass.streamlit.app/",
    linkText: "Live Demo ↗",
  },

  {
    title: "AI Gym Trainer",
    category: "Computer Vision",
    description:
      "An AI-powered fitness trainer that uses computer vision to analyse exercises and provide an interactive workout experience.",
    tech: [
      "Python",
      "OpenCV",
      "Computer Vision",
      "AI",
      "Streamlit"
    ],
    link: "https://real-ai-gym-trainer.streamlit.app/",
    linkText: "Live Demo ↗",
  },

  {
    title: "PDF RAG + Groq",
    category: "Generative AI",
    description:
      "A retrieval-augmented generation system designed to answer questions from PDF documents using embeddings, vector search and an LLM.",
    tech: [
      "Python",
      "RAG",
      "ChromaDB",
      "Sentence Transformers",
      "Groq",
      "FastAPI"
    ],
    link: "https://github.com/simran-kaur5/pdf-rag-groq",
    linkText: "GitHub ↗",
  },

  {
    title: "DQN / Deep Learning",
    category: "Reinforcement Learning",
    description:
      "Deep learning experiments including exploration of neural networks and reinforcement learning concepts using Python and PyTorch.",
    tech: [
      "Python",
      "PyTorch",
      "DQN",
      "Deep Learning"
    ],
    link: "https://github.com/simran-kaur5/AI-ML-Projects/tree/main/Deep%20Learning",
    linkText: "GitHub ↗",
  },
];

const experience = [
  {
    company: "XYLOFY AI",
    role: "AI / Data Science Intern",
    date: "Jun 2026 – Jul 2026",
  },
  {
    company: "ALert Enterprise",
    role: "Software Engineer Intern",
    date: "Internship",
  }
];

function App() {
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "AI / ML",
    "Generative AI",
    "Computer Vision",
    "Reinforcement Learning",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((project) => project.category === filter);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">

      {/* NAVBAR */}

      <nav className="navbar">
        <div className="nav-container">

          <div className="logo">
            Simranjit Kaur
          </div>

          <div className="nav-links">
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("experience")}>
              Experience
            </button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </div>

          <a
            className="github-nav"
            href="https://github.com/simran-kaur5"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>

        </div>
      </nav>


      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <div className="availability">
            <span></span>
            Open to internship opportunities
          </div>

          <h1>
            Building with
            <span> AI & software.</span>
          </h1>

          <p className="hero-text">
            I'm Simranjit Kaur, a Computer Science & Engineering student
            focused on AI/ML, software engineering and data science.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => scrollTo("projects")}
            >
              View my work
            </button>

            <a
              href="https://github.com/simran-kaur5"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              GitHub ↗
            </a>

          </div>

        </div>


        <div className="hero-card">

          <div className="terminal-top">
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className="terminal-body">

            <p>
              <span className="code-purple">const</span>{" "}
              <span className="code-blue">developer</span> = {"{"}
            </p>

            <p className="indent">
              name: <span className="code-green">"Simranjit Kaur"</span>,
            </p>

            <p className="indent">
              focus: <span className="code-green">"AI / ML"</span>,
            </p>

            <p className="indent">
              degree: <span className="code-green">"B.Tech CSE"</span>,
            </p>

            <p className="indent">
              cgpa: <span className="code-orange">8.83</span>
            </p>

            <p>{"};"}</p>

          </div>

        </div>

      </section>


      {/* ABOUT */}

      <section id="about" className="section">

        <div className="section-title">
          <span>01</span>
          <h2>About me</h2>
        </div>

        <div className="about-grid">

          <div className="about-main">

            <h3>
              Computer Science student interested in
              building practical AI systems.
            </h3>

            <p>
              I'm currently pursuing a B.Tech in Computer Science &
              Engineering at Guru Nanak Dev Engineering College, Ludhiana.
            </p>

            <p>
              My interests span machine learning, generative AI,
              computer vision, reinforcement learning and software
              engineering.
            </p>

            <p>
              I enjoy turning ideas into working systems and learning
              the engineering behind them along the way.
            </p>

          </div>

          <div className="stats">

            <div className="stat">
              <strong>8.83</strong>
              <span>CGPA / 10</span>
            </div>

            <div className="stat">
              <strong>460+</strong>
              <span>DSA Problems</span>
            </div>

            <div className="stat">
              <strong>2028</strong>
              <span>Graduation</span>
            </div>

          </div>

        </div>

      </section>


      {/* PROJECTS */}

      <section id="projects" className="section projects-section">

        <div className="section-title">
          <span>02</span>
          <h2>Selected projects</h2>
        </div>

        <p className="section-description">
          Some of the systems and experiments I've worked on while
          exploring AI and software engineering.
        </p>

        <div className="filters">

          {categories.map((category) => (
            <button
              key={category}
              className={filter === category ? "selected" : ""}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}

        </div>

        <div className="projects-grid">

          {filteredProjects.map((project, index) => (

            <article className="project-card" key={project.title}>

              <div className="project-top">

                <span className="project-number">
                  0{index + 1}
                </span>

                <span className="project-category">
                  {project.category}
                </span>

              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech">

                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}

              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                {project.linkText}
              </a>

            </article>

          ))}

        </div>

      </section>


      {/* EXPERIENCE */}

      <section id="experience" className="section">

        <div className="section-title">
          <span>03</span>
          <h2>Experience</h2>
        </div>

        <div className="experience-list">

          {experience.map((item, index) => (

            <div className="experience-item" key={item.company}>

              <div className="experience-number">
                0{index + 1}
              </div>

              <div className="experience-info">

                <div>
                  <h3>{item.role}</h3>
                  <h4>{item.company}</h4>
                </div>

                <span>{item.date}</span>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* EDUCATION */}

      <section className="education-section">

        <div className="education-container">

          <div className="section-title light">
            <span>04</span>
            <h2>Education</h2>
          </div>

          <div className="education-content">

            <div>

              <p className="education-year">
                2024 — 2028
              </p>

              <h3>
                Guru Nanak Dev Engineering College
              </h3>

              <p>
                Bachelor of Technology in Computer Science &
                Engineering
              </p>

              <small>
                Ludhiana, Punjab, India
              </small>

            </div>

            <div className="education-score">

              <span>CGPA</span>

              <strong>8.83</strong>

              <small>/ 10</small>

            </div>

          </div>

        </div>

      </section>


      {/* SKILLS */}

      <section id="skills" className="section">

        <div className="section-title">
          <span>05</span>
          <h2>Skills</h2>
        </div>

        <div className="skills-grid">

          <div className="skill-box">
            <h3>Languages</h3>
            <div>
              <span>Python</span>
              <span>C++</span>
              <span>SQL</span>
              <span>JavaScript</span>
            </div>
          </div>

          <div className="skill-box">
            <h3>AI / ML</h3>
            <div>
              <span>PyTorch</span>
              <span>Scikit-learn</span>
              <span>NLP</span>
              <span>Computer Vision</span>
              <span>RAG</span>
              <span>DQN</span>
            </div>
          </div>

          <div className="skill-box">
            <h3>Development</h3>
            <div>
              <span>FastAPI</span>
              <span>Streamlit</span>
              <span>Git</span>
              <span>GitHub</span>
            </div>
          </div>

          <div className="skill-box">
            <h3>Data & Databases</h3>
            <div>
              <span>NumPy</span>
              <span>Pandas</span>
              <span>PostgreSQL</span>
              <span>MySQL</span>
              <span>Supabase</span>
              <span>ChromaDB</span>
            </div>
          </div>

        </div>

      </section>


      {/* CONTACT */}

      <section id="contact" className="contact-section">

        <div className="contact-container">

          <span className="contact-small">
            HAVE A PROJECT OR OPPORTUNITY?
          </span>

          <h2>
            Let's talk<span>.</span>
          </h2>

          <p>
            I'm interested in internships, engineering opportunities
            and projects involving AI/ML and software development.
          </p>

          <div className="contact-buttons">
            <a href="mailto:simranjitk26x@gmail.com">Email</a>
            <a href="https://www.linkedin.com/in/simranjit-kaur-15488331b/">LinkedIn</a>
            <a href="https://github.com/simran-kaur5">GitHub</a>
          </div>

        </div>

      </section>


      <footer>

        <span>© 2026 Simranjit Kaur</span>
      </footer>

    </div>
  );
}

export default App;