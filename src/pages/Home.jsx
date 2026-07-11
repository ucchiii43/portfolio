function Home() {
  return (
    <>
      <section className="hero">
        <h1>Welcome to ucchiii's Portfolio</h1>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="about-content">
          <img src={`${import.meta.env.BASE_URL}favicon.png`} alt="プロフィール画像" className="about-image" />
          <p>大学時代は機械学習の研究を行っていた。現在はWeb企業でRuby on Railsを用いてバックエンドエンジニアとして働いている。</p>
        </div>
      </section>
    </>
  )
}

export default Home
