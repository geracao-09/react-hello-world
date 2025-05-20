import { Link } from "react-router-dom";

const NavbarWendell = () => {
    return (
        <nav >
            <ul className="flex flex-row items-center justify-end gap-8 mr-15 mt-5">
                <li>
                    <Link to="/wendell/">Página Inicial Wendell </Link>
                </li>
                <li>
                    <Link to="/wendell/curriculo">Curriculo </Link>
                </li>
                <li>
                    <Link to="/wendell/sobremim" >Sobre Mim </Link>
                </li>
            </ul>

        </nav>
    );
}

export default NavbarWendell;