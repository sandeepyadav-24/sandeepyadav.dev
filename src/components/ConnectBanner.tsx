import Button from "./Button";
const ConnectBanner = () => {
  return (
    <div className="mx-40">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl py-10">
          Let's <span className="text-[#5640B6]">Connect</span> there
        </h1>
        <Button />
      </div>
      <hr />
      <div className="flex flex-row">
        <div className="w-1/2">
          <h1>Sandeep yadav</h1>
          <h1>
            I am full stack web developer with exerpertise in frontend and
            backend{" "}
          </h1>
          <div className="flex flex-row">
            <h1>Twitter</h1>
            <h1>LinkedIn</h1>
            <h1>Website</h1>
          </div>
        </div>
        <div className="w-1/2 flex flex-row">
          <div>
            <h1>Navigation</h1>
            <h1>Home</h1>
            <h1>About </h1>
            <h1>Hackathon</h1>
            <h1>Projects</h1>
            <h1>Blog</h1>
          </div>
          <div>
            <h1>Contact</h1>
            <h1>8076846925</h1>
            <h1>sandeepyadav.dev</h1>
            <h1>sandeepyadav004343@gmail.com</h1>
            <h1>ITS engineering College</h1>
          </div>
        </div>
      </div>
      <hr />
      <h1>Copyright @2024 Sandeep Yadav. All Right Reserved</h1>
    </div>
  );
};
export default ConnectBanner;
