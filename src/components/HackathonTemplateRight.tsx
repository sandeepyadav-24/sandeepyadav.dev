import Button from "./Button";
import CustomMarque from "./CustomMarque";
import AchievementTag from "./AchievementTag";
interface HackathonTemplateProps {
  name: string;
  description: string;
  date: string;
  mode: string;
  project: string;
  location: string;
  image: string;
  achievement: string;
  key: number;
}
const HackathonTemplateRight: React.FC<HackathonTemplateProps> = (props) => {
  return (
    <div
      className="bg-[#705BC4] flex flex-col md:flex-row my-10 rounded-2xl p-4"
      key={props.key}
    >
      <div className="md:w-1/2 ">
        <img
          className="w-[500px] md:mx-5 h-[340px] rounded-2xl "
          src={props.image}
          alt=""
        />
      </div>
      <div className="md:w-1/2 flex flex-col border-white border-[1px] rounded-lg p-2 ">
        <span className="bg-[#A2D974] font-bold  my-1 py-2 rounded-md px-5 text-black border-[1px] border-black">
          {props.name}
        </span>
        <CustomMarque college={props.location} />
        <div className="bg-[#5640B8] border-[0.5px] border-white text-white rounded-md px-2 py-2">
          {props.description}
        </div>

        <div className="flex flex-row justify-between bg-[#5640B8]  px-2 py-1 my-2 rounded-md border-[0.5px] border-white">
          <h1 className="text-white font-bold">{props.project}</h1>
          <h1 className="text-white">{props.date}</h1>
        </div>

        <div className="flex flex-row justify-between ">
          <Button working={"View Details"} />
          <AchievementTag name={props.achievement} />
        </div>
      </div>
    </div>
  );
};
export default HackathonTemplateRight;
