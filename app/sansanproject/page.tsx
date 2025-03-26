import Image from "next/image";

export default function Sansan() {
  return (
    <div
      className="w-full h-full border-[2px] border-[#30363D] rounded-[30px] flex flex-col justify-center items-center p-8"
      style={{ backgroundColor: "rgba(13, 17, 23, 0.5)" }}
    >
      <Image
        src="/assets/LOGO.png"
        alt="Solo Leveling 2024"
        width={94.17} // Adjust as needed
        height={100} // Adjust as needed
      />
    </div>
  );
}
