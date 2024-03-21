import WorkProcess from "@/components/WorkProcess";
import AboutIntro from "@/components/AboutIntro";
import ProjectBanner from "@/components/ProjectBanner";
import ConnectBanner from "@/components/ConnectBanner";
const About = () => {
  return (
    <div>
      <div className="bg-[#5740B9]">
        <h1>About</h1>
        <div className="border-2-white">
          <img className="-rotate-90 ml-72 w-[500px]" src="./AboutImage.jpeg" />
        </div>
      </div>
      <AboutIntro />
      <WorkProcess />
      <ProjectBanner />
      <ConnectBanner />
    </div>
  );
};
export default About;
