import BlogTemplate from "./BlogTemplate";

const blog = [
  {
    blogHeading:
      "My Experience at the Smart India Hackathon: Tackling School Dropout Rates in Gujarat Villages",
    blogDate: "10 Nov 2023",
    blogLink:
      "https://sandeepyadav24.hashnode.dev/my-experience-at-the-smart-india-hackathon-tackling-school-dropout-rates-in-gujarat-villages",
    blogImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1711260775299/074d20c4-3118-4fe0-bf5e-371dbefe7b3f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    blogHeading:
      "Navigating the Open Hack Hackathon: A Fusion of Web Development and Machine",
    blogDate: "27 Feb 2024",
    blogLink: "www.google.com",
    blogImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1711266516952/e9504a8b-3262-44b3-8608-60fcda2d9e71.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    blogHeading: "Bridging Minds: My Jaypee Noida Hackathon Journey",
    blogDate: "7 Feb 2024",
    blogLink:
      "https://sandeepyadav24.hashnode.dev/bridging-minds-my-jaypee-noida-hackathon-journey",
    blogImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707296140930/199fcd68-f12e-4793-87c2-15f11c6a2924.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    blogHeading: "Cracking the Code: My Experience at the IIT Delhi Hackathon",
    blogDate: "5 Sept 2023",
    blogLink:
      "https://sandeepyadav24.hashnode.dev/cracking-the-code-my-experience-at-the-iit-delhi-hackathon",
    blogImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1707296742727/98494ab6-e388-4189-bdc2-594093fdfa6e.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    blogHeading:
      "My Experience at the Smart India Hackathon: Tackling School Dropout Rates in Gujarat Villages",
    blogDate: "10 Nov 2023",
    blogLink:
      "https://sandeepyadav24.hashnode.dev/my-experience-at-the-smart-india-hackathon-tackling-school-dropout-rates-in-gujarat-villages",
    blogImage:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1711260775299/074d20c4-3118-4fe0-bf5e-371dbefe7b3f.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
];
const BlogPost = () => {
  return (
    <div className="bg-[#5740B9]">
      <h1 className="text-white text-center ">
        <span className="text-[#A8DC79]">~</span>Blogs
      </h1>
      <h1 className="font-semibold text-white text-3xl text-center ">
        From My <span className="text-[#A8DC79]">Blog Post</span>
      </h1>
      <div className=" flex flex-col  md:flex-row md:flex-wrap ">
        {blog.map((e, index) => {
          return (
            <BlogTemplate
              heading={e.blogHeading}
              date={e.blogDate}
              img={e.blogImage}
              key={index}
              link={e.blogLink}
            />
          );
        })}
      </div>
    </div>
  );
};
export default BlogPost;
