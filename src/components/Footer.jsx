import {
  FaEnvelope,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaArrowUp,
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
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-32">
      <div className="section py-16">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* Left */}

          <div>
            <h2 className="text-3xl font-black gold-text">
              LG LABALAN
            </h2>

            <p className="text-gray-400 mt-6 leading-8">
              Software Developer specializing in modern web,
              mobile, and AI-powered business solutions.

              I build software that helps businesses grow.
            </p>
          </div>

          {/* Navigation */}

          <div>
            <h3 className="text-xl font-bold mb-6">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-yellow-400 transition"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}

          <div>
            <h3 className="text-xl font-bold mb-6">
              Connect
            </h3>

            <div className="flex gap-5 text-2xl">

              {/* Email */}
              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="text-gray-400 hover:text-yellow-400 transition"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/lg.labalan"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/LGLabs1"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

            </div>

            <a
              href="#home"
              className="inline-flex items-center mt-10 text-yellow-400 hover:text-yellow-300 transition"
            >
              <FaArrowUp className="mr-2" />
              Back to Top
            </a>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} LG John Labalan.
            All rights reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Built with React • Tailwind CSS • Framer Motion
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;