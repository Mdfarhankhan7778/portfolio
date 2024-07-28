import { IconHexagonLetterF } from "@tabler/icons-react";
import SideBar from "./sidebar";
const links = ["About","Work","Skills","Experience","Contact"];
const navLinks=(col:Boolean)=>{
    return links.map((link,index)=>{
        return <a className={`${col?'flex flex-col items-center':''} text-textColor text-lg hover:text-primaryColor font-mono`} href={'#${link}'}><span className="text-primaryColor">0{index+1}. </span>{link}</a>


    })
}




const Header=()=>{
    return(
        <nav className="flex bg-bgColor h-[18vh] px-10 justify-between items-center">
            <IconHexagonLetterF className="z-10" size={60} color="#64FFDA" stroke={1.25} />
            <div className="md:flex gap-8 hidden">
            {navLinks(false)}
            </div>
            <SideBar/>
        </nav>

    );

}
export default Header;
export {navLinks};