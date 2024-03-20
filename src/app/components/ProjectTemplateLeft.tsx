import Button from "./Button";
import Tag from "./Tag";
interface ProjectTemplateProps {
  imageSource: string;
  projectName: string;
  projectDescription: string;
  projectLink: string;
  link: string;
  techStack: string[];
}
const ProjectTemplateLeft: React.FC<ProjectTemplateProps> = (props) => {
  return (
    <div className="flex flex-row bg-[#705BC4]  mt-7 p-5 rounded-3xl">
      <div className="w-1/2 py-5 ">
        <div className="flex flex-wrap">
          {props.techStack.map((e, index) => {
            return <Tag techStack={e} />;
          })}
        </div>
        <h1 className="text-white">{props.projectName}</h1>
        <h1 className="text-white">{props.projectDescription}</h1>
        <div className="flex justify-end mx-5">
          <Button />
        </div>
      </div>
      <div className="w-1/2 ">
        <img
          className="w-[500px] h-[300px] rounded-2xl"
          src={props.imageSource}
        />
      </div>
    </div>
  );
};
export default ProjectTemplateLeft;
