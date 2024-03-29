import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PortfolioLayout } from "./layout/PortfolioLayout"
import { HomePage } from "./pages/HomePage"
import { useEffect, useState } from "react"
import LangContext from "./context/LangContext";
import i18n from "./translations/i18n";
import { ExperiencePage } from "./pages/ExperincePage";

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
                <Route path="/experience" element={<ExperiencePage />}/>
                <Route path="/projects" element={<h1>Proyectos</h1>}/>
            </Routes>
          </PortfolioLayout>
      </BrowserRouter>
    </LangContext.Provider>
  )
}

export default App
