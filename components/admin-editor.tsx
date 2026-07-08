"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { SiteContent, LinkItem, HighlightItem } from "@/lib/types";

const ICON_OPTIONS = [
  "instagram",
  "discord",
  "email",
  "website",
  "linkedin",
  "twitter",
  "x",
  "tiktok",
  "spotify",
  "youtube",
  "facebook",
  "whatsapp",
  "github",
  "telegram",
  "link",
];

function newId() {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);
}

export default function AdminEditor({
  initialContent,
}: {
  initialContent: SiteContent;
}) {
  const router = useRouter();
  const [content, setContent] = useState<SiteContent>(initialContent);
  const [status, setStatus] = useState<
    { type: "idle" } | { type: "saving" } | { type: "success"; message: string } | { type: "error"; message: string }
  >({ type: "idle" });

  function updateSociety<K extends keyof SiteContent["society"]>(
    key: K,
    value: SiteContent["society"][K]
  ) {
    setContent((c) => ({ ...c, society: { ...c.society, [key]: value } }));
  }

  function updateHighlight(id: string, patch: Partial<HighlightItem>) {
    setContent((c) => ({
      ...c,
      highlights: c.highlights.map((h) => (h.id === id ? { ...h, ...patch } : h)),
    }));
  }

  function addHighlight() {
    setContent((c) => ({
      ...c,
      highlights: [...c.highlights, { id: newId(), title: "", description: "" }],
    }));
  }

  function removeHighlight(id: string) {
    setContent((c) => ({ ...c, highlights: c.highlights.filter((h) => h.id !== id) }));
  }

  function updateLink(id: string, patch: Partial<LinkItem>) {
    setContent((c) => ({
      ...c,
      links: c.links.map((l) => (l.id === id ? { ...l, ...patch } : l)),
    }));
  }

  function addLink() {
    setContent((c) => ({
      ...c,
      links: [...c.links, { id: newId(), label: "", url: "", icon: "link" }],
    }));
  }

  function removeLink(id: string) {
    setContent((c) => ({ ...c, links: c.links.filter((l) => l.id !== id) }));
  }

  async function handleSave() {
    setStatus({ type: "saving" });
    try {
      const res = await fetch("/api/admin/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(content),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus({ type: "error", message: data.error ?? "Failed to save" });
        return;
      }
      setStatus({
        type: "success",
        message: "Saved! The live site will update in under a minute as it redeploys.",
      });
    } catch {
      setStatus({ type: "error", message: "Network error while saving" });
    }
  }

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-maroon-900">Site Content</h1>
        <button
          onClick={handleLogout}
          className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium hover:bg-neutral-50"
        >
          Log out
        </button>
      </div>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-bold text-maroon-800">Society Info</h2>
        <Field label="Name">
          <input
            className="input"
            value={content.society.name}
            onChange={(e) => updateSociety("name", e.target.value)}
          />
        </Field>
        <Field label="Short Name">
          <input
            className="input"
            value={content.society.shortName}
            onChange={(e) => updateSociety("shortName", e.target.value)}
          />
        </Field>
        <Field label="Tagline">
          <input
            className="input"
            value={content.society.tagline}
            onChange={(e) => updateSociety("tagline", e.target.value)}
          />
        </Field>
        <Field label="Description">
          <textarea
            className="input min-h-24"
            value={content.society.description}
            onChange={(e) => updateSociety("description", e.target.value)}
          />
        </Field>
        <Field label="Mission">
          <textarea
            className="input min-h-24"
            value={content.society.mission}
            onChange={(e) => updateSociety("mission", e.target.value)}
          />
        </Field>
        <Field label="Contact Email">
          <input
            className="input"
            value={content.society.email}
            onChange={(e) => updateSociety("email", e.target.value)}
          />
        </Field>
        <Field label="Instagram Handle">
          <input
            className="input"
            value={content.society.instagramHandle}
            onChange={(e) => updateSociety("instagramHandle", e.target.value)}
          />
        </Field>
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-maroon-800">Highlights</h2>
          <button onClick={addHighlight} className="btn-secondary">
            + Add Highlight
          </button>
        </div>
        {content.highlights.map((h) => (
          <div key={h.id} className="flex flex-col gap-2 rounded-lg border border-neutral-200 p-4">
            <div className="flex items-center gap-2">
              <input
                className="input"
                placeholder="Title"
                value={h.title}
                onChange={(e) => updateHighlight(h.id, { title: e.target.value })}
              />
              <button onClick={() => removeHighlight(h.id)} className="btn-danger">
                Remove
              </button>
            </div>
            <textarea
              className="input"
              placeholder="Description"
              value={h.description}
              onChange={(e) => updateHighlight(h.id, { description: e.target.value })}
            />
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-maroon-800">Links</h2>
          <button onClick={addLink} className="btn-secondary">
            + Add Link
          </button>
        </div>
        {content.links.map((l) => (
          <div key={l.id} className="flex flex-col gap-2 rounded-lg border border-neutral-200 p-4 sm:flex-row sm:items-center">
            <input
              className="input"
              placeholder="Label"
              value={l.label}
              onChange={(e) => updateLink(l.id, { label: e.target.value })}
            />
            <input
              className="input"
              placeholder="URL"
              value={l.url}
              onChange={(e) => updateLink(l.id, { url: e.target.value })}
            />
            <select
              className="input sm:max-w-40"
              value={l.icon}
              onChange={(e) => updateLink(l.id, { icon: e.target.value })}
            >
              {ICON_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <button onClick={() => removeLink(l.id)} className="btn-danger sm:w-auto">
              Remove
            </button>
          </div>
        ))}
      </section>

      <div className="sticky bottom-0 flex flex-col gap-2 border-t border-neutral-200 bg-white py-4">
        {status.type === "success" && (
          <p className="text-sm font-medium text-green-700">{status.message}</p>
        )}
        {status.type === "error" && (
          <p className="text-sm font-medium text-red-600">{status.message}</p>
        )}
        <button
          onClick={handleSave}
          disabled={status.type === "saving"}
          className="rounded-md bg-maroon-800 px-6 py-3 text-sm font-bold text-white transition hover:bg-maroon-700 disabled:opacity-60"
        >
          {status.type === "saving" ? "Saving…" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm font-medium text-neutral-700">{label}</span>
      {children}
    </label>
  );
}
