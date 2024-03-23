interface ListTemplateProps {
  name: string;
  description: string;
  year: string;
  key: number;
}
const ListTemplate: React.FC<ListTemplateProps> = (props) => {
  return (
    <div className="flex flex-row justify-between my-2" key={props.key}>
      <div className="w-[300px]">
        <h1 className="font-semibold">{props.name}</h1>
        <h1 className="text-[#646464]">{props.description}</h1>
      </div>
      <div className="bg-white my-2">{props.year}</div>
    </div>
  );
};
export default ListTemplate;
