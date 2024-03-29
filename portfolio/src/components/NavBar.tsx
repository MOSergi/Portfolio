import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { InfoAndContact } from "./navbar_components/InfoAndContact";
import { BurgerAndTranslateButtons } from "./navbar_components/BurgerAndTranslateButtons";
import LangContext from "../context/LangContext";
import i18n from "../translations/i18n";

export const Navbar = ()=>{

    const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);
    const langContext = useContext(LangContext);

    const onClickBurgerButton = ()=>{
        setShowBurgerMenu(prevState => !prevState)
    }

    const isLinkActive = ({ isActive } : { isActive : boolean })=>{
        if (isActive){
            return "font-bold border-b-2 border-amber-400";
        } else {
            return "font-bold hover:text-white";
        }
    }

    const changeLanguage = ()=>{
        if (langContext.lang === 'es'){
            i18n.changeLanguage('en');
            window.sessionStorage.setItem('lang', 'en');
            langContext.setLang('en');
        } else {
            i18n.changeLanguage('es');
            window.sessionStorage.setItem('lang', 'es');
            langContext.setLang('es');
        }
    }

    return(
        <nav className="flex justify-around items-center flex-wrap mt-2 p-2">
            <NavLink 
                className={isLinkActive} 
                to="/Portfolio"
            >
                MOSergi
            </NavLink>
            <InfoAndContact 
                showBurgerMenu={showBurgerMenu}
            />
            <BurgerAndTranslateButtons 
                showBurgerMenu={showBurgerMenu}
                onClickBurgerButton={onClickBurgerButton}
                currentLang={langContext.lang}
                changeLanguage={changeLanguage}
            />
        </nav>
    );
}