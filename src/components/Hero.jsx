import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaDownload,
  FaCode,
  FaMobileAlt,
  FaBrain,
} from "react-icons/fa";

import profileImage from "../assets/images/bgme.png";

const stats = [
  {
    value: "4+",
    label: "Completed Projects",
  },
  {
    value: "3+",
    label: "Years Learning",
  },
  {
    value: "24/7",
    label: "Problem Solving",
  },
];

const badges = [
  "Flutter",
  "React",
  "Firebase",
  "AI",
  "UI/UX",
];

function Hero() {
  return (
    <section
      id="home"
      className="
      relative
      overflow-hidden
      min-h-[70vh]  
      lg:min-h-[74vh]
      flex
      items-center
    "
    >

      {/* Background Glow */}

      <>
        <div className="absolute -top-56 right-[-120px] h-[900px] w-[900px] rounded-full bg-yellow-400/15 blur-[220px]" />

        <div className="absolute bottom-[-200px] left-[-220px] h-[700px] w-[700px] rounded-full bg-yellow-400/8 blur-[220px]" />

        <div className="absolute top-[20%] left-[10%] h-[300px] w-[300px] rounded-full bg-yellow-400/5 blur-[150px]" />
      </>

      <div className="section">

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-center">

          {/* ==========================
              LEFT SIDE
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .8,
            }}
            className="pt-4 lg:pt-8"
          >

            {/* Status */}



            {/* Heading */}

            <h1 className="mt-4 text-[36px] md:text-[46px] xl:text-[58px] font-black leading-[1.05]">

              Building

              <br />

              <span className="gold-text">

                Smart Software

              </span>

              <br />

              For Modern Businesses.

            </h1>

            {/* Description */}

            <p className="mt-6 text-gray-400 text-base lg:text-lg leading-8 max-w-lg">

              Hi, I'm

              <span className="font-semibold text-white">

                {" "}LG John Labalan

              </span>

              , a Software Developer passionate about creating
              modern web and mobile applications that automate
              workflows, improve efficiency, and help businesses
              grow through technology.

            </p>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#featured"
                className="primary-btn"
              >

                View My Work

                <FaArrowRight className="ml-3" />

              </a>

              <a
                href="LG-John-Labalan-CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >

                <FaDownload className="mr-3" />

                Resume

              </a>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-4 mt-10">

              {stats.map((item) => (

                <motion.div
                  key={item.label}
                  whileHover={{
                    y: -6,
                  }}
                  className="card text-center py-6 px-4"
                >

                  <h3 className="text-2xl lg:text-3xl font-black gold-text">

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
              RIGHT SIDE
              CONTINUES IN PART 2
          ========================== */}
                    <motion.div
            initial={{
              opacity: 0,
              scale: .9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: .25,
              duration: .9,
            }}
            className="relative flex justify-center lg:justify-end -mt-8 lg:-mt-15"
          >

            {/* Main Glow */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-yellow-400/10 blur-[140px]"></div>

            {/* Decorative Ring */}

            <div className="absolute h-[460px] w-[460px] rounded-full border border-yellow-400/10"></div>

            <div className="absolute h-[360px] w-[360px] rounded-full border border-white/5"></div>

            {/* Profile Container */}

            <div className="relative">

              <div className="absolute -inset-5 rounded-[40px] bg-gradient-to-r from-yellow-400/25 via-transparent to-yellow-400/20 blur-2xl"></div>

              <motion.img
                whileHover={{
                  scale: 1.02,
                }}
                transition={{
                  duration: .35,
                }}
                src={profileImage}
                alt="LG John Labalan"
                className="relative z-20 w-[310px] md:w-[360px] xl:w-[420px] rounded-[36px] border border-yellow-400/20 shadow-[0_25px_80px_rgba(0,0,0,.45)]"
              />

              {/* =====================
                    Floating Tech
              ===================== */}

              {badges.map((badge, index) => (

                <motion.div
                  key={badge}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className={`absolute z-30

                  ${
                    index===0
                    ? "-left-8 top-6"

                    : index===1
                    ? "-right-8 top-12"

                    : index===2
                    ? "-left-10 bottom-20"

                    : index===3
                    ? "-right-10 bottom-20"

                    : "left-1/2 -bottom-8 -translate-x-1/2"
                  }
                  `}
                >

                  <div className="glass rounded-full px-5 py-3 shadow-xl">

                    <span className="font-semibold text-yellow-400">

                      {badge}

                    </span>

                  </div>

                </motion.div>

              ))}

              {/* =====================
                    Floating Icons
              ===================== */}

              <motion.div
                animate={{
                  y:[0,-12,0],
                }}
                transition={{
                  duration:4,
                  repeat:Infinity,
                }}
                className="hidden xl:flex absolute -left-20 top-1/3 h-16 w-16 items-center justify-center rounded-2xl glass"
              >

                <FaCode className="text-yellow-400 text-2xl"/>

              </motion.div>

              <motion.div
                animate={{
                  y:[0,12,0],
                }}
                transition={{
                  duration:5,
                  repeat:Infinity,
                }}
                className="hidden xl:flex absolute -right-20 top-[42%] h-16 w-16 items-center justify-center rounded-2xl glass"
              >

                <FaMobileAlt className="text-yellow-400 text-2xl"/>

              </motion.div>

              <motion.div
                animate={{
                  y:[0,-10,0],
                }}
                transition={{
                  duration:6,
                  repeat:Infinity,
                }}
                className="hidden xl:flex absolute left-1/2 -bottom-16 -translate-x-1/2 h-16 w-16 items-center justify-center rounded-2xl glass"
              >

                <FaBrain className="text-yellow-400 text-2xl"/>

              </motion.div>
              {/* Availability */}

              {/* Experience Card */}


            </div>

          </motion.div>
                  </div>


      </div>

      {/* =========================
          Premium Background
      ========================= */}

      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Huge Rings */}

        <div className="absolute right-[-140px] top-[-120px] h-[900px] w-[900px] rounded-full border border-yellow-400/10" />

        <div className="absolute right-[40px] top-[20px] h-[700px] w-[700px] rounded-full border border-yellow-400/10" />

        <div className="absolute right-[170px] top-[150px] h-[500px] w-[500px] rounded-full border border-yellow-400/10" />

        {/* Vertical Lines */}

        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />

        <div className="absolute right-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent" />

        {/* Floating Gold Particles */}

        {[...Array(120)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400"
            style={{
              width: Math.random() * 5 + 2,
              height: Math.random() * 5 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.25, 1, 0.25],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 6,
              repeat: Infinity,
            }}
          />
        ))}

      </div>

    </section>
  );
}

export default Hero;
          