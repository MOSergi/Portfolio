import { useState } from "react";
import { NavLink } from "react-router-dom";
import { InfoAndContact } from "./navbar_components/InfoAndContact";
import { BurgerAndTranslateButtons } from "./navbar_components/BurgerAndTranslateButtons";

export const Navbar = ()=>{

    const [showBurgerMenu, setShowBurgerMenu] = useState<boolean>(false);

    const onClickBurgerButton = ()=>{
        setShowBurgerMenu(prevState => !prevState)
    }

    return(
        <nav className="flex justify-around items-center flex-wrap mt-2 p-2">
            <NavLink 
                className={
                    ({ isActive })=> isActive 
                    ? 
                        "font-bold border-b-2 border-amber-400" 
                    : 
                        "font-bold hover:text-white"
                } 
                to="/"
            >
                MOSergi
            </NavLink>
            <InfoAndContact 
                showBurgerMenu={showBurgerMenu}
            />
            <BurgerAndTranslateButtons 
                showBurgerMenu={showBurgerMenu}
                onClickBurgerButton={onClickBurgerButton}
            />
        </nav>
    );
}