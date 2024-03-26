import Button from "./Button";
const AboutIntro = () => {
  return (
    <div className="flex flex-col md:flex-row my-20 mx-5 md:mx-96">
      <div className="md:w-1/2  text-right ">
        <div className="w-[300px] h-[400px] bg-[#5640B8] rounded-2xl mx-auto my-2">
          <h1 className="text-white  text-3xl mx-9 ">Sandeep Yadav</h1>
          <h1 className="text-white text-[300px] font-bold pl-32 leading-none">
            3
          </h1>
          <h1 className="text-white text-2xl text-right">
            months of Experience
          </h1>
        </div>
      </div>
      <div className="md:w-1/2 my-2">
        <h1>
          <span className="text-[#5640B8] text-xl">~</span>About Me
        </h1>
        <h1 className="font-bold text-4xl my-5">
          Who is <span className="text-[#5640B8] ">Sandeep yadav?</span>
        </h1>
        <h1>
          I am a Full Stack a web Developer worked on several project with Ai
          Integration
        </h1>
        <div className="flex flex-row justify-between my-3 ">
          <div className="w-1/2">
            <h1 className="font-semibold">5+</h1>
            <h1>Projects Completed</h1>
          </div>
          <div className="w-1/2">
            <h1 className="font-semibold">1+</h1>
            <h1> Freelance Projects</h1>
          </div>
        </div>
        <Button working={"Resume"} link={"https://www.google.com"} />
      </div>
    </div>
  );
};
export default AboutIntro;
