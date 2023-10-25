import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"

export default function RootLayout() {
  return (
    <div className="root-layout">
      <ScrollRestoration />
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <br />
          <NavLink to="/" style={{color:'white'}}>Home</NavLink>
          <NavLink to="/experience" style={{color:'white'}}>Experience</NavLink>
          <NavLink to="help" style={{color:'white'}}>Help</NavLink>
          <NavLink to="careers" style={{color:'white'}}>Careers</NavLink>
        </nav>
        <Breadcrumbs />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
