import type { SiteContent } from "./types";

function isString(v: unknown): v is string {
  return typeof v === "string";
}

export function validateSiteContent(value: unknown): value is SiteContent {
  if (!value || typeof value !== "object") return false;
  const v = value as Record<string, unknown>;

  const society = v.society as Record<string, unknown> | undefined;
  if (!society || typeof society !== "object") return false;
  const societyFields = [
    "name",
    "shortName",
    "tagline",
    "description",
    "mission",
    "email",
    "instagramHandle",
  ];
  for (const field of societyFields) {
    if (!isString(society[field])) return false;
  }

  const calendar = v.calendar as Record<string, unknown> | undefined;
  if (!calendar || typeof calendar !== "object") return false;
  if (!isString(calendar.embedUrl)) return false;

  if (!Array.isArray(v.highlights)) return false;
  for (const item of v.highlights) {
    if (!item || typeof item !== "object") return false;
    const h = item as Record<string, unknown>;
    if (!isString(h.id) || !isString(h.title) || !isString(h.description)) {
      return false;
    }
  }

  if (!Array.isArray(v.committee)) return false;
  for (const item of v.committee) {
    if (!item || typeof item !== "object") return false;
    const c = item as Record<string, unknown>;
    if (
      !isString(c.id) ||
      !isString(c.name) ||
      !isString(c.role) ||
      !isString(c.bio) ||
      !isString(c.email)
    ) {
      return false;
    }
  }

  if (!Array.isArray(v.links)) return false;
  for (const item of v.links) {
    if (!item || typeof item !== "object") return false;
    const l = item as Record<string, unknown>;
    if (!isString(l.id) || !isString(l.label) || !isString(l.url) || !isString(l.icon)) {
      return false;
    }
  }

  return true;
}
