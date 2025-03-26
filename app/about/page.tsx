export default function About() {
  return (
    <div
      className="w-full h-full border-[2px] border-[#7069F6] rounded-[30px] flex items-center justify-center p-8"
      style={{ backgroundColor: "rgba(48, 32, 137, 0.5)" }}
    >
      <div className="grid grid-rows-2 justify-center items-center">
        {/* <div className="flex justify-start items-center">
          <div className="w-[84px] h-[84px] bg-[#d9d9d9] rounded-full"></div>
        </div> */}
        <div className="flex justify-center items-center text-start">
          <p className="text-[18px]">
            Pioneering the Fusion of{" "}
            <span className="text-[32px]">Aesthetics &</span>{" "}
            <span className="text-[32px]">Functionality</span> in Digital Design
          </p>
        </div>
      </div>
    </div>
  );
}
