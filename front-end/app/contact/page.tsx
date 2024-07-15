import React from "react";
import SideCard from "./sidetab";
import ContactPage from "./contactform";

function Page() {
  return(

  <> 
    <div className="flex justify-between items-start gap-4 p-6">
    <div className="w-1/3"> 
    <SideCard/>
  
    </div>
    <ContactPage/>
    </div>
    
  </>
)
    
}
export default Page;

