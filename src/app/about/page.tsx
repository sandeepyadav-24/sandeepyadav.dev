import WorkProcess from "@/components/WorkProcess";
import AboutIntro from "@/components/AboutIntro";
import ProjectBanner from "@/components/ProjectBanner";
import ConnectBanner from "@/components/ConnectBanner";
import Marque from "@/components/Marque";
const About = () => {
  return (
    <div>
      <div className="bg-[#5740B9]">
        <div className=" flex justify-center">
          <img
            className="-rotate-90  w-[220px] md:w-[500px]  rounded-2xl border-4 border-white  "
            src="./AboutImage.jpeg"
          />
        </div>
      </div>
      <Marque />
      <AboutIntro />
      <WorkProcess />
      <Marque />
      <ProjectBanner />
      <Marque />
      <ConnectBanner />
    </div>
  );
};
export default About;
