function Skills({ stack, competencies }) {
  return (
    <section className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-600 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:border-l-blue-500 dark:bg-slate-900">
      <h2 className="mb-3 border-b-2 border-slate-100 pb-2 text-xl font-bold text-indigo-900 dark:border-slate-800 dark:text-blue-300">
        Технічний стек
      </h2>
      <ul className="flex flex-wrap gap-2">
        {stack.map((item) => (
          <li
            key={item}
            className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-indigo-800 transition-colors hover:scale-105 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300"
          >
            {item}
          </li>
        ))}
      </ul>

      <h3 className="mt-6 mb-3 text-lg font-semibold text-slate-800 dark:text-slate-200">
        Ключові компетенції
      </h3>
      <ul className="space-y-2">
        {competencies.map((c) => (
          <li key={c.title} className="flex gap-2 text-slate-700 dark:text-slate-300">
            <span className="mt-1 text-blue-600">▸</span>
            <span>
              <strong className="text-slate-900 dark:text-slate-100">{c.title}:</strong> {c.text}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
