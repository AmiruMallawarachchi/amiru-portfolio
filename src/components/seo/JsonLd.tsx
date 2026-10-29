import type { SchemaNode } from "@/lib/schema";

// Rendered on the server so the markup is in the initial HTML — crawlers that
// do not execute JavaScript (most AI agents) still get the full graph.
export default function JsonLd({ data }: { data: SchemaNode | SchemaNode[] }) {
  return (
    <script
      type="application/ld+json"
      // Escaping the closing sequence keeps user-editable content from breaking out of the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
