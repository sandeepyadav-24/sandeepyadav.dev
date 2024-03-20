type prop = {
  techStack: string;
};
const Tag = (props: prop) => {
  return (
    <div className="bg-white mx-1 my-1 rounded-md px-2 ">{props.techStack}</div>
  );
};
export default Tag;
