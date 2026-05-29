"use client";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({
  isOpen,
  onClose,
}: ResumeModalProps) {
    

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6">

      <div className="relative h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-zinc-950 shadow-2xl">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-zinc-800 p-5">

          <h2 className="text-2xl font-bold">
            Resume Preview
          </h2>

          <button
            onClick={onClose}
            className="rounded-xl border border-zinc-700 px-4 py-2 transition hover:bg-zinc-900"
          >
            Close
          </button>
        </div>

        {/* PDF PREVIEW */}
        <div className="h-full p-5">

          <iframe
            src="/resume.pdf"
            className="h-full w-full rounded-2xl"
          />

        </div>
      </div>
    </div>
  );
}