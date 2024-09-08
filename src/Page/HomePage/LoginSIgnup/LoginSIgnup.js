
import styles from './LoginSIgnup.module.css';
import profile from '../../../../src/Assts/myphoto.jpg';
import javascript from '../../../../src/Assts/JavaScript.png';
import reactjs from '../../../../src/Assts/React.png';
import nextjs from '../../../../src/Assts/Next.js.png';
import nodejs from '../../../../src/Assts/Node.js.png';
import MongoDB from '../../../../src/Assts/MongoDB.png';

const LoginSIgnup = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1>Hello, I'm Kamesh</h1>
          <p>A passionate Full-Stack Developer with 2 years of experience in creating visually appealing and responsive web applications.</p>
          <a href="#projects" className={styles.ctaButton}>See My Work</a>
        </div>
        <div className={styles.heroImage}>
          <img
            src={profile}
            alt="Profile Image"
            width={300}
            height={300}
            className={styles.profileImage}
          />
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection} id="skills">
        <h2>Skills</h2>
        <div className={styles.skillsGrid}>

          <div className={styles.skillCard}>
            <img src={javascript} alt="Prisma" width={80} height={80} />
            <p>JavaScript</p>
          </div>
          <div className={styles.skillCard}>
            <img src={reactjs} alt="React.js" width={80} height={80} />
            <p>React.js</p>
          </div>
          <div className={styles.skillCard}>
            <img style={{ backgroundColor:"white"}} src={nextjs} alt="Next.js" width={80} height={80} />
            <p>Next.js</p>
          </div>

          <div className={styles.skillCard}>
            <img src={nodejs} alt="nodejs" width={80} height={80} />
            <p></p>Nodejs
          </div>
          
          <div className={styles.skillCard}>
            <img src={MongoDB} alt="MongoDB" width={80} height={80} />
            <p>MongoDB</p>
          </div>
          
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.projectsSection} id="projects">
        <h2>Projects</h2>
        <div className={styles.projectsGrid}>
          <div className={styles.projectCard}>
            <h3>E-Commerce Website</h3>
            <p>An e-commerce platform built with Next.js, Prisma, and MongoDB. It features real-time product management and secure user authentication.</p>
            <a href="/projects/ecommerce" className={styles.projectLink}>View Project</a>
          </div>
          <div className={styles.projectCard}>
            <h3>Pharmacy Management App</h3>
            <p>A pharmacy management solution with Next.js, Node.js, and Express for store managers and sales executives to manage orders and inventory.</p>
            <a href="/projects/pharmacy-management" className={styles.projectLink}>View Project</a>
          </div>
          {/* Add more project cards */}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} id="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to collaborate or have any questions, feel free to reach out.</p>
        <a href="mailto:saharjun031@gmail.com" className={styles.ctaButton}>Get In Touch</a>
      </section>
    </div>
  );
};

export default LoginSIgnup;
