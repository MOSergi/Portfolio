import { useTranslation } from "react-i18next";
import { FaFileCode } from "react-icons/fa6";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';

export const WorkExperience = ()=>{

    const { t } = useTranslation();

    return(
        <VerticalTimeline className="mt-5">
            <VerticalTimelineElement
                className="vertical-timeline-element--work font-bold"
                contentStyle={{ backgroundColor : "#6EB800", color : "white", fontWeight : "bold" }}
                contentArrowStyle={{ borderRight: '7px solid #6EB800' }}
                date="Oct 2021 - Ago 2022"
                iconStyle={{ background: '#6EB800', color: '#fff' }}
                icon={<FaFileCode />}
                visible={true}
            >
                TCI GALICIA CONSULTORÍA INFORMÁTICA
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work font-bold"
                contentStyle={{ background: '#003D4F', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid #003D4F' }}
                date={`Ago 2022 - ${t("current")}`}
                iconStyle={{ background: '#003D4F', color: '#fff' }}
                icon={<FaFileCode />}
                visible={true}
            >
                NORVENTO ENERXÍA
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}