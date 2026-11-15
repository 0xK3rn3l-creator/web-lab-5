import { useState, useEffect } from "react";

const VARIANT = 12;

function Reviews() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="rounded-2xl border border-slate-200 border-l-4 border-l-blue-600 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:border-l-blue-500 dark:bg-slate-900">
      <h2 className="mb-3 border-b-2 border-slate-100 pb-2 text-xl font-bold text-indigo-900 dark:border-slate-800 dark:text-blue-300">
        Відгуки попередніх роботодавців
      </h2>

      <ul className="space-y-4">
        {comments.map((c) => (
          <li
            key={c.id}
            className="rounded-xl border border-slate-200 border-l-4 border-l-blue-600 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-950"
          >
            <h3 className="font-semibold capitalize text-indigo-900 dark:text-blue-300">
              {c.name}
            </h3>
            <p className="mb-2 text-xs text-slate-500 dark:text-slate-400">{c.email}</p>
            <p className="text-sm text-slate-700 dark:text-slate-300">{c.body}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Reviews;
