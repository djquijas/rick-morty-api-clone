import '../Styles/Header.css'
const Header = () => {
    return (
        <header>
            <nav className="nav-header">
                <a href="">
                    <img src="src/assets/ricknmorty.svg" alt="Rick and morty logo" />
                    </a>
                <ul className="nav-header-ul">
                    <li><a href="#">Docs</a></li>
                    <li><a href="">About</a></li>
                    <li>
                        <a href="#">
                        <span>SUPPORT US</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header