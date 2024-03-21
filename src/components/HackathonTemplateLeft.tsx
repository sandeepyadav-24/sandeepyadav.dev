import Button from "./Button";
interface HackathonTemplateProps {
  name: string;
  description: string;
  date: string;
  mode: string;
  project: string;
  location: string;
}
const HackathonTemplateLeft: React.FC<HackathonTemplateProps> = (props) => {
  return (
    <div className="bg-[#705BC4] flex flex-row my-10 rounded-2xl p-4 ">
      <div className="w-1/2">
        <h1>{props.name}</h1>
        <h1>{props.description}</h1>
        <h1>{props.date}</h1>
        <h1>{props.mode}</h1>
        <h1>{props.project}</h1>
        <h1>{props.location}</h1>
        <Button />
      </div>
      <div className="w-1/2">
        <img
          className="w-[500px] h-[300px] rounded-2xl"
          src="https://media.licdn.com/dms/image/D5622AQH-t277yj3drw/feedshare-shrink_800/0/1710859208035?e=1714003200&v=beta&t=ZO5iiiM40lcqVtnIQPRkJRN3yz-pQzl0X5aFBCo5uUc"
          alt=""
        />
      </div>
    </div>
  );
};
export default HackathonTemplateLeft;
