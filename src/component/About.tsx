import  { Info } from "../user";
import { useState ,useEffect } from "react";
import Typewriter from "typewriter-effect";
//@ts-ignore
import DOTS from "vanta/src/vanta.dots";
const About=()=>{
    const [dots, setDots] = useState<any>(null)
  useEffect(() => {
    if (!dots) {
      setDots(DOTS({
        el: "#bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color:0x14479f,
        color2:0x204aff,
        backgroundColor:0x112240,
        size:2.8,
        spacing:20,
        showLines:false
      }))
    }
    return () => {
      if (dots) dots.destroy()
    }
  }, [])
    return(
        <div className="flex font-mono overflow-hidden px-16 h-[80vh]" id="bg">
            <div className="ml-20">
            <div className="text-primaryColor text-3xl">Hi, I am</div>
            <div className="text-white text-[4.25rem] font-extrabold">
               {Info.name}
            </div>
            <div className="text-white text-4xl flex font-semibold">I'm a&nbsp;<span className="text-primaryColor"><Typewriter 
            options={{
                strings:Info.stack,
                autoStart:true,
                loop:true,
            }}
            /></span></div>
            <div className="text-textColor">{Info.bio}</div>

        </div>
        </div>
    );
}
export default About;