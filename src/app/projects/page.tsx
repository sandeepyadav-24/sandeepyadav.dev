import { link } from "fs";
import ProjectTemplate from "../components/ProjectTemplate";
const project = [
  {
    link: "www.google.com",
    key: "1",
    imageSource:
      "https://media.licdn.com/dms/image/D5622AQGdJdCgFK2-oQ/feedshare-shrink_2048_1536/0/1710859206612?e=1714003200&v=beta&t=6ZMJF8pSF_JIwa_-vVEWSHvO-Pj36RMcNYxZ1ExFPWw",
    projectName: "Article.Ai",
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
  {
    link: "www.google.com",
    key: "2",
    imageSource:
      "https://media.licdn.com/dms/image/D5622AQGdJdCgFK2-oQ/feedshare-shrink_2048_1536/0/1710859206612?e=1714003200&v=beta&t=6ZMJF8pSF_JIwa_-vVEWSHvO-Pj36RMcNYxZ1ExFPWw",
    projectName: "Article.Ai",
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
  {
    link: "www.google.com",
    key: "3",
    imageSource:
      "https://media.licdn.com/dms/image/D5622AQGdJdCgFK2-oQ/feedshare-shrink_2048_1536/0/1710859206612?e=1714003200&v=beta&t=6ZMJF8pSF_JIwa_-vVEWSHvO-Pj36RMcNYxZ1ExFPWw",
    projectName: "Article.Ai",
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
  {
    link: "www.google.com",
    key: "4",
    imageSource:
      "https://media.licdn.com/dms/image/D5622AQGdJdCgFK2-oQ/feedshare-shrink_2048_1536/0/1710859206612?e=1714003200&v=beta&t=6ZMJF8pSF_JIwa_-vVEWSHvO-Pj36RMcNYxZ1ExFPWw",
    projectName: "Article.Ai",
    projectDescription:
      "Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task. Ai powered Website Which help to do all task.",
    projectLink: "www.google.com",
  },
];

const Project = () => {
  return (
    <div className="bg-[#5740B9] py-20 px-40 ">
      <h1 className="text-white text-center ">-Projects</h1>
      <h1 className="font-semibold text-white text-3xl text-center ">
        My <span className="text-[#A8DC79]">Latest Projects</span>
      </h1>
      {project.map((e) => {
        return (
          <ProjectTemplate
            link={e.link}
            imageSource={e.imageSource}
            projectName={e.projectName}
            projectDescription={e.projectDescription}
            projectLink={e.projectLink}
          />
        );
      })}
    </div>
  );
};
export default Project;