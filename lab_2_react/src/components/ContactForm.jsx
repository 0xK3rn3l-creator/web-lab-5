import { useState, useEffect } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqppyvjd";

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/65 p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl dark:bg-slate-900">
        <button
          type="button"
          aria-label="Закрити"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 h-8 w-8 rounded-lg text-xl leading-none text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          ×
        </button>

        <h2 className="text-xl font-bold text-indigo-900 dark:text-blue-300">
          Зворотний зв'язок
        </h2>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Залиште свої контакти — я відповім найближчим часом.
        </p>

        <form action={FORMSPREE_ENDPOINT} method="POST" className="mt-4 flex flex-col gap-3">
          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Ім'я
            <input
              type="text"
              name="name"
              required
              className="rounded-lg border border-slate-300 px-3 py-2 font-normal text-slate-800 focus:border-blue-600 focus:outline-2 focus:outline-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Email
            <input
              type="email"
              name="email"
              required
              className="rounded-lg border border-slate-300 px-3 py-2 font-normal text-slate-800 focus:border-blue-600 focus:outline-2 focus:outline-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Номер телефону
            <input
              type="tel"
              name="phone"
              required
              className="rounded-lg border border-slate-300 px-3 py-2 font-normal text-slate-800 focus:border-blue-600 focus:outline-2 focus:outline-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm font-semibold text-slate-700 dark:text-slate-300">
            Повідомлення
            <textarea
              name="message"
              rows="4"
              required
              className="resize-y rounded-lg border border-slate-300 px-3 py-2 font-normal text-slate-800 focus:border-blue-600 focus:outline-2 focus:outline-blue-600 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
            />
          </label>

          <button
            type="submit"
            className="mt-1 rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
