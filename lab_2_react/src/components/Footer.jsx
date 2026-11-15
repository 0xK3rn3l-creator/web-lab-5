import { useState, useEffect } from "react";

function Footer({ languages, qualities, note, name }) {
  const [sysInfo, setSysInfo] = useState(null);

  useEffect(() => {
    const info = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      language: navigator.language,
      screen: `${window.screen.width}×${window.screen.height}`,
    };
    localStorage.setItem("systemInfo", JSON.stringify(info));
    setSysInfo(JSON.parse(localStorage.getItem("systemInfo")));
  }, []);

  const rows = sysInfo
    ? [
        ["Браузер", sysInfo.userAgent],
        ["Платформа / ОС", sysInfo.platform],
        ["Мова системи", sysInfo.language],
        ["Роздільна здатність", sysInfo.screen],
      ]
    : [];

  return (
    <footer className="rounded-2xl bg-slate-900 p-8 text-slate-200 shadow-lg dark:bg-slate-950">
      <div className="grid gap-6 sm:grid-cols-2">
        <section>
          <h2 className="mb-3 border-b-2 border-white/10 pb-2 text-lg font-bold text-white">
            Мови
          </h2>
          <ul className="space-y-1.5 text-slate-300">
            {languages.map((lang) => (
              <li key={lang}>{lang}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="mb-3 border-b-2 border-white/10 pb-2 text-lg font-bold text-white">
            Особисті якості
          </h2>
          <ul className="flex flex-wrap gap-2">
            {qualities.map((q) => (
              <li
                key={q}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm transition-colors hover:bg-white/15"
              >
                {q}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <h2 className="mt-6 mb-3 border-b-2 border-white/10 pb-2 text-lg font-bold text-white">
        Додаткова інформація
      </h2>
      <p className="leading-relaxed text-slate-300">{note}</p>

      <h2 className="mt-6 mb-3 border-b-2 border-white/10 pb-2 text-lg font-bold text-white">
        Системна інформація
      </h2>
      <ul className="grid gap-1.5 text-sm text-slate-300">
        {rows.map(([label, value]) => (
          <li key={label} className="break-words">
            <span className="font-semibold text-slate-400">{label}:</span> {value}
          </li>
        ))}
      </ul>

      <p className="mt-4 text-sm text-slate-500">
        <small>© 2026 {name}</small>
      </p>
    </footer>
  );
}

export default Footer;
