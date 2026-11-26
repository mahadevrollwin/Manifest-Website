export type AttachmentKind = "image" | "text" | "file";

/** A file the visitor attached to a chat message. Only images (resized) and plain text travel to the server with their content. */
export type Attachment = {
  name: string;
  kind: AttachmentKind;
  size?: number;
  /** Resized JPEG data URL (images only). */
  dataUrl?: string;
  /** Extracted text (plain-text files only). */
  text?: string;
};

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
  attachments?: Attachment[];
};

export const ATTACHMENT_LIMITS = {
  maxFiles: 4,
  maxFileBytes: 10 * 1024 * 1024,
  maxImageDimension: 1280,
  maxTextChars: 8000,
  maxDataUrlChars: 1_500_000,
} as const;
