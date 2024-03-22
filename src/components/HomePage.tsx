import AboutIntro from "./AboutIntro";
import ConnectBanner from "./ConnectBanner";
import EducationAndWork from "./EducationAndWork";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <AboutIntro />
      <EducationAndWork />
      <ConnectBanner />
    </div>
  );
};
export default HomePage;
