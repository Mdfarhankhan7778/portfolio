import {  IconBrandGithub, IconBrandHackerrank, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import { link } from "fs";
const Social=()=>{
    const socialLinks=[{link:"https://github.com/Mdfarhan778",icon:IconBrandGithub},{link:"https://github.com/Mdfarhan778",icon:IconBrandLinkedin},
        {link:"https://github.com/Mdfarhan778",icon:IconBrandInstagram},{link:"https://github.com/Mdfarhan778",icon:IconBrandLeetcode},
        {link:"https://github.com/Mdfarhan778",icon:IconBrandHackerrank}
    ];
    const socialIcons = socialLinks.map((socialLink)=>{
        return  <a href={`${socialLink.link}`} target="_blank" className="font-mono text-lg hover:text-primaryColor hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out">
        <socialLink.icon className="-rotate-90" size={30}  />
         </a>

    });
    return <div className="flex text-textColor items-center gap-10 fixed bottom-40 -left-44 rotate-90">

    {socialIcons}
    <hr className="border-[2px] w-40 rounded-full text-textColor bg-textColor border-textColor" />
</div>


}
export default Social;