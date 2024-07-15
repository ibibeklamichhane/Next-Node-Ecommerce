import React from "react";

function SideCard() {
  return (
    <>
<div className="bg-white shadow-md rounded-lg p-6 max-w-md ">
  <div className="flex flex-col text-black">
    <h1 className="font-semibold text-xl mb-4">Call To Us</h1>

    <div className="font-regular text-md flex flex-col mb-6 cursor-pointer gap-y-2">
      <p>We are available 24/7, 7 days a week.</p>
      <p>Phone: +8801611112222</p>
    </div>

    <h1 className="font-semibold text-xl mb-4">Write To US</h1>

    <div className="font-regular text-md flex flex-col mb-6 cursor-pointer gap-y-2">
      <p>Fill out our form and we will contact you within 24 hours.</p>
      <p>Emails: customer@exclusive.com</p>
      <p>Emails: support@exclusive.com</p>
    </div>

   
  </div>
</div>
    </>
  );
}

export default SideCard;
