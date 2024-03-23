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
}
const HackathonTemplateLeft: React.FC<HackathonTemplateProps> = (props) => {
  return (
    <div className="bg-[#705BC4] flex flex-col md:flex-row my-10 rounded-2xl p-4 ">
      <div className="md:w-1/2 flex flex-col ">
        <span className="bg-[#A2D974] font-bold mx-1 my-1 py-2 rounded-md px-5">
          {props.name}
        </span>
        <CustomMarque college={props.location} />

        <div className="bg-[#5640B8] border-[0.5px] border-white text-white rounded-md px-2 py-2">
          {props.description}
        </div>

        <h1>{props.date}</h1>
        <h1>{props.mode}</h1>
        <h1>{props.project}</h1>
        <h1>{}</h1>
        <Button working={"View Details"} />
      </div>
      <div className="md:w-1/2">
        <img
          className="w-[500px] h-[300px] rounded-2xl"
          src={props.image}
          alt=""
        />
      </div>
    </div>
  );
};
export default HackathonTemplateLeft;
