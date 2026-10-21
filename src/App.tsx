import './App.css'
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home.tsx";
import Profile from "./components/Profile.tsx";
import Repos from "./components/Repos.tsx";
import NotFound from "./components/NotFound.tsx";
import Projects from "@/components/Projects.tsx";



function App() {
  return (
    <BrowserRouter>
      <Header/>
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Profile />} />
          <Route path="/repos" element={<Repos />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
