import avatar from "../../assets/avatar.jpg"

const Header = () => {
    return (
        <header className="mx-9 my-11">
            <div>
                <img src={avatar} alt="Avatar" className="w-24 rounde-f" />
                <h3>Cesar Hideki</h3>
            </div>
        </header>
    );
}

export default Header;