"use client";

// Make sure "default" is included right here!
export default function Footer() { 
  return (
    <footer className="mt-20 border-t border-zinc-800/60 bg-black/20 py-8 text-center backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 flex flex-col items-center justify-center gap-2">
        <p className="text-xs text-zinc-500 font-medium tracking-wide uppercase">
          © {new Date().getFullYear()} Dhruv Kumar. All rights reserved.
        </p>
        <p className="text-xs text-zinc-400">
          Designed & Engineered by{" "}
          <span className="font-semibold text-zinc-200 hover:text-indigo-400 transition-colors duration-300 select-none">
            Dhruv Kumar
          </span>
        </p>
      </div>
    </footer>
  );
}
