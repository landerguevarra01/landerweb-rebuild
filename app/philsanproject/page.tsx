import Image from "next/image";

export default function Philsan() {
  return (
    <div
      className="w-full h-full border-[2px] border-[#30363D] rounded-[30px] flex flex-col justify-center items-center p-8"
      style={{ backgroundColor: "rgba(13, 17, 23, 0.5)" }}
    >
      <Image
        src="/assets/PHILSAN LOGO@4x 1.png"
        alt="Solo Leveling 2024"
        width={250} // Adjust as needed
        height={65} // Adjust as needed
      />
    </div>
  );
}
