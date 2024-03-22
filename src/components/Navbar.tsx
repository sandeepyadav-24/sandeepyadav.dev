import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between md:py-10 bg-[#5640B8] text-white">
      <div className="mx-2 md:mx-20">Sandeep Yadav</div>
      <div className="mx-2 md:mx-20 flex flex-row">
        <h1 className=" mx-1 md:mx-3">
          <Link href="/about">About</Link>
        </h1>
        <h1 className="mx-1 md:mx-3">
          <Link href="hackathons">Hackathons</Link>
        </h1>
        <h1 className=" mx-1 md:mx-3">
          <Link href="projects">Projects</Link>
        </h1>
        <h1 className="mx-1 md:mx-3">
          <Link href="blogs">Blogs</Link>
        </h1>
        <div className="mx-1 md:mx-10 bg-[#705BC4] rounded-xl text-white px-4 py-2">
          Contact Me
        </div>
      </div>
    </div>
  );
};
export default Navbar;
