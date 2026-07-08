import type { Metadata } from "next";
import { getContent } from "@/lib/content";
import AdminEditor from "@/components/admin-editor";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  const content = getContent();

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <AdminEditor initialContent={content} />
    </div>
  );
}
