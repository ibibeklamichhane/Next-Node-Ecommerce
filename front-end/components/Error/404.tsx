import React from "react";


  

  const NotFound: React.FC= () => {
  return (
    <>
<div className="flex justify-center items-center  mt-20">
  <div className="text-black flex flex-col items-center">
    <h1 className="text-8xl font-medium">404 Not Found</h1>
    <p className="mt-8 text-center text-xl font-normal">Your visited page not found. You may go home page.</p>
    <button className="bg-red-500 w-fit px-6 py-2 rounded-md text-white font-semibold mt-14">Back to home page</button>
  </div>
</div>
    </>
  );
}

export default NotFound;
