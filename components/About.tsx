import { profileImg } from "@/public/assets";
import Image from "next/image";
import SectionTitle from "./SectionTitle";
import { AiFillThunderbolt } from "react-icons/ai";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle title="About Me" titleNo="01" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4">
          <p>
            Hi there, I'm Mevani Chamodya Jayasinghe, <span className="text-textGreen">
            currently pursuing my BSc (Hons) in IT at the University of Jayewardanepura.
            </span> With a keen interest in mobile and web development, I'm dedicated to crafting intuitive digital solutions. <span className="text-textGreen">
            Passionate about UI/UX design,
            </span> I enjoy exploring the creative aspects of user interface development. 
            Alongside my tech pursuits, I find joy in traveling through natural environments, immersing myself in the serenity of nature. 
            and also I like exploring inspiration in the realm of bio science and geogrphical things love delving into its intricacies.!
          </p>
          {/* <p>
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up,{" "}
            <span className="text-textGreen">
              a huge corporation, and a student-led design studio.
            </span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio rem
            accusantium fugiat veritatis, quidem repellat{" "}
            <span className="text-textGreen">
              ab natus possimus? Sint, accusamus!
            </span>
  </p> */}
          {/* <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem
            ullam eligendi dolorum nostrum possimus quos iusto magnam ut esse
            recusandae.
          </p> */}
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              JavaScript (ES6+)
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              React
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              TypeScript
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              Express.js
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              MongoDB
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
              CSS
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
             HTML
            </li>
            <li className="flex items-center gap-2">
              <span className="text-textGreen">
                <AiFillThunderbolt />
              </span>
             React-Native
            </li>
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg ">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300"></div>
            </div>
          </div>
          <div className="hidden lgl:inline-flex w-full h-80 border-2 border-textGreen rounded-md group-hover:-translate-x-2 group-hover:-translate-y-2 transition-transform duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
