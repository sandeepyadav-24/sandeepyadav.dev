import Button from "./Button";
import SkillLogo from "./SkillLogo";
const Skills = () => {
  return (
    <div className="bg-[#5640B7] flex flex-col md:flex-row px-5 py-20 md:p-40">
      <div className="md:w-1/2">
        <SkillLogo />
      </div>
      <div className="md:w-1/2">
        <div className="flex flex-row my-2">
          <span className="text-white w-1/5">Frontend</span>
          <div className="flex flex-wrap w-4/5">
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              Next.js
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              React.js
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              Recoil
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              TailwindCSS
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              Material UI
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              React.js
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              React Router
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              JavaScript
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              TypeScript
            </span>
          </div>
        </div>
        <div className="flex flex-row my-2">
          <span className="text-white w-1/5">Backend</span>
          <div className="flex flex-wrap w-4/5">
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              Node.js
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              Express.js
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              JWT
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              TypeScript
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              JavaScript
            </span>
          </div>
        </div>
        <div className="flex flex-row my-2">
          <span className="text-white w-1/5">DevOps</span>
          <div className="flex flex-wrap w-4/5">
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              AWS
            </span>
          </div>
        </div>
        <div className="flex flex-row my-2">
          <span className="text-white w-1/5">DataBase</span>
          <div className="flex flex-wrap w-4/5">
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              MongoDB
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              SQL
            </span>
          </div>
        </div>
        <div className="flex flex-row my-2">
          <span className="text-white w-1/5">Tools</span>
          <div className="flex flex-wrap w-4/5">
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              Git
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              VS Code
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              Zod
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              Next-Auth
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              TurboRepo
            </span>
          </div>
        </div>
        <div className="flex flex-row my-2">
          <span className="text-white w-1/5">Languages</span>
          <div className="flex flex-wrap w-4/5">
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              C/C++ ( Problem Solving )
            </span>

            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              TypeScript
            </span>
            <span className="px-3 py-1 mx-1 my-1 bg-[#A1D874] text-md font-bold rounded-md">
              JavaScript
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
