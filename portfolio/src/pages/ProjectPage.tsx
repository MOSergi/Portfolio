import { useEffect, useState } from "react"
import { ProjectsResponseInterface } from "../interfaces/ProjectsResponseInterface";
import axios from "axios";
import { PORFOLIO_URLS } from "../constants/Urls";
import { useTranslation } from "react-i18next";
import { Skeleton } from "../components/Skeleton";
import { FaGithub } from "react-icons/fa6";

const REPO_EXCLUDE_ID = 341657327;

export const ProjectPage = ()=>{

    const [projects, setProjects] = useState<ProjectsResponseInterface[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(()=>{

        const getProjects = async ()=>{
            try {
                const response = await axios.get(PORFOLIO_URLS.GIRHUB_RESPOS_URL);

                setProjects(response.data);
                setLoading(false);
            } catch(e){
                setError(true);
            }   
        }

        getProjects();
        
    }, []);

    return(
        <div className="flex flex-col mt-10">
            <h2 className="text-[26px] font-bold text-center mb-5">{t("projects")}</h2>
            {
                error
                &&
                <h2 className="text-red-600 font-bold text-center">{t("errorDuringRequest")}</h2>
            }
            <div className="w-full grid grid-cols-3 gap-4 place-items-center max-[1040px]:grid-cols-1">
                {
                    loading
                    ?
                    <>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </>
                    :
                    <>
                        {
                            projects.map((proj)=>{
                                if (proj.id !== REPO_EXCLUDE_ID){
                                    return(
                                        <div className="w-[340px] h-[340px] border border-amber-400 rounded flex flex-col items-center">
                                            <img src={proj.owner.avatar_url} alt="Mosergi Logo" className="h-[250px] w-full rounded"/>
                                            <h3 className="text-center font-bold mt-1 text-[18px]">{proj.name}</h3>
                                            <button className="bg-amber-400 hover:bg-amber-500 w-[300px] mt-2 p-2 rounded">
                                                <a href={proj.html_url} 
                                                    target="_blank"
                                                    className="text-white font-bold flex items-center justify-center"
                                                >
                                                    {t("watchRepo")} <FaGithub size={20} className="ml-2"/>
                                                </a>
                                            </button>
                                        </div>
                                    );
                                }
                            })
                        }
                    </>
                }
            </div>
        </div>
    );
}