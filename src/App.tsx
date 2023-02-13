import AppLayout from 'layouts/AppLayout/AppLayout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PATHS from 'utils/routes'
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound'

export function App() {
  return (
    <Routes>
      <Route path={PATHS.MyTickets} element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export function WrappedApp() {
  return (
    <BrowserRouter>
      <AppLayout>
        <App />
      </AppLayout>
    </BrowserRouter>
  )
}
