interface BlogTemplateProps {
  tag: string;
  heading: string;
  author: string;
  date: string;
  img: string;
  key: number;
}

const BlogTemplate: React.FC<BlogTemplateProps> = (props) => {
  return (
    <div
      className="bg-[#705BC4] mx-10 my-10 rounded-2xl w-[350px]"
      key={props.key}
    >
      <div className="mt-5">
        <img className="w-[300px] mx-auto mt-5 rounded-2xl" src={props.img} />
      </div>
      <div>
        <h1>{props.tag}</h1>
        <h1>{props.heading}</h1>
        <div className="flex flex-row">
          <h1>{props.author}</h1>
          <h1>{props.date}</h1>
        </div>
      </div>
    </div>
  );
};
export default BlogTemplate;
