import MinhasPaginas from "../MinhasPaginas";
import SocialLinks from "../SocialLinks";
import avatar from "/src/assets/avatar.jpg";
import socialMedia from "/src/pages/Hideki/data/social-media.json";


const Header = () => {
    return ( 
        <header className="flex justify-between items-center">
            <div className="flex items-center gap-12">
            <img src={avatar} alt ="avatar" className="w-24 rounded-full" />
            <h1 className="text-4xl">Oi, eu sou o <span className="font-bold text-red-800">Hideki</span></h1>
            </div>
            <MinhasPaginas />
            <SocialLinks list={socialMedia} />
        </header>
     );
}
 
export default Header;