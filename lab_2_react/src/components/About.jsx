function About({ text }) {
  return (
    <section className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-600 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:border-l-blue-500 dark:bg-slate-900">
      <h2 className="mb-3 border-b-2 border-slate-100 pb-2 text-xl font-bold text-indigo-900 dark:border-slate-800 dark:text-blue-300">
        Про себе
      </h2>
      <p className="leading-relaxed text-slate-700 dark:text-slate-300">{text}</p>
    </section>
  );
}

export default About;
