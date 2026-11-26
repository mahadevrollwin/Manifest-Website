import type { ReactNode } from "react";

/** Tiny, safe markdown renderer (no HTML injection): paragraphs, lists, **bold**, *italic*, `code` and [links](url). */

function safeHref(href: string) {
  if (href.startsWith("/") || /^https?:\/\//i.test(href) || /^(mailto|tel):/i.test(href)) return href;
  return null;
}

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*|\*([^*\s][^*]*)\*|`([^`]+)`/g;
  let last = 0;
  let match: RegExpExecArray | null;
  let i = 0;
  while ((match = pattern.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    const key = `${keyPrefix}-${i++}`;
    if (match[1] !== undefined) {
      const href = safeHref(match[2]);
      nodes.push(
        href ? (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-champagne underline decoration-champagne/40 underline-offset-2 hover:decoration-champagne"
          >
            {match[1]}
          </a>
        ) : (
          match[1]
        ),
      );
    } else if (match[3] !== undefined) {
      nodes.push(
        <strong key={key} className="font-semibold text-ivory">
          {match[3]}
        </strong>,
      );
    } else if (match[4] !== undefined) {
      nodes.push(<em key={key}>{match[4]}</em>);
    } else if (match[5] !== undefined) {
      nodes.push(
        <code key={key} className="rounded bg-white/10 px-1.5 py-0.5 text-[0.85em]">
          {match[5]}
        </code>,
      );
    }
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

type Block = { type: "p"; lines: string[] } | { type: "ul" | "ol"; items: string[] };

function parseBlocks(source: string): Block[] {
  const blocks: Block[] = [];
  for (const line of source.replace(/\r/g, "").split("\n")) {
    const bullet = line.match(/^\s*[-*•]\s+(.*)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
    const current = blocks.at(-1);
    if (bullet || numbered) {
      const type = bullet ? "ul" : "ol";
      const text = (bullet ?? numbered)![1];
      if (current && current.type === type) current.items.push(text);
      else blocks.push({ type, items: [text] });
    } else if (line.trim() === "") {
      blocks.push({ type: "p", lines: [] });
    } else if (current && current.type === "p") {
      current.lines.push(line);
    } else {
      blocks.push({ type: "p", lines: [line] });
    }
  }
  return blocks.filter((b) => (b.type === "p" ? b.lines.length > 0 : true));
}

export function Markdown({ text }: { text: string }) {
  const blocks = parseBlocks(text);
  return (
    <div className="space-y-3 text-[0.95rem] leading-relaxed text-ivory/90">
      {blocks.map((block, index) => {
        const key = `b${index}`;
        if (block.type === "p") {
          return (
            <p key={key}>
              {block.lines.map((line, li) => (
                <span key={li}>
                  {li > 0 && <br />}
                  {renderInline(line, `${key}-${li}`)}
                </span>
              ))}
            </p>
          );
        }
        const Tag = block.type;
        return (
          <Tag
            key={key}
            className={`space-y-1.5 pl-5 marker:text-champagne ${block.type === "ul" ? "list-disc" : "list-decimal"}`}
          >
            {block.items.map((item, ii) => (
              <li key={ii}>{renderInline(item, `${key}-${ii}`)}</li>
            ))}
          </Tag>
        );
      })}
    </div>
  );
}
