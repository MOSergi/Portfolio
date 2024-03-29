import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = ()=>{

    const navigate = useNavigate();
    const { t } = useTranslation();

    const goToHome = ()=>{
        navigate('/Portfolio/');
    }

    return(
        <div className="flex flex-col items-center">
            <h1 className="text-center text-[45px] mt-5">404</h1>
            <button 
                className="bg-amber-400 hover:bg-amber-500 text-white p-2 rounded font-bold w-[125px]"
                onClick={goToHome}
            >
                {t("goGomePage")}
            </button>
        </div>
    );
}