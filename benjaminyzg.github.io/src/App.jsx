import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

// ==========================================
// 1. ORIGINAL PROFILE CONTENT SECTIONS
// ==========================================
function Overview() {
  return (
    <div style={{ marginTop: '30px', lineHeight: '1.6' }}>
      <h2 style={{ color: '#222', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>Project Overview</h2>
      <p>Hi there, I'm Benjamin 👋 Welcome to my GitHub Profile Hub! 
         I am a passionate developer focused on building innovative, low-latency architectures and utilizing structured CI/CD environments for software delivery.</p>
      
      <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#f8f9fa', borderRadius: '6px', borderLeft: '4px solid #0366d6' }}>
        <p style={{ margin: 0, fontStyle: 'italic', color: '#555' }}>
        "New to GitHub, and I'm trying to figure how to use this platform correctly and appropriately for both work and testing. 
        I believe that this is a tool that is necessary, or a basic requirement for a lot of technology companies, 
        particularly in the software development space doing CI/CD development."
        </p>
      </div>

      <h2> 🛠️ What I do and build </h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        I build proprietary, domain-specific machine learning models that are application and industry-specific based on the published, scientific journal and model designed for highly sensitive industry and mission-critical application. Some of the constraints include; time-sensitivity; low-latency and very short conceptualisation-to-development-to market timeframe.
      </p>
      
      <h2> 🛠️ Currently Working On:- </h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        <strong> • </strong> Express.js; Next.js; <br/>
        <strong> • </strong> Spring Boot; Spring IO; <br/>
        <strong> • </strong> Ruby by Rails; Django; <br/>
        <strong> • </strong> CSS Tailwind; React; Angular; <br/>
        <strong> • </strong> Java; SQL; C; C++; <br/>
      </p>
                    
      <h2>🚴Leisure/Hobbies </h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        <strong> • </strong> ✈️ Travelling (i.e. Leisure & Business), <br/>
        <strong> • </strong> 🤿 Recreational Scuba Diving (i.e. Open Water/Advanced), <br/>
        <strong> • </strong> 📖 Reading/Exercising (i.e. Running; Cycling), <br/>
        <strong> • </strong> 🥾 Hiking (i.e. Nature Park), <br/>
        <strong> • </strong> 😴 Sleeping/Resting/Listening to Music <br/>
      </p>

      <h2> 💡 Interests </h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        <strong> • </strong> Machine Learning (ML)/Deep Learning(DL)<br/>
        <strong> • </strong> Sustainability/Climate Change<br/>
        <strong> • </strong> Machine Learning Model (i.e. time-series modelling)<br/>
        <strong> • </strong> Full-Stack Development (i.e. Front/Back-End Development)<br/>
        <strong> • </strong> UX/UI Design & Prototyping<br/>
        <strong> • </strong> CI/CD Development & MLOps<br/>
        <strong> • </strong> Open Source Collaboration<br/>
      </p>

      <h2> 🛠️ Tools & Technologies </h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        • <strong>Languages:</strong> Python, JavaScript, TypeScript, Java, C++ <br/>
        • <strong>Frameworks:</strong> React, Node.js, Django; Rails on Ruby <br/>
        • <strong>DevOps:</strong> Docker, Kubernetes, GitHub Actions <br/>
        • <strong>MLOps:</strong> Weight & Biases (W&B); Hugging Face (HF); SageMaker <br/>
        • <strong>Databases:</strong> PostgreSQL, MongoDB, SQLite <br/>
        • <strong>Cloud:</strong> AWS, GCP <br/>
        • <strong>ML Framework:</strong> Tensorflow; Pytorch; Google Colab <br/>
        • <strong>Knowledge-Base Management:</strong> Confluence; Wiki; Trello; Jira <br/>
      </p>
                    
      <h2> 🪧 Commercial Collaboration </h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
        - Open for commercial collaboration in the area of advisory and consultancy work for government; capital market; healthcare and sustainability.<br/>
        - Open to speak for a nominal fee in public international conference and forum.<br/>
      </p>
    </div>
  );
}

function About() {
  return (
    <div style={{ marginTop: '30px', lineHeight: '1.6' }}>
      <h2 style={{ color: '#222', borderBottom: '1px solid #eee', paddingBottom: '10px' }}>📝 About Me</h2>
      
      <h3>Background</h3>
      <p>
        Born and raised in Singapore, Benjamin Yong is a computer engineering professional 
        with an adaptive background spanning systems administration, network engineering, 
        business process outsourcing, and public sector digital transformations.
      </p>

      <h3>Education</h3>
      <ul>
        <li>
          <strong>Nanyang Technological University, Singapore (2009 - 2013):</strong> Bachelor of Engineering (Computer Engineering) with a Minor in Business.
        </li>
      </ul>

      <h3>Professional Experience</h3>
      <ul>
        <li>
          <strong>Accenture Pte Ltd:</strong> Business and Technology Analyst (Health & Public Service), contributing to the whole-of-government digital transformation roadmap to build fully-digitized customer experiences.
        </li>
        <li>
          <strong>Trusted Hub Limited:</strong> Business Development Executive focused on digitalizing regulated, critical industry documents in compliance with Evidence Act standards.
        </li>
        <li>
          <strong>Commerzbank AG (Singapore Branch):</strong> Graduate Trainee in the APAC Network Engineering Team (managing Cisco infrastructure, firewalls, and trading floor telephony) and previously a Business Management Intern ensuring MAS Technology Outsourcing Guideline compliance.
        </li>
        <li>
          <strong>Topcall Messaging Pte Ltd (inCall System):</strong> Application Systems Engineer.
        </li>
      </ul>

      <h3>Interests & Volunteering</h3>
      <p>
        Beyond tech, Benjamin is active in community welfare, including historical volunteer work distributing rations locally and an international deployment with Man Fut Tong to Yangon, Myanmar. His personal hobbies include traveling, scuba diving, hiking, running, and catching up over a latte.
      </p>
    </div>
  );
}

function Publications() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>📝 Publications & Research</h2>
      <p>
        Here you will find documentation, academic references, and deep-dives into technical designs.
      </p>
      <ul>
        <li>
          <strong>Low-Latency System Architectures (2026):</strong> An analysis of constraint handling under rapid development lifecycles.
        </li>
      </ul>
    </div>
  );
}

