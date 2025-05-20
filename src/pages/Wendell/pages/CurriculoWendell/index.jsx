import CurriculoBody from "../../components/CurriculoBody";
import HeaderInfo from "../../components/HeaderInfo";
import NavbarWendell from "../../components/NavbarWendell";

const CurriculoWendell = () => {
    return ( 
        <div className="bg-black text-white h-screen">
             <NavbarWendell />
             <HeaderInfo />
            <CurriculoBody />
        </div>
     );
}
 
export default CurriculoWendell;