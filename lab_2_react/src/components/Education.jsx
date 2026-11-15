function Education({ items }) {
  return (
    <section className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-600 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:border-l-blue-500 dark:bg-slate-900">
      <h2 className="mb-3 border-b-2 border-slate-100 pb-2 text-xl font-bold text-indigo-900 dark:border-slate-800 dark:text-blue-300">
        Освіта
      </h2>
      {items.map((edu) => (
        <article key={edu.place}>
          <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">{edu.place}</h3>
          <p className="mb-3 text-sm text-slate-500 dark:text-slate-400">{edu.period}</p>
          <ul className="space-y-2">
            {edu.details.map((d, i) => (
              <li key={i} className="flex gap-2 text-slate-700 dark:text-slate-300">
                <span className="mt-1 text-blue-600">▸</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}

export default Education;
