import './App.css'
import { BrowserRouter ,  Route, Routes } from "react-router-dom"
import LandingPage from './pages/index.jsx'
import Blog from './pages/blog.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
