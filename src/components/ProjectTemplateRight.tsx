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
const ProjectTemplateRight: React.FC<ProjectTemplateProps> = (props) => {
  return (
    <div className="flex flex-col md:flex-row bg-[#705BC4]  mt-7 p-5 rounded-3xl">
      <div className="md:w-1/2  ">
        <img
          className="w-[500px] h-[300px] md:mx-5 rounded-2xl"
          src={props.imageSource}
        />
      </div>
      <div className="md:w-1/2 p-2 border-white border-[1px] rounded-lg ">
        <div className="flex flex-wrap my-1 mb-3">
          {props.techStack.map((e, index) => {
            return <Tag techStack={e} key={index} />;
          })}
        </div>
        <span className="bg-[#A2D974] font-bold mx-1 my-3 py-2 rounded-md px-5">
          {props.projectName}
        </span>
        <h1 className="bg-[#5640B8] border-[0.5px] border-white text-white rounded-md px-2 py-2 mt-3">
          {props.projectDescription}
        </h1>
        <div className="flex flex-row justify-between mt-2">
          <Button working={"Details"} link={props.link} />
          <span className="mr-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 text-white"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM6.262 6.072a8.25 8.25 0 1 0 10.562-.766 4.5 4.5 0 0 1-1.318 1.357L14.25 7.5l.165.33a.809.809 0 0 1-1.086 1.085l-.604-.302a1.125 1.125 0 0 0-1.298.21l-.132.131c-.439.44-.439 1.152 0 1.591l.296.296c.256.257.622.374.98.314l1.17-.195c.323-.054.654.036.905.245l1.33 1.108c.32.267.46.694.358 1.1a8.7 8.7 0 0 1-2.288 4.04l-.723.724a1.125 1.125 0 0 1-1.298.21l-.153-.076a1.125 1.125 0 0 1-.622-1.006v-1.089c0-.298-.119-.585-.33-.796l-1.347-1.347a1.125 1.125 0 0 1-.21-1.298L9.75 12l-1.64-1.64a6 6 0 0 1-1.676-3.257l-.172-1.03Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProjectTemplateRight;
