import avatar from "../../assets/avatar.jpg"

const Header = () => {
    return (
        <header>
            <div>
                <img src={avatar} alt="Avatar" className="" />
                <h3>Cesar Hideki</h3>
            </div>
        </header>
    );
}

export default Header;