"use client";
//import { useRouter } from "next/navigation";
type prop = {
  working: string;
};
const Button = (props: prop) => {
  //const router = useRouter();
  return (
    <div className="flex flex-row w-48 bg-[#242424] rounded-full h-10 ">
      <div className="w-1/4 bg-[#242424] py-2 rounded-l-full pl-3 ">
        <div className="bg-[#5740B9] w-7 h-7 px-1 py-1 text-white rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="bg-[#A3DA74] w-3/4 py-2 rounded-full px-5 font-semibold">
        {props.working}
      </div>
    </div>
  );
};
export default Button;
