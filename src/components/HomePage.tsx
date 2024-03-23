import AboutIntro from "./AboutIntro";
import ConnectBanner from "./ConnectBanner";
import EducationAndWork from "./EducationAndWork";
import Hero from "./Hero";
import Marque from "./Marque";
import Skills from "./Skills";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutIntro />
      <Marque />
      <Skills />
      <Marque />

      <EducationAndWork />
      <ConnectBanner />
    </div>
  );
};
export default HomePage;
