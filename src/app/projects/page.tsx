import { link } from "fs";
import ProjectTemplateRight from "../../components/ProjectTemplateRight";
import ProjectTemplateLeft from "../../components/ProjectTemplateLeft";
import ConnectBanner from "@/components/ConnectBanner";
import Marque from "@/components/Marque";
import WorkTogether from "@/components/WorkTogether";
const project = [
  {
    link: "https://github.com/sandeepyadav-24/Social.Ai",

    imageSource:
      "https://media.licdn.com/dms/image/D5622AQGdJdCgFK2-oQ/feedshare-shrink_2048_1536/0/1710859206612?e=1714003200&v=beta&t=6ZMJF8pSF_JIwa_-vVEWSHvO-Pj36RMcNYxZ1ExFPWw",
    projectName: "Social.Ai",
    techStack: [
      "Node.js",
      "Express.js",
      "React.js",
      "TailwindCSS",
      "JWT",
      "Recoil",
      "MongoDB",
      "TypeScript",
      "Generative Ai",
      "OpenAi API",
      "Gemini Pro",
      "Gemini Pro Vision",
    ],
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
  {
    link: "https://github.com/sandeepyadav-24/Article.Ai",

    imageSource:
      "https://media.licdn.com/dms/image/D5622AQGdJdCgFK2-oQ/feedshare-shrink_2048_1536/0/1710859206612?e=1714003200&v=beta&t=6ZMJF8pSF_JIwa_-vVEWSHvO-Pj36RMcNYxZ1ExFPWw",
    projectName: "Article.Ai",
    techStack: [
      "Node.js",
      "Express.js",
      "React.js",
      "TailwindCSS",
      "JWT",
      "Recoil",
      "MongoDB",
      "TypeScript",
      "Generative Ai",
      "OpenAi API",
      "Gemini Pro",
    ],
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
  {
    link: "https://github.com/sandeepyadav-24/Notify",

    imageSource: "./NotifyBanner.jpeg",
    projectName: "Notify",
    techStack: [
      "Node.js",
      "Express.js",
      "React.js",
      "TailwindCSS",
      "JWT",
      "Recoil",
      "MongoDB",
      "TypeScript",
      "Generative Ai",
      "OpenAi API",
      "Gemini Pro",
    ],
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
  {
    link: "https://github.com/sandeepyadav-24/BookBridge",

    imageSource:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707296140930/199fcd68-f12e-4793-87c2-15f11c6a2924.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    projectName: "BookBridge",
    techStack: [
      "Node.js",
      "Express.js",
      "React.js",
      "TailwindCSS",
      "JWT",
      "Recoil",
      "MongoDB",
      "javaScript",
    ],
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
  {
    link: "https://github.com/sandeepyadav-24/sandeepyadav.dev",

    imageSource: "./Banner.jpeg",
    projectName: "Portfolio Website",
    techStack: [
      "Next.js",
      "React.js",
      "TailwindCSS",
      "Material UI",
      "javaScript",
    ],
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
];

const Project = () => {
  return (
    <div>
      <div className="bg-[#5740B9] py-20 px-5 md:px-40 ">
        <h1 className="text-white text-center ">
          <span className="text-[#A8DC79]">-</span>Projects
        </h1>
        <h1 className="font-semibold text-white text-3xl text-center ">
          My <span className="text-[#A8DC79]">Latest Projects</span>
        </h1>
        <div>
          {project.map((e, index) => {
            if (index % 2 == 0) {
              return (
                <ProjectTemplateRight
                  key={index}
                  link={e.link}
                  imageSource={e.imageSource}
                  projectName={e.projectName}
                  projectDescription={e.projectDescription}
                  projectLink={e.projectLink}
                  techStack={e.techStack}
                />
              );
            } else {
              return (
                <ProjectTemplateLeft
                  key={index}
                  link={e.link}
                  imageSource={e.imageSource}
                  projectName={e.projectName}
                  projectDescription={e.projectDescription}
                  projectLink={e.projectLink}
                  techStack={e.techStack}
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
export default Project;
