import avatar from "./../"

const Header = () => {
    return (
        <header>
            <div>
                <img src={avatar} alt="Avatar" />
                <h3>Cesar Hideki</h3>
            </div>
        </header>
    );
}

export default Header;