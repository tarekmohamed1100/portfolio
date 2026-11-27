import { useCallback, useEffect, useState } from "react";
import { PrefsProvider, usePrefs } from "./hooks/usePrefs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollEffects from "./components/ScrollEffects";
import Stack from "./components/Stack";
import Stats from "./components/Stats";
import Toast from "./components/Toast";
import Work from "./components/Work";

function Page() {
  const { t } = usePrefs();
  const [toast, setToast] = useState("");
  const notify = useCallback((message) => setToast(message), []);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(""), 3200);
    return () => clearTimeout(id);
  }, [toast]);

  return (
    <>
      <a href="#top" className="skip-link">
        {t.skip}
      </a>
      <ScrollEffects />
      <Header />
      <main id="top" tabIndex={-1} className="relative z-10 focus:outline-none">
        <Hero />
        <Stats />
        <Work />
        <About />
        <Stack />
        <Contact notify={notify} />
      </main>
      <Footer />
      <Toast message={toast} />
    </>
  );
}

export default function App() {
  return (
    <PrefsProvider>
      <Page />
    </PrefsProvider>
  );
}
