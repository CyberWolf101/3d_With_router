import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ExperiencePage from './Environment/main'

// layouts
import RootLayout from './layouts/RootLayout'
import MainLayout from './layouts/MainLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='experience' element={<ExperiencePage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App
