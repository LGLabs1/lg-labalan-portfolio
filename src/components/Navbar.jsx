import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Featured",
    href: "#featured",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Tech",
    href: "#tech",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

const [activeSection, setActiveSection] = useState("Home");

/* Navbar State */

const [minimal, setMinimal] = useState(false);

const [hoveringNavbar, setHoveringNavbar] =
  useState(false);

/* Scroll Progress */

const [scrollProgress, setScrollProgress] =
  useState(0);
  const expanded = !minimal || hoveringNavbar;

  useEffect(() => {

  const handleScroll = () => {

    const currentScroll = window.scrollY;

    /* ---------------------------- */
    /* Navbar Size                  */
    /* ---------------------------- */

    setMinimal(currentScroll > 180);

    /* ---------------------------- */
    /* Scroll Progress              */
    /* ---------------------------- */

    const documentHeight =
      document.documentElement.scrollHeight -
      window.innerHeight;

    setScrollProgress(
      (currentScroll / documentHeight) * 100
    );

    /* ---------------------------- */
    /* Active Section               */
    /* ---------------------------- */

    links.forEach((link) => {

      const section =
        document.querySelector(link.href);

      if (!section) return;

      const top =
        section.offsetTop -
        window.innerHeight * 0.40;

      const bottom =
        top +
        section.offsetHeight;

      if (
        currentScroll >= top &&
        currentScroll < bottom
      ) {

        setActiveSection(link.name);

      }

    });

  };

  window.addEventListener(
    "scroll",
    handleScroll
  );

  handleScroll();

  return () =>
    window.removeEventListener(
      "scroll",
      handleScroll
    );

}, []);

  return (

    <>

      {/* ========================= */}
      {/* Floating Glass Navbar */}
      {/* ========================= */}

      <motion.header

        initial={{
          opacity: 0,
          y: -80,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        transition={{
          duration: .6,
          ease: "easeOut",
        }}

        className="
          fixed
          top-5
          left-0
          w-full
          z-50
          flex
          justify-center
          px-5
        "

      >

        <motion.nav
          onMouseEnter={() => setHoveringNavbar(true)}
          onMouseLeave={() => setHoveringNavbar(false)}
          animate={{

            width: expanded ? "90%" : "82%",
            height: expanded ? 60 : 48,

          }}

          transition={{

              type:"spring",

              stiffness:150,

              damping:24,

              mass:.8,

          }}

          className="
            relative
            max-w-7xl
            overflow-hidden
            rounded-full

            border
            border-white/10

            bg-[rgba(9,9,11,.52)]

            backdrop-blur-[32px]

            shadow-[

            0_14px_40px_rgba(0,0,0,.30),

            0_24px_70px_rgba(0,0,0,.25)

            ]

            before:absolute
            before:inset-0
            before:rounded-full
            before:border
            before:border-white/5
            before:pointer-events-none
            "

        >
          {/* ===================================== */}
          {/* Ambient Glow */}
          {/* ===================================== */}

          <motion.div

            animate={{

              opacity: expanded
                ? 0.09
                : 0.04,

            }}

            transition={{
              duration: .4,
            }}

            className="
              absolute
              inset-0
              pointer-events-none

              bg-[radial-gradient(circle_at_center,rgba(250,204,21,.55),transparent_72%)]
            "

          />
          {/* ===================================== */}
          {/* Scroll Progress */}
          {/* ===================================== */}

          <motion.div

            style={{
              width: `${scrollProgress}%`,
            }}

            className="
              absolute
              bottom-0
              left-0

              h-[2px]

              bg-yellow-400

              shadow-[0_0_14px_rgba(250,204,21,.9)]
            "

          />
          <div

            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-500
              ${expanded ? "h-[60px] px-7" : "h-[48px] px-6"}
            `}

          >

            {/* ========================= */}
            {/* Logo */}
            {/* ========================= */}

            <a

              href="#home"

              className="
                select-none
                leading-none
                shrink-0
              "

            >

              <div>

                <motion.h1

                  layout

                  transition={{
                    duration:.35,
                  }}

                  className="
                    relative
                    text-xl
                    font-black
                    tracking-[0.35em]
                    text-white
                    shimmer-text
                  "

                >

                  LG

                </motion.h1>

                <AnimatePresence>

                  {expanded && (

                    <motion.h2

                      initial={{
                        opacity:0,
                        y:-6,
                      }}

                      animate={{
                        opacity:1,
                        y:0,
                      }}

                      exit={{
                        opacity:0,
                        y:-6,
                      }}

                      transition={{
                        duration:.25,
                      }}

                      className="
                        mt-1
                        text-[11px]
                        font-black
                        tracking-[0.45em]
                        text-yellow-400
                        shimmer-text-gold
                      "

                    >

                      LABS

                    </motion.h2>

                  )}

                </AnimatePresence>

              </div>

            </a>
            {/* ===================================== */}
            {/* Desktop Navigation */}
            {/* ===================================== */}


                <div
                  className="
                  hidden
                  lg:flex

                  absolute
                  inset-0

                  items-center
                  justify-center

                  pointer-events-none

                  z-10
                  "
                >

                  <motion.div
                    className="flex items-center justify-center pointer-events-auto"

                    animate={{
                      gap: expanded ? 34 : 22,
                    }}

                    transition={{
                      duration: 0.35,
                      ease: "easeInOut",
                    }}
                  >

                    {links.map((item) => (

                      <motion.a
                        key={item.name}
                        href={item.href}

                        layout

                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}

                        className={`
                          relative

                          flex
                          items-center
                          justify-center

                          w-[92px]

                          whitespace-nowrap

                          font-medium

                          transition-all
                          duration-300

                          hover:text-white
                          hover:-translate-y-[2px]

                          ${
                            expanded
                              ? "text-[15px] text-gray-300"
                              : "text-[13px] text-gray-400"
                          }
                        `}
                      >

                        {item.name}

                        <span
                          className="
                            absolute
                            left-1/2
                            -bottom-[2px]

                            h-[1px]
                            w-0

                            -translate-x-1/2

                            bg-yellow-400

                            transition-all
                            duration-300

                            group-hover:w-5
                          "
                        />

                        {activeSection === item.name && (

                          <motion.span

                            layoutId="desktop-indicator"

                            transition={{
                              type: "spring",
                              stiffness: 650,
                              damping: 40,
                            }}

                            className="
                              absolute
                              left-1/2
                              -bottom-[10px]

                              -translate-x-1/2

                              h-[7px]
                              w-[7px]

                              rounded-full

                              bg-yellow-400

                              shadow-[0_0_8px_rgba(250,204,21,.95),0_0_18px_rgba(250,204,21,.45)]
                            "
                          />

                        )}

                      </motion.a>

                    ))}

                  </motion.div>

                </div>


            {/* ===================================== */}
            {/* Right Side */}
            {/* ===================================== */}

            <motion.div
              animate={{
                opacity: expanded ? 1 : 0,
                scale: expanded ? 1 : 0.9,
                x: expanded ? 0 : 20,
                pointerEvents: expanded ? "auto" : "none",
              }}
              transition={{
                duration: 0.35,
                ease: "easeInOut",
              }}
              className="hidden lg:flex items-center gap-5"
            >
              <a
                href="https://github.com/LGLabs1"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  h-9
                  w-9
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-gray-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:rotate-6
                  hover:border-yellow-400/30
                  hover:bg-yellow-400/10
                  hover:text-yellow-400
                "
              >
                <FaGithub />
              </a>

              <a
                href="https://www.facebook.com/lg.labalan"
                target="_blank"
                rel="noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  h-9
                  w-9
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  text-gray-400
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:rotate-6
                  hover:border-yellow-400/30
                  hover:bg-yellow-400/10
                  hover:text-yellow-400
                "
              >
                <FaFacebook />
              </a>

              <a
                href="#contact"
                className="
                  primary-btn
                  text-sm
                  px-5
                  py-2.5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_24px_rgba(250,204,21,.35)]
                "
              >
                Hire Me
              </a>
            </motion.div>
             
            {/* ===================================== */}
            {/* Mobile Menu Button */}
            {/* ===================================== */}

            <button
              onClick={() => setMenuOpen(true)}
              className="
                lg:hidden
                text-2xl
                text-white
              "
            >

              <FaBars />

            </button>

          </div>

        </motion.nav>

      </motion.header>
      {/* ===================================== */}
      {/* Mobile Menu */}
      {/* ===================================== */}

      <AnimatePresence>

        {menuOpen && (

          <motion.div

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            className="
              fixed
              inset-0
              z-[100]
              bg-[#09090B]/95
              backdrop-blur-2xl
            "

          >

            <motion.div

              initial={{
                x: 300,
              }}

              animate={{
                x: 0,
              }}

              exit={{
                x: 300,
              }}

              transition={{
                duration: .35,
              }}

              className="
                absolute
                right-0
                top-0
                h-full
                w-[300px]
                border-l
                border-white/10
                bg-[#111]
                p-8
              "

            >

              <div className="flex justify-end">

                <button

                  onClick={() => setMenuOpen(false)}

                  className="text-3xl"

                >

                  <FaTimes />

                </button>

              </div>

              <div className="mt-20 flex flex-col gap-8">

                {links.map((item) => (

                  <a

                    key={item.name}

                    href={item.href}

                    onClick={() => setMenuOpen(false)}

                    className={`
                      text-xl
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        activeSection === item.name
                          ? "text-yellow-400"
                          : "text-white hover:text-yellow-400"
                      }
                    `}

                  >

                    {item.name}

                  </a>

                ))}

              </div>

              <div className="mt-16 flex gap-6 text-2xl">

                <a
                  href="https://github.com/LGLabs1"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.facebook.com/lg.labalan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  <FaFacebook />
                </a>

              </div>

              <a

                href="#contact"

                onClick={() => setMenuOpen(false)}

                className="primary-btn mt-12 w-full justify-center"

              >

                Hire Me

              </a>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>

  );

}

export default Navbar;