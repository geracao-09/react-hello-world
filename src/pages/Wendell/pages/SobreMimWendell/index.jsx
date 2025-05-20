import SobreMimBody from "../../components/SobreMimBody";
import NavbarWendell from "../../components/NavbarWendell";
import HeaderInfo from "../../components/HeaderInfo";

const SobreWendell = () => {
    return ( 
        <div className="bg-black text-white h-screen">
             <NavbarWendell />
             <HeaderInfo />
            <SobreMimBody />
        </div>
     );
}
 
export default SobreWendell;