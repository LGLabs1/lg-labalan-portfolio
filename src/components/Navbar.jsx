const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
      <nav className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          <span className="text-brand-500">&lt;/&gt;</span> My Portfolio
        </a>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
