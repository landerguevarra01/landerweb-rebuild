export default function Contact() {
  return (
    <div
      className="w-full h-full border-[2px] border-[#FA3ABF] rounded-[30px] flex items-center justify-start p-8"
      style={{ backgroundColor: "rgba(71, 16, 45, 0.5)" }}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col justify-start items-start text-start">
          <p className="text-[32px]">Let's Connect</p>
          <p className="text-[18px]">
            Have a project or just want to say hi? <br />
            Drop me a message! 🤙
          </p>
        </div>
        <a
          href="mailto:guevarralander0@gmail.com"
          className="w-[390px] h-[56px] border-[2px] border-[#FA3ABF] rounded-[30px] flex items-center justify-start gap-2 p-2"
          style={{ backgroundColor: "rgba(71, 16, 45, 0.5)" }}
        >
          <div
            className="w-[40px] h-[40px] border-[2px] border-[#FA3ABF] rounded-full flex justify-center items-center"
            style={{ backgroundColor: "rgba(71, 16, 45, 0.5)" }}
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_196_22)">
                <path
                  d="M3.95801 11.8752H3.16634C2.74641 11.8752 2.34369 11.7083 2.04676 11.4114C1.74982 11.1145 1.58301 10.7118 1.58301 10.2918V3.16683C1.58301 2.7469 1.74982 2.34418 2.04676 2.04724C2.34369 1.75031 2.74641 1.5835 3.16634 1.5835H10.2913C10.7113 1.5835 11.114 1.75031 11.4109 2.04724C11.7079 2.34418 11.8747 2.7469 11.8747 3.16683V3.9585M8.70801 7.12516H15.833C16.7075 7.12516 17.4163 7.83404 17.4163 8.7085V15.8335C17.4163 16.7079 16.7075 17.4168 15.833 17.4168H8.70801C7.83356 17.4168 7.12467 16.7079 7.12467 15.8335V8.7085C7.12467 7.83404 7.83356 7.12516 8.70801 7.12516Z"
                  stroke="#FA3ABF"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_196_22">
                  <rect width="19" height="19" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className="text-[22px] font-semibold underline">
            guevarralander0@gmail.com
          </p>
        </a>
      </div>
    </div>
  );
}
