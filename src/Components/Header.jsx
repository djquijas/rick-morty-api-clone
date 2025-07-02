import '../Styles/Header.css'
const Header = () => {
    return (
        <header>
            <nav className="nav-header">
                <img src="#" alt="Icono de Rick and Morty" />
                <ul className="nav-header-ul">
                    <li><a href="#">Docs</a></li>
                    <li><a href="">About</a></li>
                    <li>
                        <a href="#">
                        <button>SUPPORT US</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header