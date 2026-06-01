import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import TechIcon from "../components/Models/TechLogos/TechIcon";
import TitleHeader from "../components/TitleHeader";
import { techStackIcons } from "../constants";

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(".tech-card", { y: 100, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1, ease: "power2.inOut", stagger: 0.2, scrollTrigger: {
                    trigger: "#skills", start: "top center"
                }
            }
        )
    })

    return (
        <div id="skills" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Tecnologías Utilizadas en mis Proyectos"
                    sub="Mis herramientas favoritas"
                />
                <div className="tech-grid">
                    {techStackIcons.map((icon) => (
                        <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg relative min-h-[300px]">
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIcon model={icon} />
                                </div>
                                <div className="padding-x pb-5 w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack;