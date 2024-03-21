import Button from "./Button";
const AboutIntro = () => {
  return (
    <div className="flex flex-row my-20 mx-40">
      <div className="w-1/2 mx-20">
        <div className="w-[300px] h-[550px] bg-[#5640B8]">
          <h1 className="text-white  text-2xl">Sandeep Yadav</h1>
          <h1 className="text-white text-[300px]">1</h1>
          <h1 className="text-white text-2xl">Years of Experience</h1>
        </div>
      </div>
      <div className="w-1/2">
        <h1>About Me</h1>
        <h1>Who is Sandeep yadav??</h1>
        <h1>
          I am a Full Stack a web Developer worked on several project with Ai
          Integration
        </h1>
        <div className="flex flex-row">
          <h1> 5+ projects</h1>
          <h1> 1+ Freelance Projects</h1>
        </div>
        <Button />
      </div>
    </div>
  );
};
export default AboutIntro;
