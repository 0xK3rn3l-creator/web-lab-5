function Header({ name, role, contacts, theme, onToggleTheme }) {
  return (
    <header className="rounded-2xl bg-gradient-to-br from-indigo-700 to-blue-600 p-8 text-white shadow-lg dark:from-slate-800 dark:to-slate-700">
      <div className="flex items-start justify-between gap-4">
        <h1 className="text-3xl font-bold tracking-wide sm:text-4xl">{name}</h1>
        <button
          type="button"
          onClick={onToggleTheme}
          className="shrink-0 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-sm transition-colors hover:bg-white/20"
        >
          {theme === "dark" ? "☀️ Денний режим" : "🌙 Нічний режим"}
        </button>
      </div>
      <p className="mt-2 text-base font-light text-blue-100 sm:text-lg">{role}</p>

      <nav aria-label="Контакти" className="mt-6">
        <ul className="flex flex-wrap gap-3">
          {contacts.map((c) => (
            <li
              key={c.label}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <span className="font-semibold text-blue-100">{c.label}: </span>
              {c.href ? (
                <a
                  href={c.href}
                  className="underline-offset-2 hover:underline focus:outline-2 focus:outline-amber-300"
                >
                  {c.value}
                </a>
              ) : (
                c.value
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
