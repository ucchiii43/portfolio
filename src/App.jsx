import './App.css'

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
          <h1>Welcome to My Portfolio</h1>
          <p>フルスタックエンジニア</p>
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
        </section>
      </main>

      <footer>
        <p>&copy; 2026 Portfolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
