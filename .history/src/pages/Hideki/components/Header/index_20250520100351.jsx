import MinhasPaginas from "../MinhasPaginas";
import avatar from "/src/assets/avatar.jpg";
import socialMedia from "/src/pages/Hideki/data/social-media.json";


const Header = () => {
    return ( 
        <header>
            <div className="flex items-center gap-12">
            <img src={avatar} alt ="avatar" className="w-24 rounded-full" />
            <h1 className="text-4xl">Oi, eu sou o <span className="font-bold text-red-800">Hideki</span></h1>
            </div>
            <MinhasPaginas />
        </header>
     );
}
 
export default Header;