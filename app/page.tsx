import About from "./about/page";
import Blink from "./blinkproject/page";
import Lander from "./lander/page";
import MyImage from "./myimage/page";
import Philsan from "./philsanproject/page";
import Recently from "./recently/page";
import Sansan from "./sansanproject/page";
import Darkmode from "./darkmode/page";
import Philrice from "./philriceproject/page";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="w-full flex flex-col gap-3 my-20">
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
        </div>
      </div>
    </div>
  );
}
