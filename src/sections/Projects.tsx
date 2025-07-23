import Project from "@/components/ProjectCard";
import country from "@/assets/images/country.png";
import form from "@/assets/images/form.png";
import miw from "@/assets/images/miw.png";
import password from "@/assets/images/password.png";
import ps from "@/assets/images/ps.png";


export default function Projects() {
  return (
    <>
      <section className="pb-5 w-full bg-gray-950" id="projects">
        <header className="mx-6 pt-6 md:mx-10">
          <h1 className="text-white font-bold text-3xl md:text-5xl">
            Projects
            <b className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 to-blue-400">
              .
            </b>
          </h1>
          <div className="h-1 w-14 rounded-full bg-gradient-to-r from-sky-200 to-blue-400 md:w-20 md:h-2"></div>
        </header>
        <div className="mx-7 md:mx-10 flex justify-center items-center flex-col md:flex-row md:flex-wrap mt-12 md:justify-start ">
        <Project
            title="Problem Solving Platform"
            description="A platform for a scientific club where it's set for a competition"
            image={ps}
            link="https://speedsnippet.xyz"
            repo="https://github.com/fmyacine/problem-solving"
            langs={[
              "React",
              "Tailwindcss", 
              "Django", 
              "Docker", 
              "MySQL"
            ]}
          />
        <Project
            title="Conference Event Ticket Booking system" 
            description="A web application for a conference event for a scientific club that provide ticket booking system."
            image={miw}
            link="https://shortrl.libyzxy0.com"
            repo="https://github.com/fmyacine/problem-solving"
            langs={[
              "Html",
              "Css", 
              "JavaScript", 
              "Bootstrap",
              "Flask",
              'SQLite3',
              'Google Dev Tools'
            ]}
          />
        <Project
            title="Registeration Form"
            description="A Web application for registerations and filtering the candidates."
            image={form}
            link="https://nicetea.vercel.app"
            repo="https://github.com/fmyacine/CDECFORM"
            langs={[
              "Html",
              "Css", 
              "JavaScript", 
              "Bootstrap",
              "Flask",
              'SQLite3',
              'Google Dev Tools'
            ]}
          />
          <Project
            title="Countries-Wiki"
            description="A simple countries website power by an API."
            link="https://tikdown.click"
            repo="https://github.com/fmyacine/countries-app-api-based"
            image={country}
            langs={["Html",
              "Css", 
              "JavaScript", 
              "Bootstrap",
              "Flask"
            ]}
          />
          <Project
            title="Password Generator"
            description="A basic app to generate strong passwords"
            image={password}
            link="https://shoti-api.deno.dev"
            repo="https://github.com/fmyacine/CodeGenerator"
            langs={[
              "Html",
              "Css", 
              "JavaScript"
            ]}
          />
          
        </div>
      </section>
    </>
  );
}
