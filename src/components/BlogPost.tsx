import BlogTemplate from "./BlogTemplate";

const blog = [
  {
    blogTag: "Jaypee Noida",
    blogHeading: "Bridging Minds: My Jaypee Noida Hackathon Journey",
    blogAuthor: "Sandeep Yadav",
    blogDate: "5 Sept 2023",
    blogImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707296140930/199fcd68-f12e-4793-87c2-15f11c6a2924.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    blogTag: "IIT Delhi",
    blogHeading: "Cracking the Code: My Experience at the IIT Delhi Hackathon",
    blogAuthor: "Sandeep Yadav",
    blogDate: "5 Sept 2023",
    blogImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707296742727/98494ab6-e388-4189-bdc2-594093fdfa6e.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
];
const BlogPost = () => {
  return (
    <div className="bg-[#5740B9]">
      <h1>Blogs</h1>
      <h1>From My Blog Post</h1>
      <div className=" flex flex-col md:flex-row ">
        {blog.map((e, index) => {
          return (
            <BlogTemplate
              tag={e.blogTag}
              heading={e.blogHeading}
              author={e.blogAuthor}
              date={e.blogDate}
              img={e.blogImage}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BlogPost;
