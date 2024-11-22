import Image from "next/image";
import Hero from "@/app/components/Landing/Hero";
import Section2 from "@/app/components/Landing/Section2";
import Section3 from "@/app/components/Landing/Section3";
import Section4 from "@/app/components/Landing/Section4";
import Section5 from "@/app/components/Landing/Section5";
import Section11 from "@/app/components/Landing/Section11";

export default function Home() {
  return (<>
<div className=''>
    <Hero/>
    <Section2/>
    <Section3/>
    <Section4/>
    <Section5/>
    <Section11/>

    </div>
</>);
}
