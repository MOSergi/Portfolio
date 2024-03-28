import { useContext } from "react";
import { FaBars, FaLanguage, FaTimes } from "react-icons/fa";
import LangContext from "../../context/LangContext";
import i18n from "../../translations/i18n";

interface BurgerAndTranslateButtonsProps {
    showBurgerMenu : boolean,
    onClickBurgerButton : ()=> void
}

export const BurgerAndTranslateButtons = ({ showBurgerMenu, onClickBurgerButton } : BurgerAndTranslateButtonsProps)=>{

    const langContext = useContext(LangContext);

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
        <div className="flex items-center gap-x-4">
            <span><FaLanguage className="cursor-pointer" onClick={changeLanguage}/>{langContext.lang}</span>
            <div className="min-[590px]:hidden">
                {
                    showBurgerMenu
                    ?
                    <FaTimes onClick={onClickBurgerButton}/>
                    :
                    <FaBars onClick={onClickBurgerButton}/>
                }
            </div>
        </div>
    );
}