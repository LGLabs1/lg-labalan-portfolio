import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaLightbulb,
  FaAward,
  FaUserGraduate,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import profileImage from "../assets/images/bgme.png";

const highlights = [
  {
    icon: <FaLaptopCode />,
    title: "Software Development",
    description: "Modern web and mobile applications built for real businesses.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    description: "Creating simple digital solutions for complex workflows.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Continuous Learning",
    description: "Always exploring better technologies and better practices.",
  },
  {
    icon: <FaAward />,
    title: "Quality Focused",
    description: "Scalable, maintainable and user-centered software.",
  },
];

const skills = [
  "Flutter",
  "React",
  "Firebase",
  "AI Integration",
  "UI/UX Design",
  "Database Design",
];

function About() {
  return (
    <section className="section py-20">

      {/* Header */}

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: .7,
        }}
        viewport={{
          once: true,
        }}
        className="max-w-3xl"
      >

        <p className="gold-text uppercase tracking-[0.35em] text-sm font-semibold">

          About Me

        </p>

        <h2 className="section-title mt-4">

          Building Software That
          <br />

          Helps Businesses Grow

        </h2>

      </motion.div>

      <div className="grid lg:grid-cols-[420px_1fr] gap-16 items-center mt-14">

        {/* LEFT */}

        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .8,
          }}
          viewport={{
            once: true,
          }}
        >

          <div className="card p-6 sticky top-28">

            <div className="relative">

              <div className="absolute -inset-4 rounded-full bg-yellow-400/15 blur-3xl"></div>

              <img
                src={profileImage}
                alt="LG John Labalan"
                className="relative rounded-3xl border border-yellow-400/20"
              />

            </div>

            <h3 className="text-2xl font-bold mt-6">

              LG John Labalan

            </h3>

            <p className="text-yellow-400 mt-1">

              Software Developer

            </p>

            <p className="text-gray-400 mt-4 leading-7">

              BS Information Technology student passionate
              about creating software that improves business
              operations through modern technology.

            </p>

            <div className="flex flex-wrap gap-3 mt-6">

              {skills.map((skill) => (

                <span
                  key={skill}
                  className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-3 py-2 text-sm text-yellow-400"
                >

                  {skill}

                </span>

              ))}

            </div>

            <a
              href="#contact"
              className="primary-btn mt-8 w-full"
            >

              Let's Work Together

              <FaArrowRight className="ml-2"/>

            </a>

          </div>

        </motion.div>
                {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: .8,
          }}
          viewport={{
            once: true,
          }}
        >

          <h3 className="text-4xl font-black leading-tight">

            I Build Digital Products
            <br />

            <span className="gold-text">

              That Solve Real Problems.

            </span>

          </h3>

          <p className="text-gray-400 leading-8 mt-8">

            My passion is developing software that improves
            business efficiency through thoughtful design,
            modern technologies, and intuitive user experiences.
            Every project begins by understanding the user's
            challenges before writing a single line of code.

          </p>

          <p className="text-gray-400 leading-8 mt-6">

            From AI-powered restaurant systems to community
            donation platforms and IoT monitoring solutions,
            I enjoy building software that creates measurable
            value for organizations and the people who use it.

          </p>

          {/* Core Principles */}

          <div className="grid md:grid-cols-2 gap-5 mt-10">

            {[
              "Business-first development",
              "Modern UI/UX design",
              "Scalable architecture",
              "Clean & maintainable code",
              "Performance optimization",
              "Continuous improvement",
            ].map((item) => (

              <motion.div
                key={item}
                whileHover={{
                  x: 6,
                }}
                className="flex items-center gap-4 card p-5"
              >

                <div className="h-10 w-10 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center">

                  <FaCheckCircle className="text-yellow-400"/>

                </div>

                <span className="font-medium">

                  {item}

                </span>

              </motion.div>

            ))}

          </div>

          {/* Highlight Cards */}

          <div className="grid md:grid-cols-2 gap-6 mt-12">

            {highlights.map((item, index) => (

              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * .12,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -6,
                }}
                className="card p-6"
              >

                <div className="h-14 w-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-2xl">

                  {item.icon}

                </div>

                <h4 className="text-xl font-bold mt-5">

                  {item.title}

                </h4>

                <p className="text-gray-400 mt-3 leading-7">

                  {item.description}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

      </div>


    </section>
  );
}

export default About;