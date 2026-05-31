import { navLinks } from "../constants"
import { useEffect, useState } from "react"

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScrol = () => {
            const isScrolled = window.scrollY > 10
            setScrolled(isScrolled)
        }

        window.addEventListener('scroll', handleScrol)
        return () => window.removeEventListener('scroll', handleScrol)
    }, [])

    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a className="logo" href="#hero">
                    Luis Pedro Hernández
                </a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contactame</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar