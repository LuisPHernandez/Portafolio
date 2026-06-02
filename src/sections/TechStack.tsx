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

                <div className="mt-16 grid gap-6 lg:grid-cols-3">
                    <article className="card-border rounded-xl p-6 bg-black-200">
                        <h3 className="text-white text-2xl font-semibold mb-3">Stack escogido</h3>
                        <p className="text-white-50">
                            Elegí React y TypeScript para construir SPAs con componentes reutilizables, rutas claras y manejo de estado predecible. Para los backends usé FastAPI y Laravel porque me permitieron separar responsabilidades, exponer APIs REST y conectar cada frontend con datos reales.
                        </p>
                    </article>

                    <article className="card-border rounded-xl p-6 bg-black-200">
                        <h3 className="text-white text-2xl font-semibold mb-3">Por qué lo escogí</h3>
                        <p className="text-white-50">
                            Prioricé herramientas modernas pero prácticas: Vite para builds rápidos, Docker Compose para ambientes reproducibles, PostgreSQL para proyectos con reglas de negocio, y Nginx como reverse proxy para publicar varias aplicaciones sin competir por puertos o recursos.
                        </p>
                    </article>

                    <article className="card-border rounded-xl p-6 bg-black-200">
                        <h3 className="text-white text-2xl font-semibold mb-3">Cómo lo apliqué</h3>
                        <p className="text-white-50">
                            En mis proyectos apliqué rutas protegidas, consumo de APIs, estados de carga/error, autenticación, roles, subida de archivos, SQL con vistas y stored procedures, y despliegues separados por rutas usando Docker, Nginx y builds estáticos optimizados.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default TechStack;