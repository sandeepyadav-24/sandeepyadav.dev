import Button from "./Button";
import CustomMarque from "./CustomMarque";
interface HackathonTemplateProps {
  name: string;
  description: string;
  date: string;
  mode: string;
  project: string;
  location: string;
  image: string;
  key: number;
}
const HackathonTemplateRight: React.FC<HackathonTemplateProps> = (props) => {
  return (
    <div
      className="bg-[#705BC4] flex flex-col md:flex-row my-10 rounded-2xl p-4"
      key={props.key}
    >
      <div className="md:w-1/2">
        <img
          className="w-[500px] h-[300px] rounded-2xl"
          src={props.image}
          alt=""
        />
      </div>
      <div className="md:w-1/2 flex flex-col">
        <span className="bg-[#A2D974] font-bold mx-1 my-1 py-2 rounded-md px-5 text-white">
          {props.name}
        </span>
        <CustomMarque college={props.location} />
        <span className="text-white">{props.description}</span>
        <h1 className="text-white">{props.date}</h1>
        <h1 className="text-white">{props.mode}</h1>
        <h1 className="text-white">{props.project}</h1>

        <Button working={"View Details"} />
      </div>
    </div>
  );
};
export default HackathonTemplateRight;
