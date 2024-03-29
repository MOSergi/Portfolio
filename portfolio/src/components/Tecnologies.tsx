import { FaBootstrap, FaCss3, FaDocker, FaHtml5, FaJs, FaLaravel, FaNode, FaPhp, FaReact } from "react-icons/fa6";
import { PiBracketsCurlyBold } from "react-icons/pi";
import { SiAntdesign, SiExpress, SiMysql, SiNestjs, SiNextdotjs, SiSequelize, SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbSql } from "react-icons/tb";

export const Tecnologies = ()=>{
    return(
        <div className="mt-5 w-[65%] flex flex-wrap justify-evenly">
            <FaHtml5 className="ml-3 text-[#DF4E26] hover:animate-bounce max-[840px]:mt-5" size={35}/>
            <FaCss3 className="ml-3 text-[#254BDD] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <FaJs className="ml-3 text-[#EFD81D] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <SiTypescript className="ml-3 text-[#2F74C0] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <FaPhp className="ml-3 text-[#7377AD] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <FaBootstrap className="ml-3 text-[#8112F6] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <SiTailwindcss className="ml-3 text-[#36B7F0] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <SiAntdesign className="ml-3 text-[#189AFF] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <FaReact className="ml-3 text-[#1399C4] hover:animate-bounce max-[840px]:mt-5" size={35}/>
            <SiNextdotjs className="ml-3 text-white hover:animate-bounce max-[840px]:mt-5" size={35} />
            <FaNode className="ml-3 text-[#78AC61] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <SiExpress className="ml-3 text-white hover:animate-bounce max-[840px]:mt-5" size={35} />
            <SiNestjs className="ml-3 text-[#D9224C] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <FaLaravel className="ml-3 text-[#F72617] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <FaDocker className="ml-3 text-[#0997E5] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <SiMysql className="ml-3 text-[#00718B] hover:animate-bounce max-[840px]:mt-5" size={35} />
            <span className="text-[10px] text-[#F00000] hover:animate-bounce text-center">
                <TbSql className="ml-3 max-[840px]:mt-5" size={35} />
                Oracle
            </span>
            <SiSequelize className="ml-3 text-[#3C76C3] hover:animate-bounce max-[840px]:mt-5" size={35}/>
            <span className="text-[10px] text-[#FF9904] hover:animate-bounce text-center">
                <PiBracketsCurlyBold className="ml-3 max-[840px]:mt-5" size={35}/>
                TypeORM
            </span>
        </div>
    );
}