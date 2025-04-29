
import '../styles/global.css'; // Global CSS styles

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// File: pages/index.js (Home Page)
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to My Portfolio</h1>
      <p>Explore my skills and projects.</p>
      <nav>
        <ul>
          <li><Link href="/about">About Me</Link></li>
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

// File: pages/about.js (About Page)
export default function About() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>About Me</h1>
      <p>I am a passionate web developer with expertise in Next.js, TypeScript, and RESTful API design.</p>
    </div>
  );
}

// File: pages/projects.js (Projects Page with SSR)
export async function getServerSideProps() {
  // Mock API data for simplicity
  const projects = [
    { id: 1, name: 'Next.js Portfolio Website' },
    { id: 2, name: 'React E-commerce App' },
    { id: 3, name: 'TypeScript To-Do List' },
  ];

  return { props: { projects } };
}

export default function Projects({ projects }) {
  return (
    <div style={{ padding: '20px' }}>
      <h1>My Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}

// File: pages/contact.js (Contact Page)
export default function Contact() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Contact Me</h1>
      <p>Email: developer@example.com</p>
      <p>LinkedIn: linkedin.com/in/yourprofile</p>
    </div>
  );
}

// File: styles/global.css (Global Styles)
/* Add this in a new styles/global.css file */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f5f5f5;
}
h1 {
  color: #0070f3;
}
nav ul {
  list-style: none;
  padding: 0;
}
nav li {
  display: inline;
  margin: 0 10px;
}
