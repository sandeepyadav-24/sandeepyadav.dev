import Button from "./Button";
const ProjectTemplate = (props) => {
  return (
    <div className="flex flex-row bg-[#705BC4]  mt-7 p-5 rounded-3xl">
      <div className="w-1/2 ">
        <img
          className="w-[500px] h-[300px] rounded-2xl"
          src={props.imageSource}
        />
      </div>
      <div className="w-1/2 py-5 ">
        <span>Tags</span>
        <h1 className="text-white">{props.projectName}</h1>
        <h1 className="text-white">{props.projectDescription}</h1>
        <Button navigation={props.projectLink} />
      </div>
    </div>
  );
};
export default ProjectTemplate;
