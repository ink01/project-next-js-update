import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">น้ำปั่นสมูทตี้ & อิตาเลี่ยนโซดา</h1>
        <p className="text-white xl:text-xl">
          โปรโมชั่นสุดพิเศษสำหรับสาวสวยลด 50% ถ้าโสดด้วยเราให้ฟรีทันที
        </p>
        <CountDown/>
        <button className="bg-red-500 text-white rounded-md py-3 px-6">ซื้อตอนนี้</button>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/offerProductss_processed.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
};

export default Offer;
