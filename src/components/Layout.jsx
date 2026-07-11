import { Link, Outlet } from 'react-router-dom'

// 全ページ共通のヘッダーを持つレイアウト
function Layout() {
  return (
    <div className="app">
      <header className="header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
