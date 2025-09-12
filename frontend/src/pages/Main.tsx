import jobs from "../database/jobs.json";
import knowledge from "../database/knowledge.json";
import projects from "../database/projects.json";
import { KnowledgeCard } from "../components/KnowledgeCard";
import { ProjectCard } from "../components/ProjectCard";
import { Light } from "../components/Light";
import { useInView } from "react-intersection-observer";

const sectionTitles = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "knowledge", label: "Knowledge" },
];

export default function Main() {
  // Array de hooks para cada título
  const inViews = sectionTitles.map(() => useInView({ threshold: 0 }));

  return (
    <div className="bg-[#000319] text-white font-inter relative min-h-screen flex flex-col overflow-clip">
      {/* Decorative background shape */}

      {/* Intro Section */}
      <section
        id="intro"
        className="flex flex-col md:flex-row justify-center items-center md:h-screen px-4 md:px-20 py-10"
      >
        <Light
          positionX="left-0"
          positionY="top-40"
          width="w-100"
          height="h-100"
          fromColor="from-indigo-500"
          toColor="to-purple-500"
          rotation="rotate-45"
        />
        <Light
          width="w-100"
          height="h-100"
          positionX="left-[60%]"
          positionY="top-0"
          fromColor="from-indigo-500"
          toColor="to-red-500"
          rotation="rotate-45"
        />
        <div className="flex flex-col justify-center text-center md:text-start md:w-1/2 gap-6">
          <h1 className="text-4xl md:text-7xl italic font-light bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789] bg-clip-text text-transparent">
            I'm Juan Aristizabal
          </h1>
          <p className="text-gray-400 md:text-xl">
            Full stack software developer and passionate{" "}
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            about programming
          </p>
        </div>
        <div className="relative h-80 w-full mt-40 md:mt-0 flex justify-center md:w-1/2 lg:w-1/3">
          <div className="w-40 h-40 absolute top-[-3rem] md:h-60 md:w-60 lg:w-[20rem] lg:h-[20rem] rounded-xl rotate-45 animate-up-left gradient-border-rect bg-[#000319]"></div>
          <div className="w-40 h-40 absolute top-0 md:h-60 md:w-60 lg:w-[20rem] lg:h-[20rem] rounded-xl rotate-45 animate-up-right gradient-border-rect bg-[#000319]"></div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="Experience"
        className="flex flex-col md:flex-row md:justify-around py-10 px-4 md:px-20 relative"
      >
        <div className="flex flex-col items-center gap-5 md:w-1/3 relative">
          <div
            className={`transition-all duration-1000 ${
              inViews[0][1]
                ? "absolute w-50 top-0 left-0 md:left-auto h-10 blur-2xl bg-purple-500"
                : "bg-transparent"
            }   `}
          ></div>

          <h2
            ref={inViews[0][0]}
            className="text-4xl italic font-light text-white text-start w-full md:w-auto"
          >
            Experience
          </h2>
          <img
            src="../../public/images/timeLine.svg"
            className="hidden md:block mt-4"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-8 md:w-2/3">
          {jobs.map((job) => (
            <article className="p-6" key={job.id}>
              <h3 className="text-2xl italic font-thin">{job.title}</h3>
              <div className="flex justify-between ">
                <p className="text-[#2396b6] ">{job.company}</p>
                <span className="text-[#2396b6]">{job.date}</span>
              </div>
              <p className={`text-sm mt-2`}>
                {job.description}
              </p>
              <div className="w-6 h-6 border-2 border-white border-t-0 border-r-0 -rotate-45 mx-auto mt-4 "></div>
            </article>
          ))}
        </div>
        <Light
          width="w-100"
          height="h-200"
          positionX="left-[60%]"
          positionY="top-0"
          fromColor="from-indigo-500"
          toColor="to-red-500"
          rotation="rotate-45"
        />
      </section>

      {/* Projects Section */}
      <section id="Projects" className="pb-10 px-4 md:px-20 relative">
        <Light
          width="w-100"
          height="h-500"
          positionX="left-[60%]"
          positionY="top-0"
          fromColor="from-indigo-500"
          toColor="to-red-500"
          rotation="rotate-45"
        />
        <div
          className={`transition-all duration-1000 absolute ${
            inViews[1][1]
              ? "w-40 top-0 h-10 blur-2xl bg-purple-500"
              : "bg-transparent"
          }   `}
        ></div>
        <h2
          ref={inViews[1][0]}
          className=" mb-10 text-4xl italic font-light text-white"
        >
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3 justify-items-center md:w-[80%] md:mx-auto">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              description={project.description}
              img={project.img}
              styles={project.colSpan}
              background={project.background}
              link={project.link}
            />
          ))}
        </div>
      </section>

      {/* Knowledge Section */}
      <section id="knowledge" className="pb-10 px-4 md:px-20 relative">
        <div
          className={`transition-all duration-1000 absolute ${
            inViews[2][1]
              ? " w-50 top-0 left-0 md:left-auto h-10 blur-2xl bg-purple-500"
              : "bg-transparent"
          }   `}
        ></div>
        <h2
          ref={inViews[2][0]}
          className="mb-10 text-4xl italic font-light text-white"
        >
          Knowledge
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:grid  md:grid-cols-3">
          {knowledge.map((knowledge) => (
            <KnowledgeCard
              title={knowledge.title}
              description={knowledge.description}
              key={knowledge.id}
              image={knowledge.img}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="h-80 bg-[url('../../public/images/pattern.png')] bg-center flex flex-col justify-center items-center mt-auto">
        <h2 className="text-4xl w-full md:w-1/2 text-center mb-10">
          Get in contact to work with me
        </h2>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/juan-aristizabal-637300254" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#0288D1"
                d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
              ></path>
              <path
                fill="#FFF"
                d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
              ></path>
            </svg>
          </a>
          <a href="mailto:juanarieda@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="50"
              height="50"
              viewBox="0 0 48 48"
            >
              <path
                fill="#4caf50"
                d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
              ></path>
              <path
                fill="#1e88e5"
                d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
              ></path>
              <polygon
                fill="#e53935"
                points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
              ></polygon>
              <path
                fill="#c62828"
                d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
              ></path>
              <path
                fill="#fbc02d"
                d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
              ></path>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
