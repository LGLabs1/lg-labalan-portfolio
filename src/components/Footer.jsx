function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/80 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500">
        <p>
          © {year} Your Name. All rights reserved.
        </p>
        <p>
          Built with <span className="text-brand-400">React</span> &amp;{' '}
          <span className="text-brand-400">Tailwind CSS</span>.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
