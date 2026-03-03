import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

describe("markdown rendering safety", () => {
  it("does not render raw html as executable markup", () => {
    const html = renderToStaticMarkup(
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{'Hello <script>alert("xss")</script>'}</ReactMarkdown>,
    );

    expect(html).toContain("&lt;script&gt;");
    expect(html).not.toContain("<script>");
  });
});
