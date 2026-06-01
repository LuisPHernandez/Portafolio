const Footer = () => {
    return (
        <footer className="footer">
            <div className="w-full flex justify-end">
                <p className="text-white-50 text-sm whitespace-nowrap">
                    © {new Date().getFullYear()} Luis Pedro Hernández. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    )
}

export default Footer