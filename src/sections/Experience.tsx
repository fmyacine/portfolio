import TimelineItem from "@/components/TimelineItem";
export default function Experience() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="experience">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Experience
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-6 pt-8 md:mx-10">
          <TimelineItem title="Djezzy Internship">
          AI-focused backend intern at Djezzy, where I built data pipelines and integrated machine learning models to predict client behavior from real telecom data.
          </TimelineItem>
          <TimelineItem title="Freelancing">
            One year freelancing as a web developer, navigating projects, Providing IT consultations and
            relishing the freedom of self-employment.
          </TimelineItem>
        </div>
      </section>
    </>
  );
}
