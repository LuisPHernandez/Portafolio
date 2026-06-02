import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        image: "/images/Snake.png",
        alt: "Juego de Snake",
        title: "Juego de Snake",
        description: "SPA en React y TypeScript para practicar estado, eventos de teclado y lógica de juego en tiempo real. Desplegada como build estático detrás de Nginx.",
        href: "http://34.51.81.158/proyecto2/",
        bgColor: "",
        type: "large-left",
    },
    {
        id: 2,
        image: "/images/Calculadora.png",
        alt: "Calculadora",
        title: "Calculadora",
        description: "Calculadora en React enfocada en manejo de estado, composición de componentes y validación de operaciones en una interfaz simple y responsiva.",
        href: "http://34.51.81.158/calculadora/",
        bgColor: "bg-[#ffefdb]",
        type: "small",
    },
    {
        id: 3,
        image: "/images/Tienda.png",
        alt: "Sistema de Inventario y Ventas",
        title: "Sistema de Inventario y Ventas",
        description: "Sistema de inventario y ventas con React, TypeScript, FastAPI y PostgreSQL. Incluye autenticación, roles de base de datos, stored procedures y despliegue con Docker Compose.",
        href: "http://34.51.81.158/tienda/",
        bgColor: "bg-[#ffe7eb]",
        type: "small",
    },
    {
        id: 4,
        image: "/images/NFL.png",
        alt: "Tracker de equipos de la NFL",
        title: "Tracker de equipos de la NFL",
        description: "SPA en React que consume datos externos de equipos deportivos, con rutas dinámicas, estados de carga y despliegue estático con Vite y Nginx.",
        href: "http://34.51.81.158/ejercicio4/",
        bgColor: "bg-[#ffefdb]",
        type: "small",
    },
    {
        id: 5,
        image: "/images/NBA.png",
        alt: "NBA Players API",
        title: "NBA Players API",
        description: "CRUD full-stack de jugadores NBA con frontend en HTML/CSS/JS, API REST en FastAPI, PostgreSQL, subida de imágenes y contenedores Docker.",
        href: "http://34.51.81.158/proyecto1/",
        bgColor: "bg-[#ffe7eb]",
        type: "small",
    },
    {
        id: 6,
        image: "/images/Medinet.png",
        alt: "Medinet",
        title: "Medinet",
        description: "Plataforma full-stack para gestión de citas médicas. Backend en Laravel, frontend Flutter Web, autenticación con Supabase, API REST y despliegue dockerizado. User de paciente de prueba con email: guda@gmail.com, password: 12121212",
        href: "http://34.51.81.158/medinet/",
        bgColor: "",
        type: "large-right",
    },
];

const Showcase = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);
    const project6Ref = useRef(null);

    const refs = [project1Ref, project2Ref, project3Ref, project4Ref, project5Ref, project6Ref];

    useGSAP(() => {
        const projectEls = refs.map((r) => r.current);

        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5, scrollTrigger: { trigger: sectionRef.current, start: 'top bottom-=100' } }
        )

        projectEls.forEach((card, index) => {
            gsap.fromTo(
                card,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.15 * index, scrollTrigger: { trigger: card, start: 'top bottom+=200' } }
            )
        })
    }, [])

    const [p1, p2, p3, p4, p5, p6] = projects;

    return (
        <section ref={sectionRef} id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout mb-10">
                    {/* IZQUIERDA */}
                    <a
                        href={p1.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="first-project-wrapper project-link"
                        ref={project1Ref}
                    >
                        <div className="image-wrapper">
                            <img src={p1.image} alt={p1.alt} />
                        </div>
                        <div className="text-content">
                            <h2>{p1.title}</h2>
                            <p className="text-white-50 md:text-xl">{p1.description}</p>
                        </div>
                    </a>

                    {/* DERECHA */}
                    <div className="project-list-wrapper overflow-hidden">
                        <a
                            href={p2.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project project-link"
                            ref={project2Ref}
                        >
                            <div className={`image-wrapper ${p2.bgColor}`}>
                                <img src={p2.image} alt={p2.alt} />
                            </div>
                            <h2>{p2.title}</h2>
                            <p className="text-white-50 md:text-xl">{p2.description}</p>
                        </a>

                        <a
                            href={p3.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project project-link"
                            ref={project3Ref}
                        >
                            <div className={`image-wrapper ${p3.bgColor}`}>
                                <img src={p3.image} alt={p3.alt} />
                            </div>
                            <h2>{p3.title}</h2>
                            <p className="text-white-50 md:text-xl">{p3.description}</p>
                        </a>
                    </div>
                </div>

                <div className="showcaselayout">
                    {/* IZQUIERDA */}
                    <div className="project-list-wrapper overflow-hidden">
                        <a
                            href={p4.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project project-link"
                            ref={project4Ref}
                        >
                            <div className={`image-wrapper ${p4.bgColor}`}>
                                <img src={p4.image} alt={p4.alt} />
                            </div>
                            <h2>{p4.title}</h2>
                            <p className="text-white-50 md:text-xl">{p4.description}</p>
                        </a>

                        <a
                            href={p5.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project project-link"
                            ref={project5Ref}
                        >
                            <div className={`image-wrapper ${p5.bgColor}`}>
                                <img src={p5.image} alt={p5.alt} />
                            </div>
                            <h2>{p5.title}</h2>
                            <p className="text-white-50 md:text-xl">{p5.description}</p>
                        </a>
                    </div>

                    {/* DERECHA */}
                    <a
                        href={p6.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="first-project-wrapper project-link"
                        ref={project6Ref}
                    >
                        <div className="image-wrapper">
                            <img src={p6.image} alt={p6.alt} />
                        </div>
                        <div className="text-content">
                            <h2>{p6.title}</h2>
                            <p className="text-white-50 md:text-xl">{p6.description}</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Showcase;