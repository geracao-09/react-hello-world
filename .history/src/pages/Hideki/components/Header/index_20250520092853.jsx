import MinhasPaginas from "../MinhasPaginas";
import avatar from "/src/assets/avatar.jpg"

const Header = () => {
    return ( 
        <header className="">
            <div className="">
            <img src={avatar} alt ="avatar" className="w-24 rounded-full" />
            <h1 className="text-4xl">Oi, eu sou o <span className="font-bold text-red-800">Hideki</span></h1>
            </div>
            <MinhasPaginas />
        </header>
     );
}
 
export default Header;