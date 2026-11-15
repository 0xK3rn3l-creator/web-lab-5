import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Reviews from "./components/Reviews";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { cv } from "./data";


function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const hours = new Date().getHours();
    setTheme(hours >= 7 && hours < 21 ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen bg-slate-100 py-6 px-4 transition-colors sm:py-10 dark:bg-slate-950">
        <div className="mx-auto max-w-4xl space-y-6">
          <Header
            name={cv.name}
            role={cv.role}
            contacts={cv.contacts}
            theme={theme}
            onToggleTheme={toggleTheme}
          />

          <main className="space-y-6">
            <About text={cv.about} />
            <Skills stack={cv.stack} competencies={cv.competencies} />
            <Education items={cv.education} />
            <Experience items={cv.experience} />
            <Reviews />
          </main>

          <Footer
            languages={cv.languages}
            qualities={cv.qualities}
            note={cv.footerNote}
            name={cv.name}
          />
        </div>
      </div>

      <ContactForm />
    </div>
  );
}

export default App;
