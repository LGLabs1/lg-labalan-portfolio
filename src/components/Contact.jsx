import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookMessenger,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

const contactMethods = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    subtitle: "Best for project inquiries",
    value: "lgjohnlabalan04@gmail.com",
    link: "mailto:lgjohnlabalan04@gmail.com",
  },
  {
    icon: <FaFacebookMessenger />,
    title: "Messenger",
    subtitle: "Quick conversations",
    value: "Message Me",
    link: "https://m.me/lg.labalan",
  },
  {
  icon: <FaPhone />,
  title: "Phone",
  subtitle: "Call or text me",
  value: "09569012219",
  link: "tel:+639569012219",
},
];

function Contact() {
  return (
    <section className="section">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
        viewport={{ once: true }}
      >

        <p className="gold-text uppercase tracking-[0.3em] text-sm font-semibold">

          Contact

        </p>

        <h2 className="section-title mt-4">

          Let's Build Something Amazing Together

        </h2>

        <p className="section-description">

          Whether you're a startup, restaurant, small business,
          or entrepreneur looking for custom software,
          I'd love to hear about your project.

        </p>

      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8 mt-20">

        {contactMethods.map((item) => (
                    <motion.a
            key={item.title}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            transition={{
              duration: 0.25,
            }}
            className="card p-8 flex flex-col"
          >
            <div className="h-16 w-16 rounded-2xl bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-2xl">

              {item.icon}

            </div>

            <h3 className="text-2xl font-bold mt-8">

              {item.title}

            </h3>

            <p className="text-gray-400 mt-2">

              {item.subtitle}

            </p>

            <span className="text-yellow-400 mt-6 font-semibold">

              {item.value}

            </span>

          </motion.a>

        ))}

      </div>

      {/* CTA Card */}

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
          duration: 0.8,
        }}
        viewport={{
          once: true,
        }}
        className="card mt-20 p-10 lg:p-14 relative overflow-hidden"
      >

        <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-yellow-400/10 blur-[120px]" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

          <div>

            <p className="gold-text uppercase tracking-[0.25em] text-sm font-semibold">

              Ready to Work Together?

            </p>

            <h3 className="text-4xl font-black mt-4">

              Let's Turn Your Idea Into Reality.

            </h3>

            <p className="text-gray-400 mt-6 max-w-2xl leading-8">

              I enjoy building software that solves real-world
              problems—from modern websites and mobile apps to complete
              management systems. If you have an idea, let's discuss how
              we can bring it to life.

            </p>

          </div>

          <div className="flex flex-col gap-4">

            <a
              href="mailto:your@email.com"
              className="primary-btn"
            >
              Start a Conversation

              <FaArrowRight className="ml-2" />

            </a>

            <a
              href="LG-John-Labalan-CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              <FaDownload className="mr-2" />

              Download Resume

            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}

export default Contact;