import { FaBars, FaLanguage, FaTimes } from "react-icons/fa";

interface BurgerAndTranslateButtonsProps {
    showBurgerMenu : boolean,
    onClickBurgerButton : ()=> void,
    changeLanguage : ()=> void,
    currentLang : string
}

export const BurgerAndTranslateButtons = ({ showBurgerMenu, onClickBurgerButton, changeLanguage, currentLang } : BurgerAndTranslateButtonsProps)=>{
    return(
        <div className="flex items-center gap-x-4">
            <span><FaLanguage className="cursor-pointer" onClick={changeLanguage}/>{currentLang}</span>
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