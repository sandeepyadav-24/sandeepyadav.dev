import HackathonTemplateRight from "../../components/HackathonTemplateRight";
import HackathonTemplateLeft from "../../components/HackathonTemplateLeft";

const hack = [
  {
    hackathonName: "Electrothon 6.0",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "8 March 2024",
    hackathonMode: "Offline",
    hackathonProject: "Social.Ai",
    hackathonLocation: "NIT Hamirpur, Himachal Pradesh",
  },
  {
    hackathonName: "Hacked 2.0",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "1 March 2024",
    hackathonMode: "Offline",
    hackathonProject: "Tweepy",
    hackathonLocation: "BML Munjal University, Haryana",
  },
  {
    hackathonName: "Open Hack",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "1 March 2024",
    hackathonMode: "Offline",
    hackathonProject: "Article.Ai",
    hackathonLocation: "IISC Bangalore",
  },
  {
    hackathonName: "Hack Street",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "1 March 2024",
    hackathonMode: "Online",
    hackathonProject: "BookBridge",
    hackathonLocation: "Jaypee Noida",
  },
  {
    hackathonName: "Smart India Hackathon",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "1 March 2024",
    hackathonMode: "Online",
    hackathonProject: "Yet",
    hackathonLocation: "ITS Engineering College, Greater Noida",
  },
  {
    hackathonName: "Hack Xtreme",
    hackathonDescription:
      "It was a fantastic hackathon with full of fun and enjoyment",
    hackathonDate: "1 March 2024",
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
        <div className="mx-40">
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
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Hackathon;
