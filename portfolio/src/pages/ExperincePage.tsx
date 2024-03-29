import { useTranslation } from "react-i18next";
import { BsFillHexagonFill } from "react-icons/bs";
import { Tecnologies } from "../components/Tecnologies";
import { WorkExperience } from "../components/WorkExperience";

export const ExperiencePage = ()=>{
    
    const { t } = useTranslation();
    
    return(
        <div className="flex flex-col mt-5">
            <div className="flex flex-col items-center">
                <h2 className="text-[26px] font-bold">{t("tecnologies")}</h2>
                <Tecnologies />
                <div className="flex flex-col items-center mt-5 text-center">
                    <h2 className="text-[26px] font-bold">{t("OnOtherHand")}</h2>
                    <h3 className="text-[18px] text-[#B2F1CF] font-bold">{t("solidPrinciples")}</h3>
                    <h3 className="text-[18px] text-[#FFBDB3] flex font-bold">
                        {t("hexagonalArchitecture")}
                        <BsFillHexagonFill size={30}/>
                    </h3>
                </div>
            </div>
            <div className="flex flex-col items-center mt-5 text-center">
                <h2 className="text-[26px] font-bold">Experiencia profesional</h2>
                <WorkExperience />
            </div>
        </div>
    );
}