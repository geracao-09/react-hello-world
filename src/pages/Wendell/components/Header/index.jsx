import HeaderInfo from "../HeaderInfo";
import NavbarWendell from "../NavbarWendell";
const Header = () => {
    return (
        
        <header className="flex flex-col">
             <NavbarWendell />
             <HeaderInfo />
        </header>
    );
}

export default Header;