import jobs from "../database/jobs.json";
import knowledge from "../database/knowledge.json";
import { KnowledgeCard } from "../components/KnowledgeCard";
import { ProjectCard } from "../components/ProjectCard";
import { Light } from "../components/Light";

export default function Main() {
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
        <div className="relative h-80 w-full mt-40 md:mt-0 flex justify-center md:w-1/3">
          <div className="w-60 h-60 absolute top-[-3rem] md:w-[20rem] md:h-[20rem] rounded-xl rotate-45 animate-up-left gradient-border-rect bg-[#000319]"></div>
          <div className="w-60 h-60 absolute top-0 md:w-[20rem] md:h-[20rem] rounded-xl rotate-45 animate-up-right gradient-border-rect bg-[#000319]"></div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="Experience"
        className="flex flex-col md:flex-row md:justify-around py-10 px-4 md:px-20 relative"
      >
        <div className="flex flex-col items-center gap-5 md:w-1/3">
          <h2 className="text-4xl italic font-light text-[#9845E8] text-start w-full md:w-auto">
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
              <p className={`text-sm mt-2 md:hidden`}>
                {job.description.length > 200
                  ? job.description.slice(0, 100) + "..."
                  : job.description}
              </p>
              <p className={`text-sm mt-2 hidden md:block`}>
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
        <h2 className=" mb-10 text-4xl italic font-light text-[#9845E8]">
          Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-3 justify-items-center md:w-[80%] md:mx-auto">
          <ProjectCard
            title="Earth"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem harum id mollitia aperiam. Fugiat recusandae minus, suscipit similique consequuntur odit modi omnis, optio, harum id dolor. Quo cumque optio nam."
            img="project1.svg"
            styles="md:col-span-2"
          />
          <ProjectCard
            title="Earth"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.."
            img="project1.svg"
          />
          <ProjectCard
            title="Earth"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem harum id mollitia aperiam. Fugiat recusandae minus, suscipit similique consequuntur odit modi omnis, optio, harum id dolor. Quo cumque optio nam."
            img="project1.svg"
            styles="md:col-span-3"
          />
        </div>
      </section>

      {/* Knowledge Section */}
      <section id="knowledge" className="pb-10 px-4 md:px-20">
        <h2 className="mb-10 text-4xl italic font-light text-[#9845E8]">
          Knowledge
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:grid  md:grid-cols-3">
          {knowledge.map((knowledge) => (
            <KnowledgeCard
              title={knowledge.title}
              description={knowledge.description}
              key={knowledge.id}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="h-80 bg-[url('../../public/images/pattern.png')] bg-center flex flex-col justify-center items-center mt-auto">
        <h2 className="text-4xl w-full md:w-1/2 text-center">
          Get in contact to work with me
        </h2>
        <button className="rounded-xl bg-indigo-800 opacity-80 px-8 py-4 mt-4 hover:opacity-100 transition">
          Contact now
        </button>
      </footer>
    </div>
  );
}
