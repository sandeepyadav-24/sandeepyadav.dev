import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between my-10">
      <div className="mx-20">Sandeep Yadav</div>
      <div className="mx-20 flex flex-row">
        <h1 className="mx-3">
          <Link href="/">Home</Link>
        </h1>
        <h1 className="mx-3">
          <Link href="/about">About</Link>
        </h1>
        <h1 className="mx-3">
          <Link href="projects">Projects</Link>
        </h1>
        <h1 className="mx-3">
          <Link href="blogs">Blogs</Link>
        </h1>
        <div className="mx-10">Contact Me</div>
      </div>
    </div>
  );
};
export default Navbar;
