export default function Lander() {
  return (
    <div
      className="w-full h-full border-[2px] border-[#E44756] rounded-[30px] flex items-center justify-center p-8"
      style={{ backgroundColor: "rgba(117, 31, 48, 0.5)" }}
    >
      <div className="grid grid-rows-2 justify-center items-center">
        <div className="flex justify-start items-center">
          <div className="w-[84px] h-[84px] bg-[#d9d9d9] rounded-full"></div>
        </div>
        <div className="flex justify-center items-center text-start">
          <p className="text-[18px]">
            👋 Hey there! I’m <span className="text-[32px]">Lander</span> , a
            Front-end Web Developer who builds sleek, dynamic, and user-friendly
            websites that just work.
          </p>
        </div>
      </div>
    </div>
  );
}
