import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PortfolioLayout } from "./layout/PortfolioLayout"
import { HomePage } from "./pages/HomePage"
import { useEffect, useState } from "react"
import LangContext from "./context/LangContext";
import i18n from "./translations/i18n";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ProjectPage } from "./pages/ProjectPage";
import { NotFoundPage } from "./pages/NotFoundPage";

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
                <Route path="/Portfolio/" element={<HomePage />}/>
                <Route path="/Portfolio/experience" element={<ExperiencePage />}/>
                <Route path="/Portfolio/projects" element={<ProjectPage />}/>
                <Route path="/Portfolio/*" element={<NotFoundPage />}/>
            </Routes>
          </PortfolioLayout>
      </BrowserRouter>
    </LangContext.Provider>
  )
}

export default App
