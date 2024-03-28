import { useTranslation } from "react-i18next";
import fotografia from "../assets/fotografia.png";

export const HomePage = ()=>{

    const { t } = useTranslation();

    return(
        <div className="flex flex-row flex-wrap justify-around items-center h-[85vh] w-full p-2 mt-2">
            <div className="flex flex-col justify-center w-[45%] max-[760px]:w-[100%] max-[760px]:text-center max-[395px]:mb-3">
                <h2 className="text-[24px]">{t("Iam")}</h2>
                <h1 className="text-[35px] font-bold">FULL-STACK WEB DEVELOPER</h1>
                <div className="mt-3">
                    <h2 className="text-[20px]">{t("AboutMe")}</h2>
                </div>
            </div>
            <div className="flex flex-col p-3 border rounded-full border-amber-400 border-l-transparent">
                <img className="rounded-full w-[340px] h-[340px] m-auto animate-bouce-forwards animate-bounce-blur" src={fotografia} alt="my photo" loading="lazy" />
            </div>
        </div>
    );
}