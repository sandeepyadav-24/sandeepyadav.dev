import HackathonTemplateRight from "../../components/HackathonTemplateRight";
import HackathonTemplateLeft from "../../components/HackathonTemplateLeft";
import Marque from "@/components/Marque";
import ConnectBanner from "@/components/ConnectBanner";
import WorkTogether from "@/components/WorkTogether";

const hack = [
  {
    hackathonName: "Electrothon 6.0",
    hackathonImage:
      "https://media.licdn.com/dms/image/D5622AQHfpmOl4ePNSg/feedshare-shrink_2048_1536/0/1710859208362?e=1714003200&v=beta&t=veq0hi-2mAFdmwoNlEnMUvZwVxLdwgR4CJ50P58EpzY",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "8 March 2024",
    hackathonMode: "Offline",
    hackathonProject: "Social.Ai",
    hackathonLocation: "NIT Hamirpur, Himachal Pradesh",
  },
  {
    hackathonName: "Hacked 2.0",
    hackathonImage: "./BmlBanner.jpeg",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "1 March 2024",
    hackathonMode: "Offline",
    hackathonProject: "Tweepy",
    hackathonLocation: "BML Munjal University, Haryana",
  },
  {
    hackathonName: "Open Hack",
    hackathonImage:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/gallery/65bfbbd3cfb70_20230304_053455988_ios.jpg?d=600x600",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "24 February 2024",
    hackathonMode: "Offline",
    hackathonProject: "Article.Ai",
    hackathonLocation: "IISC Bangalore",
  },
  {
    hackathonName: "Hack Street",
    hackathonImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707296742727/98494ab6-e388-4189-bdc2-594093fdfa6e.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "7 February 2024",
    hackathonMode: "Online",
    hackathonProject: "BookBridge",
    hackathonLocation: "Jaypee Noida",
  },
  {
    hackathonName: "Smart India Hackathon",
    hackathonImage:
      "https://media.licdn.com/dms/image/D4D22AQHUaJ4knp6gtg/feedshare-shrink_800/0/1696075963957?e=1714003200&v=beta&t=XduPztnh_ErifaomOxvgf7G0gXczdUpvRMDz0MRGhq0",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "7 November 2023",
    hackathonMode: "Online",
    hackathonProject: "Yet",
    hackathonLocation: "ITS Engineering College, Greater Noida",
  },
  {
    hackathonName: "Hack Xtreme",
    hackathonImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707296742727/98494ab6-e388-4189-bdc2-594093fdfa6e.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "5 October 2023",
    hackathonMode: "Online",
    hackathonProject: "Code Editor",
    hackathonLocation: "IIT Delhi",
  },
];

const Hackathon = () => {
  return (
    <div>
      <div className="bg-[#5740B9]">
        <h1 className="text-white text-center">
          <span className="text-[#A8DC79]">-</span>Hackathons
        </h1>
        <h1 className="font-semibold text-white text-3xl text-center">
          My <span className="text-[#A8DC79]">Hackathons</span>
        </h1>
        <div className=" mx-5 md:mx-40">
          {hack.map((e, index) => {
            if (index % 2 == 0) {
              return (
                <HackathonTemplateRight
                  name={e.hackathonName}
                  description={e.hackathonDescription}
                  date={e.hackathonDate}
                  mode={e.hackathonMode}
                  project={e.hackathonProject}
                  location={e.hackathonLocation}
                  image={e.hackathonImage}
                />
              );
            } else {
              return (
                <HackathonTemplateLeft
                  name={e.hackathonName}
                  description={e.hackathonDescription}
                  date={e.hackathonDate}
                  mode={e.hackathonMode}
                  project={e.hackathonProject}
                  location={e.hackathonLocation}
                  image={e.hackathonImage}
                />
              );
            }
          })}
        </div>
      </div>
      <Marque />
      <WorkTogether />
      <Marque />
      <ConnectBanner />
    </div>
  );
};

export default Hackathon;
