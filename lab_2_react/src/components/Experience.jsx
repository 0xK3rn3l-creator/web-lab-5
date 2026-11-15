function Experience({ items }) {
  return (
    <section className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-600 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:border-l-blue-500 dark:bg-slate-900">
      <h2 className="mb-3 border-b-2 border-slate-100 pb-2 text-xl font-bold text-indigo-900 dark:border-slate-800 dark:text-blue-300">
        Досвід, CTF та стажування
      </h2>
      <div className="space-y-5">
        {items.map((job) => (
          <article
            key={job.title}
            className="rounded-xl border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950"
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{job.title}</h3>
            <p className="mb-2 text-sm text-slate-500 dark:text-slate-400">{job.meta}</p>

            {job.points.length > 0 && (
              <ul className="space-y-2">
                {job.points.map((p, i) => (
                  <li key={i} className="flex gap-2 text-slate-700 dark:text-slate-300">
                    <span className="mt-1 text-blue-600">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            )}

            {job.links.length > 0 && (
              <p className="mt-3 flex flex-wrap gap-2">
                {job.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener"
                    className="rounded-md bg-indigo-600 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-indigo-800 focus:outline-2 focus:outline-amber-400"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
