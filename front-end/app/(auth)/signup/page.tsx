// outline functional component

import LoginForm from "./loginForm";
import Image from "next/image";
import sideImage from "@/public/assets/Side Image.png"


function login() {

return (
<>
<div className="flex mt-24">
<Image
  src={sideImage}
  alt="Image Alt"
  width={600}
  height={300}
/>
  <LoginForm/>
</div>

  </>
)
 }

 export default login