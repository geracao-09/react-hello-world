import avatar from "/avatar.png"

const Header = () => {
    return (
        <header>
            <div>
                <img src={avatar} alt="Avatar" />

            </div>
        </header>
    );
}

export default Header;