import avatar from "/src/assets/avatar.jpg"

const Header = () => {
    return ( 
        <header>
            <img src={avatar}
            <h1 className="text-4xl">Oi, eu sou o <span className="font-bold">Hideki</span></h1>
        </header>
     );
}
 
export default Header;