import Image from "next/image";

export default function MyImage() {
  return (
    <div
      className="relative w-full h-full rounded-[30px] overflow-hidden"
      style={{ backgroundColor: "rgba(32, 47, 18, 0.5)" }}
    >
      <Image
        src="/assets/_DSC8035 (2).JPG"
        alt="Solo Leveling 2024"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}
