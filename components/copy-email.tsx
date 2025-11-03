// components/copy-email.tsx
"use client";

type Props = { email: string };

export default function CopyEmail({ email }: Props) {
  return (
    <div className="inline-flex items-center gap-2 rounded-xl border border-neutral-200/60 dark:border-neutral-800 px-3 py-2">
      <code className="text-sm">{email}</code>
      <button
        onClick={() => navigator.clipboard.writeText(email)}
        className="rounded-lg border border-neutral-200/60 dark:border-neutral-800 px-2 py-1 text-xs hover:bg-neutral-50 dark:hover:bg-neutral-900"
        aria-label="Copy email to clipboard"
      >
        Copy
      </button>
    </div>
  );
}
