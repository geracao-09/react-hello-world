import { Link } from "react-router-dom";

const Body = () => {
    return (
        <nav>
            <h2 className="text-2xl font-bold text-center">
                Aqui você pode encontrar os links para as minhas páginas neste projeto:
            </h2>
            <ul className="flex items-center justify-center mt-4 gap-10 text-xl">
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

export default Body;