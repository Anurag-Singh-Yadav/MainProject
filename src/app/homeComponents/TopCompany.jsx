import React from "react";
import Image from "next/image";
import assets from "@/assets/allImages";
function TopCompany() {
  return (
    <div className="my-6">
      <div className="flex justify-center gap-2 items-center font-serif text-4xl">
        <div className="font-semibold uppercase">Top Tech Companies</div>
        <div className="text-primarybtn font-bold">Hire Students</div>
      </div>
      <div className="flex flex-wrap gap-4 px-8 justify-evenly items-center my-3">
        <Image src={assets.microsoft} width={144} height={36} alt="microsoft" />
        <Image src={assets.google} width={144} height={36} alt="google" />
        <Image src={assets.amazon} width={144} height={36} alt="amazon" />
        <Image src={assets.facebook} width={144} height={36} alt="facebook" />
        <Image src={assets.gs} width={144} height={36} alt="goldmansachs" />
        <Image src={assets.netflix} width={144} height={36} alt="netflix" />
        <Image src={assets.samsung} width={144} height={36} alt="samsung" />
      </div>
    </div>
  );
}

export default TopCompany;
