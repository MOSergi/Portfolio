import { useTranslation } from "react-i18next";
import { BsFillHexagonFill } from "react-icons/bs";
import { Tecnologies } from "../components/Tecnologies";
import { WorkExperience } from "../components/WorkExperience";

export const ExperiencePage = ()=>{
    
    const { t } = useTranslation();
    
    return(
        <div className="flex flex-col mt-10">
            <div className="flex flex-col items-center bg-gradient-to-t from-slate-800 p-10">
                <h2 className="text-[26px] font-bold">{t("tecnologies")}</h2>
                <Tecnologies />
                <div className="flex flex-col items-center mt-5 text-center">
                    <h2 className="text-[26px] font-bold border-b-2 border-amber-400">{t("OnOtherHand")}</h2>
                    <h3 className="text-[18px] text-[#B2F1CF] font-bold mt-2">{t("solidPrinciples")}</h3>
                    <h3 className="text-[18px] text-[#FFBDB3] flex font-bold mt-2">
                        {t("hexagonalArchitecture")}
                        <BsFillHexagonFill size={30}/>
                    </h3>
                </div>
            </div>
            <div className="flex flex-col items-center mt-10 text-center">
                <h2 className="text-[26px] font-bold">{t("professionalExperience")}</h2>
                <WorkExperience />
            </div>
        </div>
    );
}