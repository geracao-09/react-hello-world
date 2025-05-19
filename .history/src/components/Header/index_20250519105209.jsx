import avatar from "/src/assets/avatar.jpg"



const Header = (links) => {
    return (
        <header className="flex items-center gap-6 justify-around mx-9 my-11">
            <div className="flex gap-8 items-center">
                <img src={avatar} alt="Avatar" className="w-24 rounded-full" />
                <h3 className="text-white text-4xl font-bold">Cesar Hideki</h3>
            </div>
            <div>
                <ul className="flex gap-6">
                    {links.map(link => {
                        <li className="text-2xl">
                            <a href="#">
                                <p>{link.item}</p>
                            </a>
                        </li>
                    })}
                </ul>
            </div>
        </header>
    );
}

export default Header;