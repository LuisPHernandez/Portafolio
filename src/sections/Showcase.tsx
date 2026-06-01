import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);
    const project6Ref = useRef(null);

    useGSAP(() => {
        const projects = [
            project1Ref.current,
            project2Ref.current,
            project3Ref.current,
            project4Ref.current,
            project5Ref.current,
            project6Ref.current
        ];

        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=100' } }
        )

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.15 * index, scrollTrigger: { trigger: card, start: 'top bottom+=200' } }
            )
        })
    }, [])

    return (
        <section ref={sectionRef} id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout mb-10">
                    {/* IZQUIERDA */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/Snake.png" alt="Snake" />
                        </div>
                        <div className="text-content">
                            <h2>Juego de Snake</h2>
                            <p className="text-white-50 md:text-xl">
                                Recreación del clásico juego de Snake, implementado con React.
                            </p>
                        </div>
                    </div>

                    {/* DERECHA */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/Calculadora.png" alt="Calculadora" />
                            </div>
                            <h2>Calculadora</h2>
                            <p className="text-white-50 md:text-xl">
                                Calculadora implementada 100% con React.
                            </p>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project3.png" alt="E-commerce manager" />
                            </div>
                            <h2>E-commerce manager</h2>
                            <p className="text-white-50 md:text-xl">
                                Gestión de e-commerce, implementado con React, Typescript y FastAPI.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="showcaselayout">
                    {/* IZQUIERDA */}
                    <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project4Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project1.png" alt="Calculadora" />
                            </div>
                            <h2>Calculadora</h2>
                            <p className="text-white-50 md:text-xl">
                                Calculadora implementada 100% con React.
                            </p>
                        </div>

                        <div className="project" ref={project5Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/project4.png" alt="E-commerce manager" />
                            </div>
                            <h2>E-commerce manager</h2>
                            <p className="text-white-50 md:text-xl">
                                Gestión de e-commerce, implementado con React, Typescript y FastAPI.
                            </p>
                        </div>
                    </div>

                    {/* DERECHA */}
                    <div className="first-project-wrapper" ref={project6Ref}>
                        <div className="image-wrapper">
                            <img src="/images/project2.png" alt="Explorador de equipos de la NFL" />
                        </div>
                        <div className="text-content">
                            <h2>Explorador de equipos de la NFL</h2>
                            <p className="text-white-50 md:text-xl">
                                Explorador de equipos de la NFL, implementado con React.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Showcase;