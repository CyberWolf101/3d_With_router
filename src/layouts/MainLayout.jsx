import { Outlet, NavLink, ScrollRestoration } from "react-router-dom"
import Breadcrumbs from "../components/Breadcrumbs"

export default function MainLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
