type prop = {
  name: string;
};
const AchievementTag = (props: prop) => {
  return (
    <div className="border-[1px] bg-[#5640B7] border-white py-1 my-1 px-3 rounded-lg text-white">
      <h1>{props.name}</h1>
    </div>
  );
};
export default AchievementTag;
