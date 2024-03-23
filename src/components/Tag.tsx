type prop = {
  techStack: string;
  key: number;
};
const Tag = (props: prop) => {
  return (
    <div className="bg-white mx-1 my-1 rounded-md px-2 " key={props.key}>
      {props.techStack}
    </div>
  );
};
export default Tag;
