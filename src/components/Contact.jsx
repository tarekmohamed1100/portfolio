import { useState } from "react";
import { DATA } from "../data/data";
import { usePrefs } from "../hooks/usePrefs";
import { hasEndpoint, openMailto, postMessage } from "../lib/sendMessage";
import Reveal from "./Reveal";

const EMPTY = { name: "", email: "", message: "", company: "" };

export default function Contact({ notify }) {
  const { t } = usePrefs();
  const [form, setForm] = useState(EMPTY);
  const [busy, setBusy] = useState(false);
  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(DATA.email);
      notify(t.copied);
    } catch {
      notify(DATA.email);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (busy || form.company) return; // `company` is a honeypot field real users never see
    const values = { name: form.name.trim(), email: form.email.trim(), message: form.message.trim() };

    // No endpoint configured: hand the message to the visitor's email app.
    if (!hasEndpoint) {
      notify(t.sending);
      openMailto(values);
      return;
    }

    setBusy(true);
    notify(t.posting);
    try {
      await postMessage(values);
      notify(t.sent);
      setForm(EMPTY);
    } catch {
      notify(t.failed);
      openMailto(values);
    } finally {
      setBusy(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 px-5 py-24">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="display text-4xl font-bold md:text-5xl">{t.contactTitle}</h2>
          <p className="muted mt-4 max-w-md text-lg leading-relaxed">{t.contactSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <button onClick={copyEmail} className="btn btn-outline">
              {t.copy}
            </button>
            <a href={DATA.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
            <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              LinkedIn
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="card space-y-5 p-7" aria-busy={busy}>
            <div>
              <label htmlFor="f-name" className="mb-2 block text-sm font-medium">
                {t.fName}
              </label>
              <input
                id="f-name"
                name="name"
                required
                maxLength={80}
                autoComplete="name"
                className="field"
                value={form.name}
                onChange={set("name")}
              />
            </div>
            <div>
              <label htmlFor="f-email" className="mb-2 block text-sm font-medium">
                {t.fEmail}
              </label>
              <input
                id="f-email"
                name="email"
                type="email"
                required
                maxLength={120}
                autoComplete="email"
                dir="ltr"
                className="field"
                value={form.email}
                onChange={set("email")}
              />
            </div>
            <div>
              <label htmlFor="f-msg" className="mb-2 block text-sm font-medium">
                {t.fMsg}
              </label>
              <textarea
                id="f-msg"
                name="message"
                rows="4"
                required
                maxLength={2000}
                className="field resize-none"
                value={form.message}
                onChange={set("message")}
              />
            </div>

            <div aria-hidden="true" className="sr-only">
              <input
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={form.company}
                onChange={set("company")}
              />
            </div>

            <button type="submit" disabled={busy} className="btn btn-solid w-full disabled:opacity-60">
              {busy ? t.posting : t.send}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
