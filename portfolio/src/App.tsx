import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PortfolioLayout } from "./layout/PortfolioLayout"
import { HomePage } from "./pages/HomePage"
import { useEffect, useState } from "react"
import LangContext from "./context/LangContext";
import i18n from "./translations/i18n";

function App() {

  const [lang, setLang] = useState<string>(window.sessionStorage.getItem('lang') || 'es');

  useEffect(()=>{
    i18n.changeLanguage(lang);
  }, [])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <BrowserRouter>
          <PortfolioLayout>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/experience" element={<h1>Experiencia</h1>}/>
                <Route path="/projects" element={<h1>Proyectos</h1>}/>
            </Routes>
          </PortfolioLayout>
      </BrowserRouter>
    </LangContext.Provider>
  )
}

export default App
