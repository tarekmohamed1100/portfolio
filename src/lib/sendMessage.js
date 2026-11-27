import { DATA } from "../data/data";

const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT || "";

export const hasEndpoint = Boolean(ENDPOINT);

/** Opens the visitor's email app with the message pre-filled. */
export function openMailto({ name, email, message }) {
  const subject = encodeURIComponent(`${name} | Portfolio`);
  const body = encodeURIComponent(`${message}\n\n${email}`);
  window.location.href = `mailto:${DATA.email}?subject=${subject}&body=${body}`;
}

/** Sends the message to a Formspree-style endpoint. Throws on failure. */
export async function postMessage({ name, email, message }) {
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name, email, message, _subject: `${name} | Portfolio` }),
  });
  if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
}
