import avatar from "/avatar.png"

const Header = () => {
    return (
        <header>
            <div>
                <img src={avatar} alt="Avatar" />
                <h3></h3>
            </div>
        </header>
    );
}

export default Header;