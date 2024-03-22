import Button from "./Button";
interface HackathonTemplateProps {
  name: string;
  description: string;
  date: string;
  mode: string;
  project: string;
  location: string;
  image: string;
}
const HackathonTemplateRight: React.FC<HackathonTemplateProps> = (props) => {
  return (
    <div className="bg-[#705BC4] flex flex-col md:flex-row my-10 rounded-2xl p-4">
      <div className="md:w-1/2">
        <img
          className="w-[500px] h-[300px] rounded-2xl"
          src={props.image}
          alt=""
        />
      </div>
      <div className="md:w-1/2 flex flex-col">
        <span className="bg-white inline-block">{props.name}</span>
        <span>{props.description}</span>
        <h1>{props.date}</h1>
        <h1>{props.mode}</h1>
        <h1>{props.project}</h1>
        <h1>{props.location}</h1>
        <Button working={"View Details"} />
      </div>
    </div>
  );
};
export default HackathonTemplateRight;
