import fs from "fs";
import path from "path";
import type { SiteContent } from "./types";

const contentPath = path.join(process.cwd(), "data", "content.json");

export function getContent(): SiteContent {
  const raw = fs.readFileSync(contentPath, "utf-8");
  return JSON.parse(raw) as SiteContent;
}
