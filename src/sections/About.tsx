import SlideAnimation from "@/components/slideInAnimation";

export default function About() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="about">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            About
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 md:ml-10 md:mr-40 mt-8">
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              I'm a 20-years-old full-stack web developer, mainly focusing on
              Backend work, and I've been doing this for over two years now.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              I'm a passionate full-stack developer with a strong focus on backend systems and automation.
              Over the past few years, I’ve built advanced backend projects ranging from booking platforms to data-driven APIs — always with performance, scalability, 
              and clean architecture in mind
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              I’m currently diving deeper into AI-powered development, integrating intelligent systems into real-world applications that solve practical problems. Whether it’s predictive modeling or natural language processing, I enjoy building tools that think and adapt.
            </p>
          </SlideAnimation>
          <SlideAnimation>
            <p className="text-gray-400 font-[400] text-md mt-3">
              Beyond code, I carry a strong sense of entrepreneurship. I love identifying problems, crafting digital solutions, and turning ideas into products. I'm not just here to build — I'm here to innovate.
            </p>
          </SlideAnimation>
        </div>
      </section>
    </>
  );
}
