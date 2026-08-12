import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import BlurText from "./components/BlurText/BlurText";
import { listTools, listProyek, listExperience, listCertifications } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal";
import Aurora from "./components/Aurora/Aurora";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#577870", "#1F97A6", "#127B99"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* HERO */}
        <div
          id="home"
          className="hero grid md:grid-cols-2 items-center pt-12 xl:gap-0 gap-6 grid-cols-1 min-h-screen"
        >
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl font-bold mb-2 text-white">
                Likhith Gowda B R
              </h1>
              <h2 className="text-5xl sm:text-6xl font-bold text-cyan-400">
                Portfolio
              </h2>
            </div>
            <BlurText
              text="Information Science undergraduate building scalable, reliable software across full-stack web development, applied AI/ML, and cybersecurity fundamentals."
              delay={150}
              animateBy="words"
              direction="top"
              className="mb-8 text-gray-300 text-lg"
            />
            <div className="flex items-center flex-wrap sm:gap-4 gap-3">
              <a
                href="https://drive.google.com/file/d/1N__x3gnm6zM0x6lHM_5_SF2euAmhBbtw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold bg-transparent p-4 px-8 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2"
              >
              <span>⬇</span>
              Download Resume
              </a>
              <a
                href="#project"
                className="font-semibold bg-transparent p-4 px-8 rounded-full border border-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 flex items-center gap-2"
              >
                <span>💼</span>
                Explore My Projects
              </a>
            </div>
          </div>

          <div className="md:ml-auto animate__animated animate__fadeInUp animate__delay-4s">
            <ProfileCard
              name="Likhith Gowda"
              title=""
              handle="LikhithGowdaBR"
              status="Open to work"
              contactText="Contact Me"
              avatarUrl="assets/avatar-photo.png"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            />
          </div>
        </div>

        {/* ABOUT */}
        <div
          ref={aboutRef}
          className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-violet-500/40 shadow-[0_0_30px_rgba(168,85,247,0.4)] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6"
          id="about"
        >
          <div
            className="flex flex-col items-center justify-between gap-10 pt-0 px-4 md:px-8 py-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="flex-1 text-left w-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">About Me</h2>

              <BlurText
                text="I'm Likhith Gowda B R, an Information Science undergraduate at B.N.M Institute of Technology with hands-on experience across full-stack web development, applied AI/ML, and cybersecurity fundamentals. I enjoy building RESTful applications with Node.js, Express.js, and MongoDB, experimenting with Python-based AI tools, and diving into security operations. I'm looking for a Software Development role where I can help design and ship scalable, reliable software."
                delay={150}
                animateBy="words"
                direction="top"
                className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
              />

              <div className="flex flex-col sm:flex-row items-center sm:justify-between text-center sm:text-left gap-y-8 sm:gap-y-0 mb-4 w-full">
                <div>
                  <h1 className="text-3xl md:text-4xl mb-1">
                    8<span className="text-violet-500">+</span>
                  </h1>
                  <p>Projects Built</p>
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl mb-1">
                    9.35<span className="text-violet-500">/10</span>
                  </h1>
                  <p>CGPA</p>
                </div>
                <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                  <h1 className="text-3xl md:text-4xl mb-1">
                    10<span className="text-violet-500">+</span>
                  </h1>
                  <p>Certifications</p>
                </div>
              </div>

              <ShinyText
                text="Working with heart, building with logic."
                disabled={false}
                speed={3}
                className="text-sm md:text-base text-violet-400"
              />
            </div>
          </div>
        </div>

        {/* TOOLS */}
        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools &amp; Technologies
          </h1>
          <p
            className="w-full md:w-2/5 text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Languages, frameworks, and platforms I work with
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="flex items-center gap-4 p-4 border border-zinc-700 rounded-xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 group shadow-lg"
              >
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-16 h-16 object-contain bg-zinc-800 p-2 rounded-lg group-hover:bg-zinc-900 transition-all duration-300"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText text={tool.nama} disabled={false} speed={3} className="text-lg font-semibold block" />
                  </div>
                  <p className="text-sm text-zinc-400 truncate">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROJECTS */}
        <div
          className="proyek mt-32 py-10"
          id="project"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        ></div>
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Projects
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          A selection of projects across full-stack web development, machine learning, and applied AI.
        </p>
        <div className="proyek-box mt-14">
          <div style={{ height: "auto", position: "relative" }} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
            <ChromaGrid
              items={listProyek}
              onItemClick={handleProjectClick}
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>

        {/* EXPERIENCE */}
        <div className="mt-32" id="experience">
          <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Experience &amp; Training
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Internships and professional development programs
          </p>
          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {listExperience.map((exp, i) => (
              <div
                key={exp.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={200 * (i + 1)}
                data-aos-once="true"
                className="p-6 border border-zinc-700 rounded-2xl bg-zinc-900/60 backdrop-blur-md hover:bg-zinc-800/80 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm text-violet-400 whitespace-nowrap ml-2">{exp.period}</span>
                </div>
                <p className="text-zinc-400 mb-4">{exp.org}</p>
                <ul className="list-disc list-inside space-y-2 text-sm text-zinc-300">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            <span className="text-sm md:text-base px-6 py-3 rounded-full border border-violet-500/40 bg-zinc-900/60 text-zinc-300 text-center">
              🏅 {listCertifications[0]}
            </span>
          </div>
        </div>

        {/* CONTACT */}
        <div className="kontak mt-32 sm:p-10 p-0" id="contact">
          <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            Let's Connect
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Reach out for opportunities, collaborations, or just to say hi
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Contact links */}
            <div
              className="flex-1 bg-zinc-800 p-8 rounded-md flex flex-col justify-center gap-5"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
              data-aos-once="true"
            >
              <a href="mailto:likhithgowda08052005@gmail.com" className="flex items-center gap-3 hover:text-violet-400 transition-colors">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700">✉️</span>
                <span>likhithgowda08052005@gmail.com</span>
              </a>
              <a href="tel:+917899414689" className="flex items-center gap-3 hover:text-violet-400 transition-colors">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700">📱</span>
                <span>+91 7899414689</span>
              </a>
              <a
                href="https://github.com/LikhithGowdaBR"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-violet-400 transition-colors"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700">🐙</span>
                <span>github.com/LikhithGowdaBR</span>
              </a>
              <a
                href="https://www.linkedin.com/in/likhith-gowda-b-r-288060305"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-violet-400 transition-colors"
              >
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700">💼</span>
                <span>LinkedIn Profile</span>
              </a>
              <span className="flex items-center gap-3 text-zinc-400">
                <span className="w-10 h-10 flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700">📍</span>
                <span>Bengaluru, Karnataka, India</span>
              </span>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <form
                action="https://formspree.io/f/xwleowrg"
                method="POST"
                className="bg-zinc-800 p-10 w-full rounded-md"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input type="text" name="Name" placeholder="Input Name..." className="border border-zinc-500 p-2 rounded-md" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input type="email" name="Email" placeholder="Input Email..." className="border border-zinc-500 p-2 rounded-md" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">Message</label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="border border-zinc-500 p-2 rounded-md"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="font-semibold bg-[#1a1a1a] p-4 px-6 rounded-full w-full cursor-pointer border border-gray-700 hover:bg-[#222] transition-colors"
                    >
                      <ShinyText text="Send" disabled={false} speed={3} className="custom-class" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </>
  );
}

export default App;
