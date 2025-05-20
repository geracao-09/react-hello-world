import avatar from "/src/assets/avatar.jpg"

const Header = () => {
    return ( 
        <header className="flex items-center gap-12">
            <img src={avatar} alt ="avatar" className="w-24 rounded-full" />
            <h1 className="text-4xl">Oi, eu sou o <span className="font-bold text-red-800">Hideki</span></h1>
        </header>
     );
}
 
export default Header;