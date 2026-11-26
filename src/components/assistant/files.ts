import { ATTACHMENT_LIMITS, type Attachment } from "@/lib/assistant/types";

/** File types offered in the picker. Images and plain-text files are read; other documents are attached by name only. */
export const ACCEPT = "image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.csv,.md,.json";

const TEXT_FILE = /\.(txt|csv|md|json)$/i;
const ALLOWED = /\.(pdf|docx?|xlsx?|txt|csv|md|json|jpe?g|png|webp|gif|heic|heif|bmp)$/i;

export type PendingAttachment = Attachment & { id: string };

export function formatSize(bytes?: number) {
  if (!bytes) return "";
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

async function resizeImage(file: File): Promise<string | null> {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, ATTACHMENT_LIMITS.maxImageDimension / Math.max(bitmap.width, bitmap.height));
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return null;
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);
    ctx.drawImage(bitmap, 0, 0, width, height);
    bitmap.close();
    for (const quality of [0.82, 0.65, 0.5]) {
      const url = canvas.toDataURL("image/jpeg", quality);
      if (url.length <= ATTACHMENT_LIMITS.maxDataUrlChars) return url;
    }
    return null;
  } catch {
    return null;
  }
}

/** Reads a picked file into an attachment, or returns an error message. */
export async function readAttachment(file: File): Promise<{ attachment?: PendingAttachment; error?: string }> {
  const id = Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
  const isImage = file.type.startsWith("image/");
  if (!isImage && !ALLOWED.test(file.name)) {
    return { error: `${file.name}: this file type is not supported. Try an image, PDF, Word, Excel or text file.` };
  }
  if (file.size > ATTACHMENT_LIMITS.maxFileBytes) {
    return { error: `${file.name} is larger than 10 MB.` };
  }
  const base = { id, name: file.name, size: file.size };

  if (isImage) {
    const dataUrl = await resizeImage(file);
    // Formats the browser cannot decode (for example HEIC) are still attached, by name only.
    return { attachment: dataUrl ? { ...base, kind: "image", dataUrl } : { ...base, kind: "file" } };
  }
  if (TEXT_FILE.test(file.name) || file.type.startsWith("text/")) {
    try {
      const text = (await file.text()).slice(0, ATTACHMENT_LIMITS.maxTextChars);
      return { attachment: { ...base, kind: "text", text } };
    } catch {
      return { error: `${file.name} could not be read.` };
    }
  }
  return { attachment: { ...base, kind: "file" } };
}
