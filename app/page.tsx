import About from "@/components/About";
import Blink from "@/components/BlinkProject";
import Lander from "@/components/Lander";
import MyImage from "@/components/MyImage";
import Philsan from "@/components/PhilsanProject";
import Recently from "@/components/Recently";
import Sansan from "@/components/SansanProject";
import Darkmode from "@/components/DarkMode";
import Philrice from "@/components/PhilriceProject";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen py-8 justify-center items-center overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col gap-3">
        {/* Section 1 */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-3">
          {/* Left Side */}
          <div className="grid gap-3">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full lg:w-[556px] h-auto">
                <Lander />
              </div>
              <div className="w-full lg:w-[268px] h-auto">
                <Recently />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full lg:w-[268px] h-[268px]">
                <Blink />
              </div>
              <div className="w-full lg:w-[556px] h-[268px]">
                <Philsan />
              </div>
            </div>
          </div>
          {/* Right Side */}
          <div className="w-full h-[550px] lg:h-auto">
            <MyImage />
          </div>
        </div>

        {/* Section 2 */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-3">
          <div className="grid gap-3">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full lg:w-[556px] h-auto">
                <About />
              </div>
              <div className="w-full lg:w-[268px] h-[268px]">
                <Sansan />
              </div>
            </div>
          </div>
          <div className="w-full h-[268px]">
            <Darkmode />
          </div>
        </div>

        {/* Section 3 */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="w-full lg:w-[556px] h-[268px]">
            <Philrice />
          </div>
          <div className="w-full md:w-auto h-auto">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-full flex flex-col gap-3 my-8">
  <div className="flex flex-wrap gap-3">
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-3">
        <div className="w-[556px] h-[268px]">
          <Lander />
        </div>
        <div className="w-[268px] h-[268px]">
          <Recently />
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        <div className="w-[268px] h-[268px]">
          <Blink />
        </div>
        <div className="w-[556px] h-[268px]">
          <Philsan />
        </div>
      </div>
    </div>
    <div className="w-[268px] h-[550px]">
      <MyImage />
    </div>
  </div>
  <div className="flex flex-wrap gap-3">
    <div className="w-[556px] h-[268px]">
      <About />
    </div>
    <div className="w-[268px] h-[268px]">
      <Sansan />
    </div>
    <div className="w-[268px] h-[268px]">
      <Darkmode />
    </div>
  </div>
  <div className="flex flex-wrap gap-3">
    <div className="w-[556px] h-[268px]">
      <Philrice />
    </div>
    <div className="w-[550px] h-[268px] ">
      <Contact />
    </div>
  </div>
</div> */
}
