import { projects } from '../data/projects.js';

function Projects() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A selection of projects that highlight my skills and interests.
          Replace these cards with your real work, GitHub repos, or case
          studies.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-5 shadow-sm hover:border-brand-500/80 hover:shadow-md transition-colors"
          >
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-slate-50">
                {project.title}
              </h3>
              <p className="text-sm text-slate-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-xs">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            {project.link && project.link !== '#' && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-medium text-brand-400 hover:text-brand-300"
              >
                View project ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
