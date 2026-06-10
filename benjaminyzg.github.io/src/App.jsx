import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// ==========================================
// 1. DYNAMIC COMPONENT SECTIONS
// ==========================================
function Overview(){
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
        </p></div>

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
        <strong> • </strong> 😴 Sleeping/Resting <br/>
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
      
      <h2>🗂️ Academic Publications </h2>
        <p>
        - to be completed - </p>

      <h2>📛 Conferences/Talks</h2>
       <p>
        - to be completed - </p>

    </div>
  );
}

function About() {
  return ( 
  <div style={{ marginTop: '30px', lineHeight: '1.6' }}>
      <h2 style={{ color: '#222', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>📝 About Me</h2>
            <p>Here you will find information about my background, experience, and professional roadmap.</p>
            
            <h3>Background</h3>
            <p>
                Born and raised in Singapore, Benjamin Yong is a computer engineering professional with an adaptive background spanning systems administration, network engineering, business process outsourcing, and public sector digital transformations.
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
      <p> Beyond tech, Benjamin is active in community welfare, including historical volunteer work distributing rations locally and an international deployment with Man Fut Tong to Yangon, Myanmar. His personal hobbies include traveling (i.e. leisure/business), recreational scuba diving, hiking, running, and catching up over a latte.
          </p>

    </div>
  );}

  function Publications(){ 
    return <div style={{ marginTop: '20px', textAlign: 'center' }}>
    <h2>📝 Publications & Research</h2>
    <p style={{ color: '#666' }}>Research papers and listings.</p> 

    <div style={{ textAlign: 'justify', maxWidth: '600px', margin: '0 auto' }}>  
      <h3>Publications & Papers</h3>
      <ul>
                <li>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
            </ul>

      <h3>Published Books & Articles</h3>
      <ul>
          <li>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                </li>
      </ul>
    </div>
    </div>
  }


function Teaching() { 
  return <div style={{ marginTop: '20px', textAlign: 'center' }}>
    <h2>🎓 Teaching & Mentorship</h2>
    <p style={{ color: '#666' }}>Courses and academic instruction history.</p>
    
    <div style={{ textAlign: 'justify', maxWidth: '600px', margin: '0 auto' }}>
    <h3>Teaching & Mentorships</h3>
      <ul>
          <li>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                <li>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.                </li>
      </ul>
    </div>;
    </div>; 
}

function Projects() { return <div style={{ marginTop: '20px', textAlign: 'center' }}><h2>🚀 Projects Portfolio</h2><p style={{ color: '#666' }}>Software builds and code repositories.</p></div>; }

function Contact() {
  return (
    <div 
      style={{ 
        display: 'grid', 
        gridTemplateColumns: '120px 1fr', 
        rowGap: '2px',             /* Reduced from 16px to 4px to pack rows together tightly */
        columnGap: '0px', 
        justifyItems: 'start', 
        alignItems: 'start', 
        marginTop: '20px', 
        textAlign: 'left',
      }}
    >
      
      {/* Header with zero bottom margin to prevent pushing rows away */}
      <h2 style={{ 
        gridColumn: '1 / -1', 
        color: '#222', 
        borderBottom: '1px solid #eee', 
        paddingBottom: '8px', 
        marginBottom: '8px',       /* Locks the header tight to the first row */
        width: '100%' 
      }}>
        📭 Contact
      </h2>

      {/* Row 1: Mailing */}
      <strong style={{ textAlign: 'left', width: '100%' }}>Mailing:</strong>
      <div style={{ textAlign: 'left', lineHeight: '1.4' }}>
        <a href="http://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
          Balestier Road Post Office<br />
          PO Box 30, Singapore 913001
        </a>
      </div>

      {/* Row 2: Phone */}
      <strong style={{ textAlign: 'left', width: '100%' }}>Phone:</strong>
      <div style={{ textAlign: 'left' }}>
        <span style={{ color: '#333' }}>(65) 9746 0554</span>
      </div>

      {/* Row 3: Mail */}
      <strong style={{ textAlign: 'left', width: '100%' }}>Mail:</strong>
      <div style={{ textAlign: 'left' }}>
        <a href="mailto:hello@benjaminy.com" style={{ color: 'blue', textDecoration: 'underline' }}>
          hello@benjaminy.com
        </a>
      </div>

      {/* Row 4: Web */}
      <strong style={{ textAlign: 'left', width: '100%' }}>Web:</strong>
      <div style={{ textAlign: 'left' }}>
        <a href="https://www.benjaminy.com" target="_blank" rel="noopener noreferrer" style={{ color: 'purple', textDecoration: 'underline' }}>
          www.benjaminy.com
        </a>
      </div>

      {/* Row 5: GitHub */}
      <strong style={{ textAlign: 'left', width: '100%' }}>GitHub:</strong>
      <div style={{ textAlign: 'left' }}>
        <a href="https://github.com/benjaminyzg" target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
          github.com/benjaminyzg
        </a>
      </div>

    </div>
  );
}

// ==========================================
// 2. MASTER PORTFOLIO ENGINE
// ==========================================
function App() {
  const location = useLocation(); // Safely tracks the URL to toggle button colors

  const navLinkStyle = (pagePath) => {
    // Normalizes paths so that home matches perfectly
    const currentPath = location.pathname === '' ? '/' : location.pathname;
    const isActive = currentPath === pagePath;

    return {
    display: 'inline-flex',  
    alignItems: 'center',
    justifyContent: 'center',

    flex: '1 1 140px',       /* Slightly reduced base width to fit tighter screens */
    maxWidth: '160px',      /* Snugger fit around the text */
    height: '40px',          /* Slightly shorter height for a cleaner look */
    padding: '0px',          /* REMOVED padding so it doesn't artificially stretch the button */
    
    backgroundColor: isActive ? '#3b82f6' : '#f3f4f6', 
    color: isActive ? '#ffffff' : '#1f2937',           
    borderRadius: '6px',
    border: '1px solid',
    borderColor: isActive ? '#2563eb' : '#e5e7eb',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '14px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
    };
  };

  return (
    <div style={{ maxWidth: '850px', margin: '40px auto', fontFamily: 'system-ui, -apple-system, sans-serif', padding: '0 20px' }}>
      
      {/* Title Header */}
      <header style={{ marginBottom: '30px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '5px' }}>Benjaminyzg's Github Project Repository</h1>
        <p style={{ color: '#666', margin: '0' }}>Centralized Documentation Hub</p>
      </header>

      {/* Tight Responsive Navigation Grid */}
      <nav style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'center', 
        gap: '12px', 
        maxWidth: '600px', 
        margin: '0 auto', 
        borderBottom: '2px solid #eaecef', 
        paddingBottom: '15px', 
        marginBottom: '30px' 
      }}>
        <Link to="/" style={navLinkStyle('/')}>Overview</Link>
        <Link to="/about" style={navLinkStyle('/about')}>About</Link>
        <Link to="/publications" style={navLinkStyle('/publications')}>Publications</Link>
        <Link to="/teaching" style={navLinkStyle('/teaching')}>Teaching</Link>
        <Link to="/projects" style={navLinkStyle('/projects')}>Projects</Link>
        <Link to="/contact" style={navLinkStyle('/contact')}>Contact</Link>
      </nav>

      {/* Switcher Display Engine */}
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/about" element={<About />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}

export default App;