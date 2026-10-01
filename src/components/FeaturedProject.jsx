import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaGithub,
  FaCheckCircle,
  FaBrain,
  FaChartLine,
  FaBoxOpen,
  FaCashRegister,
  FaUsers,
  FaMobileAlt,
  FaRobot,
  FaChartPie,
} from "react-icons/fa";

import smartEatCover from "../assets/images/smarteat-cover.png";

const technologies = [
  "Flutter",
  "Firebase",
  "Firestore",
  "Provider",
  "Cloud Functions",
  "AI Integration",
];

const features = [
  {
    icon: <FaCashRegister />,
    title: "POS",
    description: "Fast restaurant transactions",
  },
  {
    icon: <FaBoxOpen />,
    title: "Inventory",
    description: "Real-time stock monitoring",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics",
    description: "Business insights",
  },
  {
    icon: <FaBrain />,
    title: "Forecasting",
    description: "Sales prediction",
  },
  {
    icon: <FaUsers />,
    title: "Payroll",
    description: "Employee management",
  },
  {
    icon: <FaRobot />,
    title: "AI Assistant",
    description: "Smart business recommendations",
  },
];

const stats = [
  {
    value: "6",
    label: "Business Modules",
  },
  {
    value: "AI",
    label: "Decision Support",
  },
  {
    value: "24/7",
    label: "Business Monitoring",
  },
];

function FeaturedProject() {
  return (
    <section className="section py-20">

      {/* Section Header */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .6 }}
        className="max-w-3xl"
      >

        <p className="gold-text uppercase tracking-[0.35em] text-sm font-semibold">

          Featured Project

        </p>

        <h2 className="section-title mt-4">

          SmartEat

        </h2>

        <p className="text-2xl text-white font-semibold mt-3">

          AI-Powered Restaurant Management Platform

        </p>

        <p className="section-description mt-6">

          SmartEat is an intelligent operations platform built for
          restaurants. It centralizes inventory,
          POS, analytics, forecasting and AI-powered
          business insights into one modern system.

        </p>

      </motion.div>

      <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-14 items-center mt-14">

        {/* ==========================
            LEFT
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .8,
          }}
          className="relative"
        >

          {/* Glow */}

          <div className="absolute -inset-10 rounded-full bg-yellow-400/10 blur-[100px]"></div>

          {/* Screenshot */}

          <div className="relative card p-5 overflow-hidden">

            <img
              src={smartEatCover}
              alt="SmartEat Dashboard"
              className="rounded-2xl w-full border border-white/10"
            />

            {/* Floating Label */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute top-10 left-10"
            >

              <div className="glass rounded-2xl px-5 py-3">

                <p className="text-xs uppercase tracking-widest text-gray-400">

                  Platform

                </p>

                <h4 className="font-bold text-yellow-400 mt-1">

                  SmartEat

                </h4>

              </div>

            </motion.div>

            {/* AI Card */}

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute bottom-10 right-10"
            >

              <div className="glass rounded-2xl px-5 py-4">

                <div className="flex items-center gap-3">

                  <div className="h-10 w-10 rounded-xl bg-yellow-400/15 flex items-center justify-center">

                    <FaBrain className="text-yellow-400" />

                  </div>

                  <div>

                    <p className="text-xs text-gray-400">

                      AI Powered

                    </p>

                    <h4 className="font-semibold">

                      Smart Insights

                    </h4>

                  </div>

                </div>

              </div>

            </motion.div>

          </div>

          {/* Bottom Stats */}

          <div className="grid grid-cols-3 gap-4 mt-6">

            {stats.map((item) => (

              <motion.div
                key={item.label}
                whileHover={{
                  y: -6,
                }}
                className="card p-5 text-center"
              >

                <h3 className="text-3xl font-black gold-text">

                  {item.value}

                </h3>

                <p className="text-sm text-gray-400 mt-2">

                  {item.label}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

                {/* ==========================
            RIGHT
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 60,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: .8,
          }}
        >

          <h3 className="text-3xl lg:text-4xl font-black leading-tight">

            Helping Restaurants
            <br />

            <span className="gold-text">

              Operate Smarter

            </span>

          </h3>

          <p className="mt-6 text-gray-400 leading-8">

            SmartEat transforms restaurant operations into one
            intelligent ecosystem. From inventory monitoring
            and POS transactions to AI-powered forecasting,
            payroll, and business analytics, everything is
            centralized in a single modern platform.

          </p>

          {/* Technology */}

          <div className="flex flex-wrap gap-3 mt-8">

            {technologies.map((tech) => (

              <span
                key={tech}
                className="rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-2 text-sm font-medium text-yellow-400 transition hover:bg-yellow-400/10"
              >

                {tech}

              </span>

            ))}

          </div>

          {/* Features */}

          <div className="grid grid-cols-2 gap-4 mt-10">

            {features.map((feature) => (

              <motion.div
                key={feature.title}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                transition={{
                  duration: .25,
                }}
                className="card p-5"
              >

                <div className="flex items-center gap-4">

                  <div className="h-12 w-12 rounded-xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-xl">

                    {feature.icon}

                  </div>

                  <div>

                    <h4 className="font-semibold">

                      {feature.title}

                    </h4>

                    <p className="text-sm text-gray-400">

                      {feature.description}

                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

          {/* Highlights */}

          <div className="card p-7 mt-10">

            <h4 className="text-xl font-bold mb-5">

              Project Highlights

            </h4>

            <div className="space-y-4">

              {[
                "AI-powered restaurant assistant with contextual business insights.",
                "Real-time inventory tracking and stock monitoring.",
                "Interactive analytics dashboard with forecasting.",
                "Scalable Firebase cloud architecture.",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-start gap-3"
                >

                  <FaCheckCircle className="text-yellow-400 mt-1 flex-shrink-0"/>

                  <span className="text-gray-300">

                    {item}

                  </span>

                </div>

              ))}

            </div>

          </div>

          {/* CTA */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#projects"
              className="primary-btn"
            >

              View Case Study

              <FaArrowRight className="ml-2"/>

            </a>

            <a
              href="https://github.com/LGLabs1"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >

              <FaGithub className="mr-2"/>

              GitHub

            </a>

          </div>

        </motion.div>

      </div>

    </section>

  );
}

export default FeaturedProject;