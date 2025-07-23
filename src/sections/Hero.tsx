import { Button } from "@/components/ui/button";
import {
  
  IoChatbubbleEllipsesOutline,
} from "react-icons/io5";
export default function Hero() {
  return (
    <section className="h-[90vh] bg-gray-950 flex items-center" id="">
      <div className="text-center">
        <div className="w-full flex justify-center items-center mt-10 mb-5">
          <div className="text-white text-center py-1.5 px-4 font-mono text-sm bg-gray-900 rounded-full md:py-2 md:px-6 md:text-xl">
            Hello <span className="inline-block animate-wave">👋</span>, I'm
            Fedlallah Mohamed Yacine
          </div>
        </div>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight md:text-7xl text-white mt-1 md:mx-20">
          Experienced{" "}
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
            full-stack web developer
          </b>{" "}
          with a focus on{" "}
          <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
            back-end development
          </b>
          .
        </h1>
        <div className="flex justify-center items-center mt-5">
          <ul className="gap-3 flex justify-between items-center sm:gap-12 text-white dark:text-gray-800 w-[calc(100dvw-5rem)] sm:w-fit">
            <li className="flex flex-col sm:flex-row items-center gap-2">
              <span className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl">
                +4
              </span>
              <span className="text-[0.71rem] sm:text-[0.81rem] leading-[1] text-center sm:text-left">
                Years of
                <br />
                experience
              </span>
            </li>
            <span className="h-8 border-r-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary"></span>
            <li className="flex flex-col sm:flex-row items-center gap-2">
              <span
                className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl"
                id="code-lines"
              >
                +3000
              </span>
              <span className="text-[0.71rem] sm:text-[0.81rem] leading-[1] text-center sm:text-left">
                Comits made
                <br />
                On Github
              </span>
            </li>
            <span className="h-8 border-r-[1px] border-dashed border-light-gray-secondary dark:border-dark-gray-secondary"></span>
            <li className="flex flex-col sm:flex-row items-center gap-2">
              <span className="flex items-center font-bold bg-[#0001] dark:bg-[#fff1] py-1 px-3 rounded-xl">
                +100
              </span>
              <span className="text-[0.71rem] sm:text-[0.81rem] leading-[1] text-center sm:text-left">
                Late-Night
                <br />
                Coding Sessions
              </span>
            </li>
          </ul>
        </div>
        <div className="text-center w-full mt-7 md:mt-10 ">
          <Button onClick={() => window.location.href = '#contact'} className="px-5 bg-gray-900 text-white text-md rounded-full mx-3 font-mono md:scale-150 md:mx-14">
            <IoChatbubbleEllipsesOutline className="mr-1 h-4 w-4" />
            Contact
          </Button>
        </div>
      </div>
    </section>
  );
}
