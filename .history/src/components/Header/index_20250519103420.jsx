import avatar from "../../assets/avatar.jpg"

const Header = () => {
    return (
        <header className="mx-9 my-11">
            <div className="flex gap-8 items-center">
                <img src={avatar} alt="Avatar" className="w-24 rounded-full" />
                <h3 className="text-white ">Cesar Hideki</h3>
            </div>
        </header>
    );
}

export default Header;