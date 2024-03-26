import Button from "@/components/Button";

const ProjectBanner = () => {
  return (
    <div className="bg-[#5640B7] flex flex-col md:flex-row px-5 py-20 md:p-40">
      <div className="md:w-1/2"></div>
      <div className="md:w-1/2">
        <h1 className="text-white">
          <span className="text-2xl text-[#A1D874]">~</span> Available For
          Projects
        </h1>
        <h1 className="text-4xl font-semibold text-white">
          Have a <span className="text-[#A1D874]">Project Idea</span> in Mind?
        </h1>
        <h1 className="text-white my-3">
          I am full stack web developer have expertise in makeing frontend and
          backend{" "}
        </h1>
        <Button working={"Details"} link={"https://www.google.com"} />
      </div>
    </div>
  );
};
export default ProjectBanner;
