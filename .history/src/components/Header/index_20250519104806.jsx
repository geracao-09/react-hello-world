import avatar from "/src/assets/avatar.jpg"
import links from "/src/header.json"



const Header = () => {
    return (
        <header className="flex mx-9 my-11">
            <div className="flex gap-8 items-center">
                <img src={avatar} alt="Avatar" className="w-24 rounded-full" />
                <h3 className="text-white text-4xl font-bold">Cesar Hideki</h3>
            </div>
            <div>
                <ul>
                    <li className="text-2xl">
                        <a href="#">
                            <p>
                                Sobre mim
                            </p>
                        </a>
                    </li>
                    <li className="text-2xl">
                        <a href="#">
                            <p>
                               Curriculo
                            </p>
                        </a>
                    </li>
                    <li className="text-2xl">
                        <a href="#">
                            <p>
                                Contatos
                            </p>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;