import Link from "react-router-dom";

const Body = () => {
    return (
        <nav>
            <h2 className="text-2xl font-bold text-center">
                Aqui você pode encontrar os links para as minhas páginas neste projeto:
            </h2>
            <ul className="flex items-center justify-center mt-4">
                <li>
                    <Link to="/wendell/curriculo" />
                </li>
                <li>
                    <Link to="/wendell/sobremim" />
                </li>
            </ul>
        </nav>
    );
}

export default Body;