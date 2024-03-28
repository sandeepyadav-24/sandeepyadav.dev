interface ListTemplateProps {
  name: string;
  description: string;
  year: string;
  key: number;
}
const ListTemplate: React.FC<ListTemplateProps> = (props) => {
  return (
    <div className=" my-2" key={props.key}>
      <div className="flex flex-row justify-between">
        <div className="font-semibold">{props.name}</div>
        <div className="bg-white my-2 px-2 py-1 rounded-md">{props.year}</div>
      </div>

      <h1 className="text-[#646464] w-[300px]">{props.description}</h1>
    </div>
  );
};
export default ListTemplate;
