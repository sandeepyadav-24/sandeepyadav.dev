import { link } from "fs";
import ProjectTemplateRight from "../components/ProjectTemplateRight";
import ProjectTemplateLeft from "../components/ProjectTemplateLeft";
const project = [
  {
    link: "www.google.com",

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
      "Gemini",
    ],
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
  {
    link: "www.google.com",

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
      "Gemini",
    ],
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
  {
    link: "www.google.com",

    imageSource:
      "https://media.licdn.com/dms/image/D5622AQGdJdCgFK2-oQ/feedshare-shrink_2048_1536/0/1710859206612?e=1714003200&v=beta&t=6ZMJF8pSF_JIwa_-vVEWSHvO-Pj36RMcNYxZ1ExFPWw",
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
      "Gemini",
    ],
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
  {
    link: "www.google.com",

    imageSource:
      "https://media.licdn.com/dms/image/D5622AQGdJdCgFK2-oQ/feedshare-shrink_2048_1536/0/1710859206612?e=1714003200&v=beta&t=6ZMJF8pSF_JIwa_-vVEWSHvO-Pj36RMcNYxZ1ExFPWw",
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
];

const Project = () => {
  return (
    <div className="bg-[#5740B9] py-20 px-40 ">
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
  );
};
export default Project;
