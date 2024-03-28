import { useTranslation } from "react-i18next";
import { FaCheck, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { PortfolioRoutes } from "../../constants/PortfolioRoutes";
import { useState } from "react";
import { FaCopy } from "react-icons/fa6";

interface InfoAndContactProps {
    showBurgerMenu : boolean
}

const EMAIL = "sergioorozmendez@gmail.com";

export const InfoAndContact = ({ showBurgerMenu } : InfoAndContactProps)=>{

    const { t } = useTranslation();
    const [showEmail, setShowEmail] = useState<boolean>(false);
    const [copied, setCopied] = useState<boolean>(false);

    const onclickEmail = ()=>{
        setShowEmail(prevState => !prevState);
        setCopied(false);
    }

    const copyEmail = ()=>{
        navigator.clipboard.writeText(EMAIL);
        setCopied(true);
    }

    return(
        <div className={showBurgerMenu ? 'flex flex-col items-center gap-5 absolute top-[10%] z-50 w-full h-full bg-black bg-opacity-85' : 'flex items-center max-[590px]:hidden'}>
            <ul className={showBurgerMenu ? "flex flex-col gap-3 text-center" : "flex"}>
                {
                    PortfolioRoutes.map((route)=>{
                        return(
                            <NavLink
                                key={route.path}
                                className={
                                    ({ isActive })=> isActive 
                                    ? 
                                        "font-bold border-b-2 ml-2 border-amber-400" 
                                    : 
                                        "ml-2 font-bold hover:text-white"
                                } 
                                to={route.path}
                            >
                                    {t(route.text)}
                            </NavLink>
                        );
                    })
                }
            </ul>
            <div className={showBurgerMenu ? "flex relative" : "flex ml-10"}>
                <FaEnvelope className="ml-2 cursor-pointer" onClick={onclickEmail}/>
                {
                    showEmail
                    &&
                    <div className="bg-amber-400 text-black w-[230px] text-[15px] ml-1 mr-1 p-1 text-center rounded absolute mt-8">
                        <span className="flex items-center cursor-pointer" onClick={copyEmail}>
                            {
                            copied 
                            ?
                            <FaCheck className="mr-1"/>
                            :
                            <FaCopy className="mr-1"/>
                            }
                            {EMAIL}
                        </span>
                    </div>
                }
                <a href="https://es.linkedin.com/in/sergio-o-401b8115b?trk=people-guest_people_search-card" target="_blank"><FaLinkedin className="ml-2 cursor-pointer"/></a>
            </div>
        </div>
    );
}