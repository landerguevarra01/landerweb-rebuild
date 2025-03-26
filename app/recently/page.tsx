import Image from "next/image";

export default function Recently() {
  return (
    <div
      className="w-full h-full border-[2px] border-[#AEFA62] rounded-[30px] flex flex-col justify-center items-start p-8"
      style={{ backgroundColor: "rgba(32, 47, 18, 0.5)" }}
    >
      <p className="text-white text-[18px] mb-2">Recently watched</p>
      <Image
        src="/assets/image 6.png"
        alt="Solo Leveling 2024"
        width={66.2} // Adjust as needed
        height={99.3} // Adjust as needed
        className="rounded-lg"
      />
      <h1 className="text-[22px]">Solo Leveling</h1>
      <h2 className="text-[16px]">2024</h2>
    </div>
  );
}
