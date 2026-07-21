const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Tailwind CSS',
  'Git',
];

function About() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Write a short paragraph about yourself here. Talk about your
          background, what you&apos;re studying or working on, and what kind of
          opportunities you&apos;re looking for.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Experience &amp; Education</h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            Use this space to summarize your key experience, education, or
            achievements. You can list your current role, degree, or notable
            projects.
          </p>
          <div className="mt-4 inline-flex flex-wrap gap-3 text-sm">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-800 px-4 py-2 font-medium text-slate-100 hover:bg-slate-700 hover:text-brand-400 transition-colors"
            >
              Download Resume (PDF)
            </a>
            <span className="text-xs text-slate-500">
              Replace <code>public/resume.pdf</code> with your own file.
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs font-medium text-slate-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