function Teaching() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>🎓 Teaching & Mentorship</h2>
      <p>
        Documentation and training structures created to guide onboarding developers and teams.
      </p>
      <ul>
        <li>
          <strong>CI/CD Workflow Operations —</strong> Internal standardizations and testing metrics frameworks.
        </li>
      </ul>
    </div>
  );
}
function Projects() {
  return (
    <div style={{ marginTop: '20px' }}>
      <h2>🚀 Projects Portfolio</h2>
      <p>
        This section showcases my engineering work, constraint-driven system topologies, and proprietary software builds.
      </p>

      <div style={{ 
        border: '1px solid #e1e4e8', 
        borderRadius: '6px', 
        padding: '20px', 
        backgroundColor: '#f8f9fa',
        marginTop: '15px'
      }}>
        <h3 style={{ color: '#0366d6', marginTop: 0 }}>🔹 Proprietary Domain-Specific Machine Learning Models</h3>
        <p>
          I build proprietary, domain-specific machine learning models that are application and industry-specific based on published scientific journals and models designed for highly sensitive industries and mission-critical applications.
        </p>

        <h4 style={{ marginTop: '15px', marginBottom: '10px' }}>⚡ Engineering Constraints Handled:</h4>
        <ul style={{ paddingLeft: '20px' }}>
          <li style={{ marginBottom: '8px' }}>
            <strong>Time-Sensitivity:</strong> Execution constraints mapped to tight data windows.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Low-Latency Architecture:</strong> Performance-optimized runtimes to satisfy strict execution bounds.
          </li>
          <li style={{ marginBottom: '8px' }}>
            <strong>Rapid Lifecycle:</strong> Very short conceptualization-to-development-to-market timeframes.
          </li>
        </ul>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div style={{ marginTop: '20px', textAlign: 'left', lineHeight: '1.8' }}>
      <h2 style={{ color: '#222', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>📭 Contact</h2>
            <p style={{ margin: '15px 0 5px 0' }}>How can you reach out to me?</p>
      <ul style={{ margin: '0 0 20px 0', paddingLeft: '20px' }}>
        <li>Available for commercial, research and industry collaboration</li>
        <li>Open to speak and to moderate at public international conference and talks</li>
      </ul>
      <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', rowGap: '0px', marginTop: '15px' }}>
  <div><strong>Email:</strong></div>
  <div><a href="mailto:hello@benjaminy.com">hello@benjaminy.com</a></div>

  <div><strong>Web:</strong></div>
  <div><a href="https://www.benjaminy.com" target="_blank" rel="noreferrer">www.benjaminy.com</a></div>

  <div><strong>GitHub:</strong></div>
  <div><a href="https://github.com/benjaminyzg" target="_blank" rel="noreferrer">github.com/benjaminyzg</a></div>
</div>
    </div>
  )
}

// ==========================================
// 2. MAIN CORE APPLICATION ENGINE
// ==========================================
function AppContent() {
  const location = useLocation();
  
  const navLinkStyle = (pagePath) => {
    const currentPath = location.pathname === '' ? '/' : location.pathname;
    const isActive = currentPath === pagePath;

    return {
      display: 'inline-flex',  
      alignItems: 'center',
      justifyContent: 'center',
      flex: '1 1 120px',      
      maxWidth: '150px',      
      height: '40px',          
      backgroundColor: isActive ? '#3b82f6' : '#f3f4f6', 
      color: isActive ? '#ffffff' : '#1f2937',           
      borderRadius: '6px',
      border: '1px solid #e5e7eb',
      textDecoration: 'none',
      fontWeight: '500',
      fontSize: '14px',
      textAlign: 'center',
      cursor: 'pointer'
    };
  };

  return (
    <div style={{ maxWidth: '850px', margin: '40px auto', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '0 20px' }}>
      
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '5px' }}>Benjaminyzg's Github Project Repository</h1>
        <p style={{ color: '#666', margin: '0' }}>Centralized Documentation Hub</p>
      </header>

      {/* Main Profile Tabs Grid */}
      <nav style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', borderBottom: '2px solid #eaecef', paddingBottom: '15px', marginBottom: '30px' }}>
        <Link to="/" style={navLinkStyle('/')}>Overview</Link>
        <Link to="/about" style={navLinkStyle('/about')}>About</Link>
        <Link to="/publications" style={navLinkStyle('/publications')}>Publications</Link>
        <Link to="/teaching" style={navLinkStyle('/teaching')}>Teaching</Link>
        <Link to="/projects" style={navLinkStyle('/projects')}>Projects</Link>
        <Link to="/contact" style={navLinkStyle('/contact')}>Contact</Link>
      </nav>

      {/* Switcher Maps directly to internal functions above */}
      <Routes>
        <Route path="/"element={<Overview />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

// Fixed root definition entry point
export default function App() {
  return (
      <AppContent />
  );
}