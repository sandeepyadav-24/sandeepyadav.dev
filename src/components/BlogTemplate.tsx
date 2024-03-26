import Button from "./Button";
interface BlogTemplateProps {
  heading: string;
  link: string;
  date: string;
  img: string;
  key: number;
}

const BlogTemplate: React.FC<BlogTemplateProps> = (props) => {
  return (
    <div
      className="bg-[#705BC4] mx-10 my-10 rounded-2xl w-[350px] p-2"
      key={props.key}
    >
      <div className="my-2">
        <img className=" mx-auto mt-5 rounded-2xl" src={props.img} />
      </div>
      <div className="text-white border-white border-[1px] rounded-md p-2">
        <h1 className="bg-[#5640B8] text-white border-white border-[1px] my-2 rounded-md px-2 py-1">
          {props.heading}
        </h1>
        <div className="flex flex-row justify-between">
          <Button working={"Read"} link={props.link} />
          <h1 className="bg-[#5640B8] text-white border-white border-[1px] rounded-md px-2">
            {props.date}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default BlogTemplate;
