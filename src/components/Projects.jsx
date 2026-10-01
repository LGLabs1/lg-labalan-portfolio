import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaMobileAlt,
  FaHeartbeat,
  FaGlobe,
  FaClock,
} from "react-icons/fa";

const projects = [
  {
    title: "Handog Bayan",

    subtitle: "Community Donation Platform",

    status: "Completed",

    description:
      "A Flutter and Firebase platform that connects donors with people in need through verified donation requests, providing a transparent and organized donation process.",

    technologies: [
      "Flutter",
      "Firebase",
      "Firestore",
      "Provider",
    ],

    icon: <FaHeartbeat />,

    demo: "handog-bayan.html",

    github: "https://github.com/LGLabs1",
  },

  {
    title: "Arduino Disaster Monitoring",

    subtitle: "IoT Monitoring System",

    status: "Completed",

    description:
      "An IoT-based monitoring system capable of detecting flood and fire hazards while sending real-time alerts for faster emergency response.",

    technologies: [
      "Arduino",
      "ESP32",
      "MQTT",
      "C++",
    ],

    icon: <FaMobileAlt />,

    demo: "arduino-disaster-monitoring-system.html",

    github: "https://github.com/LGLabs1",
  },

  {
    title: "Personal Portfolio",

    subtitle: "React Portfolio",

    status: "In Progress",

    description:
      "A premium developer portfolio built with React, Tailwind CSS and Framer Motion showcasing projects, services and software engineering expertise.",

    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],

    icon: <FaGlobe />,

    demo: "#home",

    github: "https://github.com/LGLabs1",
  },
];

function Projects() {
  return (
    <section className="section">

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .8,
        }}
        viewport={{
          once: true,
        }}
        className="text-center max-w-3xl mx-auto"
      >

        <p className="gold-text uppercase tracking-[0.3em] text-sm font-semibold">

          Portfolio

        </p>

        <h2 className="section-title mt-3">

          Other Featured Projects

        </h2>

        <p className="section-description mx-auto">

          Beyond SmartEat, these projects demonstrate my experience
          building mobile applications, IoT systems, and modern
          business software.

        </p>

      </motion.div>

      <div className="grid lg:grid-cols-3 gap-7 mt-14">

        {projects.map((project, index) => (

          <motion.div
            key={project.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .6,
              delay: index * .1,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -10,
            }}
            className="card overflow-hidden flex flex-col"
          >

            {/* Header */}

            <div className="relative h-44 flex items-center justify-center border-b border-white/10 bg-gradient-to-br from-yellow-400/10 via-[#111] to-[#09090B]">

              <div className="absolute top-5 right-5">

                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                  project.status === "Completed"
                    ? "border-green-500/30 text-green-400 bg-green-500/10"
                    : "border-yellow-400/30 text-yellow-400 bg-yellow-400/10"
                }`}>

                  {project.status}

                </span>

              </div>

              <div className="text-6xl text-yellow-400">

                {project.icon}

              </div>

            </div>

            {/* Body */}

            <div className="p-7 flex flex-col flex-1">

              <p className="gold-text uppercase tracking-[0.2em] text-xs font-semibold">

                {project.subtitle}

              </p>

              <h3 className="text-2xl font-bold mt-2">

                {project.title}

              </h3>

              <p className="text-gray-400 leading-7 text-sm mt-5 flex-1">

                {project.description}

              </p>

              <div className="flex flex-wrap gap-2 mt-6">

                {project.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs"
                  >

                    {tech}

                  </span>

                ))}

              </div>

              <div className="flex gap-3 mt-7">

                <a
                  href={project.demo}
                  className="primary-btn flex-1 justify-center text-sm"
                >

                  View

                  <FaArrowRight className="ml-2" />

                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-btn px-5"
                >

                  <FaGithub />

                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>
            {/* Bottom CTA */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .8,
        }}
        viewport={{
          once: true,
        }}
        className="mt-14"
      >

        <div className="card p-8 lg:p-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <div>

              <p className="gold-text uppercase tracking-[0.3em] text-sm font-semibold">

                Let's Work Together

              </p>

              <h3 className="text-3xl font-bold mt-3">

                Have an Idea You Want to Build?

              </h3>

              <p className="text-gray-400 mt-5 leading-8 max-w-2xl">

                Whether you need a business management system,
                mobile application, website, or AI-powered solution,
                I'm ready to help turn your vision into a polished,
                scalable product.

              </p>

            </div>

            <a
              href="#contact"
              className="primary-btn whitespace-nowrap"
            >

              Start Your Project

              <FaArrowRight className="ml-2" />

            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Projects;