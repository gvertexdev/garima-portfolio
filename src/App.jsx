import aerisImage from "./assets/projects/aeris.png";
import sukoonlyImage from "./assets/projects/sukoonly.png";
import crowdtrackImage from "./assets/projects/crowdtrack.png";

function App() {
  return (
    <main>
      <nav className="navbar">
        <a href="#" className="logo">
          GB.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">BCA STUDENT · DATA · AI · DEVELOPMENT</p>

          <h1>
            Building with
            <br />
            <span>data, AI & code.</span>
          </h1>

          <p className="hero-description">
            I'm Garima Bisht — a BCA student exploring data science,
            artificial intelligence and software development through
            real-world projects.
          </p>

          <div className="hero-actions">
            <a href="#work" className="button button-primary">
              View my work
            </a>

            <a
  href="/Garima_Bisht_Portfolio_Resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="hero-button"
>
  VIEW RESUME ↗
</a>
            
            <a href="#contact" className="button button-secondary">
              Let's connect
            </a>
          </div>
        </div>

        <div className="hero-number">
          01
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-label">
          <span>02</span>
          <span>About</span>
        </div>

        <div className="about-content">
          <h2>
            Curious about how
            <br />
            <span>things work.</span>
          </h2>

        <div className="about-text">
          <p>
            I'm a BCA student interested in data science, artificial
            intelligence and software development. I enjoy taking an idea,
            breaking it down, and turning it into something people can
            actually use.
         </p>

          <p>
            My work so far has ranged from data analysis and machine
            learning to AI-powered applications, hackathon projects and
            full-stack development.
         </p>

          <p>
             Right now, I'm focused on strengthening my foundations in
             Python, SQL, data analysis and machine learning while continuing
             to build practical projects.
           </p>
         </div>
      </div>

      <div className="about-facts">
        <div>
           <strong>01</strong>
           <span>Data & AI</span>
        </div>

        <div>
           <strong>02</strong>
           <span>Building Projects</span>
        </div>

        <div>
          <strong>03</strong>
          <span>Always Learning</span>
        </div>
     </div>
   </section>

      <section id="work" className="projects-section">
  <div className="section-label">
    <span>03</span>
    <span>Selected Work</span>
  </div>

  <div className="projects-heading">
    <h2>
      Things I've
      <br />
      <span>built.</span>
    </h2>

    <p>
      A selection of projects where I explored data, AI,
      software development and real-world problem solving.
    </p>
  </div>

  <div className="projects-list">

    {/* PROJECT 01 */}
    <article className="project project-featured">
      <div className="project-number">01</div>

      <div className="project-info">
        <p className="project-type">AI · WEATHER · CONVERSATIONAL PLATFORM</p>

        <h3>Aeris</h3>

        <p className="project-description">
          A converversational weather platform that combines real-time 
          weather data with AI-powered queries, location-aware 
          advisories and specialized experiences such as Farmer mode.
        </p>

        <div className="project-tags">
          <span>Python</span>
          <span>FastAPI</span>
          <span>AI</span>
          <span>Weather APIs</span>
          <span>Flutter</span>
        </div>

        <span className="project-link project-link-disabled">
  Project details ↗
</span>
      </div>

      <div className="project-visual project-visual-aeris">
  <img src={aerisImage} alt="Aeris weather application interface" />
</div>
    </article>

    {/* PROJECT 02 */}
    <article className="project">
      <div className="project-number">02</div>

      <div className="project-info">
        <p className="project-type">AI · WELLNESS · HACKATHON PROJECT</p>

        <h3>Sukoonly</h3>

        <p className="project-description">
          An AI companion that turns everyday habits and mood signals
          into a personalized wellness experience, with burnout-risk
          insights, recovery plans, micro-tasks and supportive nudges.
        </p>

        <div className="project-tags">
          <span>JavaScript</span>
          <span>Firebase</span>
          <span>Node.js</span>
          <span>AI</span>
          <span>Voice</span>
        </div>

        <span className="project-link project-link-disabled">
  Project details ↗
</span>
      </div>

      <div className="project-visual project-visual-sukoonly">
        <img src={sukoonlyImage} alt="Sukoonly AI companion interface" />
      </div>
    </article>

    {/* PROJECT 03 */}
    <article className="project">
      <div className="project-number">03</div>

      <div className="project-info">
        <p className="project-type">CROWD INTELLIGENCE · IOT · HACKATHON PROJECT </p>

        <h3>CrowdTrack</h3>

        <p className="project-description">
          A real-time crowd-intelligence prototype that simulates
          sensor data to monitor occupancy, zone density, entry flow
          and critical conditions through an operator dashboard.
        </p>

        <div className="project-tags">
          <span>IoT</span>
          <span>Data Visualization</span>
          <span>Simulation</span>
          <span>Alerts</span>
        </div>

        <span className="project-link project-link-disabled">
  Project details ↗
</span>
      </div>

      <div className="project-visual project-visual-crowd">
  <img
    src={crowdtrackImage}
    alt="CrowdTrack crowd intelligence dashboard"
  />
</div>
    </article>

  </div>
</section>

      <section id="experience" className="experience-section">
  <div className="section-label">
    <span>04</span>
    <span>Experience</span>
  </div>

  <div className="experience-intro">
    <h2>
      Where I've
      <br />
      <span>worked.</span>
    </h2>
  </div>

  <article className="experience-item">
    <div className="experience-date">
      NOV 2025 — MAY 2026
    </div>

    <div className="experience-main">
      <div className="experience-heading">
        <div>
          <h3>Data Science Intern</h3>
          <p>Internship Studio · Remote</p>
        </div>

        <span className="experience-index">01</span>
      </div>

      <p className="experience-summary">
        Worked on practical data science tasks involving data
        preprocessing, exploratory analysis, visualization and
        introductory machine learning.
      </p>

      <ul className="experience-points">
        <li>
          Performed data cleaning and preprocessing using Python,
          Pandas and NumPy.
        </li>

        <li>
          Conducted exploratory data analysis to identify trends,
          patterns and useful insights.
        </li>

        <li>
          Built and evaluated basic machine learning models as
          part of data-driven problem solving.
        </li>

        <li>
          Created visualizations using Matplotlib and Seaborn
          and worked extensively with Jupyter Notebook.
        </li>
      </ul>
    </div>
  </article>
</section>

      <section className="skills-section">
  <div className="section-label">
    <span>05</span>
    <span>Toolkit</span>
  </div>

  <div className="skills-grid">
    <div className="skills-heading">
      <h2>
        Tools I
        <br />
        <span>use.</span>
      </h2>
    </div>

    <div className="skills-list">
      <div className="skill-group">
        <h3>Data</h3>
        <p>Python · SQL · Pandas · NumPy · Excel</p>
      </div>

      <div className="skill-group">
        <h3>AI / ML</h3>
        <p>Machine Learning · GenAI · Prompt Engineering</p>
      </div>

      <div className="skill-group">
        <h3>Development</h3>
        <p>HTML · CSS · JavaScript · Firebase · Flutter</p>
      </div>

      <div className="skill-group">
        <h3>Tools</h3>
        <p>Git · GitHub · Jupyter · Power BI · Matplotlib</p>
      </div>
    </div>
  </div>
</section>

      <section className="recognition-section">
  <div className="section-label">
    <span>06</span>
    <span>Recognition</span>
  </div>

  <div className="recognition-grid">
    <div className="recognition-heading">
      <h2>
        Built under
        <br />
        <span>pressure.</span>
      </h2>
    </div>

    <div className="recognition-list">
      <article className="recognition-item">
        <div>
          <span className="recognition-number">01</span>
          <h3>Sukoonly</h3>
        </div>

        <p>
          36-hour hackathon project focused on AI-assisted
          wellness, habits and burnout prevention.
        </p>

        <span className="recognition-meta">
          JSS University · 2026
        </span>
      </article>

      <article className="recognition-item">
        <div>
          <span className="recognition-number">02</span>
          <h3>CrowdTrack</h3>
        </div>

        <p>
          36-hour hackathon project exploring real-time crowd
          intelligence, simulated sensors and emergency alerts.
        </p>

        <span className="recognition-meta">
          IITM Janakpuri · Apr 2026
        </span>
      </article>

      <article className="recognition-item">
        <div>
          <span className="recognition-number">03</span>
          <h3>Aeris</h3>
        </div>

        <p>
          Conversational weather platform developed for the
          Smart India Hackathon 2026 problem statement.
        </p>

        <span className="recognition-meta">
          SIH 2026
        </span>
      </article>
    </div>
  </div>
</section>

      <section id="contact" className="contact-section">
  <div className="section-label">
    <span>07</span>
    <span>Contact</span>
  </div>

  <div className="contact-content">
    <div>
      <p className="contact-eyebrow">HAVE AN OPPORTUNITY?</p>

      <h2>
        Let's build
        <br />
        <span>something.</span>
      </h2>
    </div>

    <div className="contact-right">
      <p>
        I'm open to internships, entry-level opportunities,
        collaborations and interesting projects around data,
        AI and development.
      </p>

      <a
        href="mailto:garima.bisht.in@gmail.com"
        className="contact-email"
      >
        garima.bisht.in@gmail.com ↗
      </a>
    </div>
  </div>

  <footer className="footer">
    <span>© 2026 Garima Bisht</span>

    <div className="footer-links">
      <a
        href="https://github.com/gvertexdev"
        target="_blank"
        rel="noreferrer"
      >
        GitHub ↗
      </a>

      <a
        href="https://linkedin.com/in/garimabishtdev"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn ↗
      </a>
    </div>
  </footer>
</section>
    </main>
  );
}

export default App;
