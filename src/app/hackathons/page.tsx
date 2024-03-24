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
      "I was the runner-up at NIT Hamirpur's Eletrothon 6.0, where my team developed a productivity tool combining AI Gemini Pro and OpenAI. Our platform enables users to write daily journals, automatically converting and posting them across platforms. It streamlines user tasks, saving valuable time.",
    hackathonDate: "8 March 2024",
    hackathonMode: "Offline",
    hackathonProject: "Social.Ai",
    hackathonLocation: "NIT Hamirpur, Himachal Pradesh",
    hackathonAchievement: "Runner Up in Track Prize",
  },
  {
    hackathonName: "Hacked 2.0",
    hackathonImage: "./BmlBanner.jpeg",
    hackathonDescription:
      "Participating in the Jaypee Noida Virtual Hackathon led to BookBridge, a platform fostering community through shared knowledge. Overcoming challenges like communication systems and user-friendly interfaces, BookBridge breaks barriers, symbolizing limitless possibilities in problem-solving.",
    hackathonDate: "1 March 2024",
    hackathonMode: "Offline",
    hackathonProject: "Notify",
    hackathonLocation: "BML Munjal University, Haryana",
    hackathonAchievement: "Under Top 10 Teams",
  },
  {
    hackathonName: "Open Hack",
    hackathonImage: "./IiscHack.jpeg",
    hackathonDescription:
      "Participating in the Jaypee Noida Virtual Hackathon led to BookBridge, a platform fostering community through shared knowledge. Overcoming challenges like communication systems and user-friendly interfaces, BookBridge breaks barriers, symbolizing limitless possibilities in problem-solving.",
    hackathonDate: "24 February 2024",
    hackathonMode: "Offline",
    hackathonProject: "Article.Ai",
    hackathonLocation: "IISC, Bangalore",
    hackathonAchievement: "Disqualified in Round 1",
  },
  {
    hackathonName: "Hack Street",
    hackathonImage: "./Hack3.jpeg",
    hackathonDescription:
      "Participating in the Jaypee Noida Virtual Hackathon led to BookBridge, a platform fostering community through shared knowledge. Overcoming challenges like communication systems and user-friendly interfaces, BookBridge breaks barriers, symbolizing limitless possibilities in problem-solving.",
    hackathonDate: "7 February 2024",
    hackathonMode: "Online",
    hackathonProject: "BookBridge",
    hackathonLocation: "Jaypee Institute of Information Technology, Noida",
    hackathonAchievement: "Disqualified in Final Round",
  },
  {
    hackathonName: "Smart India Hackathon",
    hackathonImage:
      "https://media.licdn.com/dms/image/D4D22AQHUaJ4knp6gtg/feedshare-shrink_800/0/1696075963957?e=1714003200&v=beta&t=XduPztnh_ErifaomOxvgf7G0gXczdUpvRMDz0MRGhq0",
    hackathonDescription:
      "Participating in the Jaypee Noida Virtual Hackathon led to BookBridge, a platform fostering community through shared knowledge. Overcoming challenges like communication systems and user-friendly interfaces, BookBridge breaks barriers, symbolizing limitless possibilities in problem-solving.",
    hackathonDate: "7 November 2023",
    hackathonMode: "Online",
    hackathonProject: "DropX",
    hackathonLocation: "ITS Engineering College, Greater Noida",
    hackathonAchievement: "Selected for College Level",
  },
  {
    hackathonName: "Hack Xtreme",
    hackathonImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707296742727/98494ab6-e388-4189-bdc2-594093fdfa6e.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    hackathonDescription:
      "Participating in the Jaypee Noida Virtual Hackathon led to BookBridge, a platform fostering community through shared knowledge. Overcoming challenges like communication systems and user-friendly interfaces, BookBridge breaks barriers, symbolizing limitless possibilities in problem-solving.",
    hackathonDate: "5 October 2023",
    hackathonMode: "Online",
    hackathonProject: "CodeX",
    hackathonLocation: "IIT, Delhi",
    hackathonAchievement: "Under Top 50 Teams",
  },
];

const Hackathon = () => {
  return (
    <div>
      <div className="bg-[#5740B9] py-6">
        <h1 className="text-white text-center">
          <span className="text-[#A8DC79]">-</span>Hackathons
        </h1>
        <h1 className="font-semibold text-white text-3xl text-center">
          My <span className="text-[#A8DC79]">Hackathons</span>
        </h1>
        <div className=" mx-3 md:mx-40">
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
                  achievement={e.hackathonAchievement}
                  key={index}
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
                  achievement={e.hackathonAchievement}
                  key={index}
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
