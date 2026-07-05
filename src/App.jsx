import './App.css'

// TODO: GoogleフォームのURLを設定してください
const CONTACT_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSe8dq_dz9O2UVAJz-TR9KE1EvhMEctM7V9a0BTbtsgACLC8ig/viewform?usp=header'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <h1>Welcome to ucchiii's Portfolio</h1>
        </section>

        <section id="about" className="section">
          <h2>About Me</h2>
          <p>ここに自己紹介を書いてください。</p>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project 1</h3>
              <p>プロジェクトの説明</p>
            </div>
            <div className="project-card">
              <h3>Project 2</h3>
              <p>プロジェクトの説明</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>お気軽にご連絡ください。</p>
          <a
            href={CONTACT_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            お問い合わせフォームへ
          </a>
        </section>
      </main>
    </div>
  )
}

export default App
