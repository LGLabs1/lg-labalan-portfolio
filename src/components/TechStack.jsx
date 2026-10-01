import { motion } from "framer-motion";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiFlutter,
  SiFirebase,
  SiDart,
  SiFigma,
  SiGooglecloud,
} from "react-icons/si";

const stacks = [
  {
    title: "Frontend",
    description:
      "Modern responsive interfaces with smooth user experiences.",

    items: [
      {
        icon: <FaReact />,
        name: "React",
        level: 90,
      },
      {
        icon: <FaHtml5 />,
        name: "HTML5",
        level: 95,
      },
      {
        icon: <FaCss3Alt />,
        name: "CSS3",
        level: 90,
      },
      {
        icon: <FaJs />,
        name: "JavaScript",
        level: 88,
      },
    ],
  },

  {
    title: "Mobile",

    description:
      "Cross-platform mobile applications with Flutter.",

    items: [
      {
        icon: <SiFlutter />,
        name: "Flutter",
        level: 95,
      },
      {
        icon: <SiFirebase />,
        name: "Firebase",
        level: 90,
      },
      {
        icon: <SiDart />,
        name: "Dart",
        level: 94,
      },
    ],
  },

  {
    title: "Backend",

    description:
      "Cloud-powered backend services and databases.",

    items: [
      {
        icon: <FaNodeJs />,
        name: "Node.js",
        level: 82,
      },
      {
        icon: <SiFirebase />,
        name: "Firestore",
        level: 90,
      },
      {
        icon: <SiGooglecloud />,
        name: "Cloud Functions",
        level: 80,
      },
    ],
  },

  {
    title: "Programming Languages",

    description:
      "Languages I use across web, mobile, AI and software development.",

    items: [
      {
        icon: "🐍",
        name: "Python",
        level: 80,
      },
      {
        icon: "C",
        name: "C",
        level: 85,
      },
      {
        icon: "C#",
        name: "C#",
        level: 80,
      },
      {
        icon: <FaJs />,
        name: "JavaScript",
        level: 88,
      },
      {
        icon: <SiDart />,
        name: "Dart",
        level: 94,
      },
    ],
  },

  {
    title: "Tools",

    description:
      "Professional development workflow and collaboration.",

    items: [
      {
        icon: <FaGitAlt />,
        name: "Git",
        level: 90,
      },
      {
        icon: <FaGithub />,
        name: "GitHub",
        level: 90,
      },
      {
        icon: <SiFigma />,
        name: "Figma",
        level: 82,
      },
      {
        icon: <FaDocker />,
        name: "Docker",
        level: 75,
      },
    ],
  },


];

const learning = [
  "AI Agents",
  "Machine Learning",
  "TensorFlow",
  "Cloud Computing",
  "System Design",
  "Docker",
];
function TechStack() {
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

          Tech Stack

        </p>

        <h2 className="section-title mt-4">

          Technologies I Use
          <br />

          To Build Modern Software

        </h2>

        <p className="section-description mt-6">

          My preferred technologies for developing scalable
          web, mobile, and AI-powered business applications.

        </p>

      </motion.div>

      {/* Stack Cards */}

      <div className="grid lg:grid-cols-2 gap-8 mt-14">

        {stacks.map((stack, index) => (

          <motion.div
            key={stack.title}
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * .15,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -8,
            }}
            className="card p-7"
          >

            <h3 className="text-2xl font-bold gold-text">

              {stack.title}

            </h3>

            <p className="text-gray-400 mt-3 mb-8">

              {stack.description}

            </p>

            <div className="space-y-6">

              {stack.items.map((item) => (

                <div key={item.name}>

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="h-12 w-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-xl">

                        {item.icon}

                      </div>

                      <span className="font-medium">

                        {item.name}

                      </span>

                    </div>

                    <span className="text-sm text-yellow-400">

                      {item.level}%

                    </span>

                  </div>

                  {/* Progress Bar */}

                  <div className="mt-3 h-2 rounded-full bg-white/10 overflow-hidden">

                    <motion.div
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: `${item.level}%`,
                      }}
                      transition={{
                        duration: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="h-full rounded-full bg-yellow-400"
                    />

                  </div>

                </div>

              ))}

            </div>

          </motion.div>

        ))}

      </div>

      {/* Currently Learning */}

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
        className="card mt-14 p-8"
      >

        <p className="gold-text uppercase tracking-[0.3em] text-sm font-semibold">

          Currently Exploring

        </p>

        <h3 className="text-3xl font-bold mt-3">

          Always Learning New Technologies

        </h3>

        <p className="text-gray-400 mt-5 leading-8">

          Technology evolves rapidly, and I enjoy learning new
          tools that can help me build smarter, faster,
          and more scalable software.

        </p>

        <div className="flex flex-wrap gap-4 mt-8">

          {learning.map((skill) => (

            <motion.div
              key={skill}
              whileHover={{
                scale: 1.06,
              }}
              className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-3 text-yellow-400 font-medium"
            >

              {skill}

            </motion.div>

          ))}

        </div>

      </motion.div>
            {/* Professional Workflow */}

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
          delay: .15,
        }}
        viewport={{
          once: true,
        }}
        className="grid lg:grid-cols-3 gap-6 mt-12"
      >

        <div className="card p-7">

          <h4 className="text-xl font-bold">

            Design

          </h4>

          <p className="text-gray-400 mt-4 leading-7">

            Creating intuitive user experiences with modern UI/UX
            principles before writing code.

          </p>

        </div>

        <div className="card p-7">

          <h4 className="text-xl font-bold">

            Develop

          </h4>

          <p className="text-gray-400 mt-4 leading-7">

            Building scalable applications using React, Flutter,
            Firebase and cloud technologies.

          </p>

        </div>

        <div className="card p-7">

          <h4 className="text-xl font-bold">

            Optimize

          </h4>

          <p className="text-gray-400 mt-4 leading-7">

            Improving performance, maintainability and long-term
            scalability for every project.

          </p>

        </div>

      </motion.div>

    </section>
  );
}

export default TechStack;   