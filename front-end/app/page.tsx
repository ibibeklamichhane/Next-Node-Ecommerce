import Image from "next/image";
import Topbar from "@/components/Navbar/Topbar"
import Sidebar from "@/components/Navbar/Sidebar"
import SwiperSlider from "@/components/Navbar/hero";
import ProductPage from "./products/page";


export default function Home() {
  return (
    <>
    
   

    <div className="flex" >
      <Sidebar/>
   
    <SwiperSlider/>
     
  

    </div>
    
    <ProductPage/>
   
    
  
    

    
    </>

   
  );
}


//https://www.figma.com/design/lZZR4DEvewO66Yxi3wdHCD/Full-E-Commerce-Website-UI-UX-Design-(Community)?node-id=45-260&t=za7XuAibsMffiQPs-4

// Create navbar for my project  


