import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaBrain,
  FaPalette,
  FaChartLine,
  FaCloud,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Business Systems",
    description:
      "Custom management systems designed to automate workflows and improve business efficiency.",

    items: [
      "Management Systems",
      "POS Solutions",
      "Admin Dashboards",
    ],
  },

  {
    icon: <FaMobileAlt />,
    title: "Mobile Applications",
    description:
      "Cross-platform Flutter applications with beautiful interfaces and scalable architecture.",

    items: [
      "Android Apps",
      "Business Apps",
      "Firebase Integration",
    ],
  },

  {
    icon: <FaBrain />,
    title: "AI Solutions",
    description:
      "Integrating AI assistants and intelligent features that help businesses work smarter.",

    items: [
      "AI Assistants",
      "Forecasting",
      "Automation",
    ],
  },

  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    description:
      "Clean, modern interfaces focused on usability, responsiveness and customer experience.",

    items: [
      "Responsive Design",
      "Modern UI",
      "Wireframes",
    ],
  },

  {
    icon: <FaChartLine />,
    title: "Analytics",
    description:
      "Interactive dashboards that transform business data into meaningful insights.",

    items: [
      "Business Reports",
      "KPI Dashboards",
      "Data Visualization",
    ],
  },

  {
    icon: <FaCloud />,
    title: "Cloud Backend",
    description:
      "Secure Firebase-powered backend solutions with authentication, storage and cloud services.",

    items: [
      "Firestore",
      "Authentication",
      "Cloud Functions",
    ],
  },
];
function Services() {
  return (
    <section className="section">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >

        <p className="gold-text uppercase tracking-[0.3em] text-sm font-semibold">

          Services

        </p>

        <h2 className="section-title mt-3">

          What I Can Build For You

        </h2>

        <p className="section-description mx-auto">

          I develop modern software solutions that help businesses
          automate operations, improve productivity, and deliver
          exceptional customer experiences.

        </p>

      </motion.div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-14">

        {services.map((service, index) => (

          <motion.div
            key={service.title}
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
              delay: index * .08,
            }}
            viewport={{
              once: true,
            }}
            whileHover={{
              y: -8,
            }}
            className="card p-7 group relative overflow-hidden"
          >

            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative z-10 h-14 w-14 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-2xl text-yellow-400 mb-6">

              {service.icon}

            </div>

            <h3 className="relative z-10 text-xl font-bold">

              {service.title}

            </h3>

            <p className="relative z-10 text-gray-400 mt-4 leading-7 text-sm">

              {service.description}

            </p>

            <div className="relative z-10 mt-7 space-y-3">

              {service.items.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <FaCheckCircle className="text-yellow-400 text-xs flex-shrink-0" />

                  <span className="text-gray-300 text-sm">

                    {item}

                  </span>

                </div>

              ))}

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

                Let's Build Something Great

              </p>

              <h3 className="text-3xl font-bold mt-3">

                Have a Project in Mind?

              </h3>

              <p className="text-gray-400 mt-5 leading-8 max-w-2xl">

                Whether you're launching a startup, modernizing an
                existing business, or looking for a custom management
                system, I'd love to help turn your ideas into
                reliable software solutions.

              </p>

            </div>

            <a
              href="#contact"
              className="primary-btn whitespace-nowrap"
            >

              Start a Project

            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Services;